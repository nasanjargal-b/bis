package com.monsource.bis.report.component;

import com.monsource.bis.data.entity.type.ReportCalcType;
import com.monsource.bis.report.controller.ReportFileCtrl;
import com.monsource.bis.report.model.Column;
import com.monsource.bis.report.model.Report;
import net.sf.dynamicreports.jasper.builder.JasperReportBuilder;
import net.sf.dynamicreports.jasper.builder.export.JasperHtmlExporterBuilder;
import net.sf.dynamicreports.report.base.expression.AbstractValueFormatter;
import net.sf.dynamicreports.report.builder.FieldBuilder;
import net.sf.dynamicreports.report.builder.column.*;
import net.sf.dynamicreports.report.builder.group.CustomGroupBuilder;
import net.sf.dynamicreports.report.builder.group.GroupBuilder;
import net.sf.dynamicreports.report.builder.style.FontBuilder;
import net.sf.dynamicreports.report.builder.style.StyleBuilder;
import net.sf.dynamicreports.report.builder.subtotal.SubtotalBuilder;
import net.sf.dynamicreports.report.constant.*;
import net.sf.dynamicreports.report.definition.ReportParameters;
import net.sf.dynamicreports.report.definition.expression.DRIExpression;
import net.sf.dynamicreports.report.exception.DRException;
import net.sf.jasperreports.engine.design.JRDesignStyle;
import net.sf.jasperreports.engine.design.JasperDesign;
import org.apache.commons.io.IOUtils;

import javax.servlet.ServletContext;
import java.awt.*;
import java.io.*;
import java.sql.Time;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import static net.sf.dynamicreports.report.builder.DynamicReports.*;
import static net.sf.dynamicreports.report.builder.DynamicReports.stl;

/**
 * Created by nasanjargal on 7/17/14.
 */
public class ReportBuilder {

    private JasperReportBuilder jasperReport;
    private Color color = new Color(0, 82, 150);

    Report report;
    List<Map> datas;
    InputStream imageInput;
    ServletContext ctx;
    ReportFileCtrl.FileType type;

    public ReportBuilder(Report report, List<Map> datas, InputStream imageInput, ReportFileCtrl.FileType type, ServletContext ctx) throws DRException {

        this.report = report;
        this.datas = datas;
        this.imageInput = imageInput;
        this.ctx = ctx;
        this.type = type;

        this.jasperReport = report();
        this.jasperReport.setPageMargin(margin(20));
        this.jasperReport.setNoDataBackgroundComponent(cmp.text("Өгөгдөл олдсонгүй"));
        this.jasperReport.setNoDataStyle(stl.style().bold().setFontSize(24).setAlignment(HorizontalAlignment.CENTER, VerticalAlignment.MIDDLE));

        initHeader(ctx != null ? ctx.getRealPath("resources/images/logomn.png") : "/media/d/My Project/bis/WebBis/src/main/webapp/resources/images/logomn.png");
        initFooter();

        if (type == ReportFileCtrl.FileType.HTML && report.getChart() != null) {
            jasperReport.addTitle(cmp.horizontalList()
                    .add(cmp.rectangle()
                            .setPrintWhenExpression(exp.printInFirstPage())
                            .setHeight(400)
                            .setStyle(stl.style().setBorder(stl.border(stl.pen(1f, LineStyle.SOLID).setLineColor(Color.black)))))
                    .setStyle(stl.style().setBottomPadding(20)));
        } else if (imageInput != null) {
            jasperReport.addTitle(cmp.horizontalList()
                    .add(cmp.image(imageInput)
                            .setPrintWhenExpression(exp.printInFirstPage())
                            .setHeight(300)
                            .setStyle(stl.style().setBorder(stl.border(stl.pen(1f, LineStyle.SOLID).setLineColor(Color.black)))))
                    .setStyle(stl.style().setBottomPadding(20)));
        }

        initBody();
    }

    private void initHeader(String logo) {
        jasperReport.title(
                cmp.verticalList()
                        .add(cmp.horizontalList()
                                .add(cmp.hListCell(
                                        cmp.image(logo)
                                                .setWidth(40)
                                                .setHeight(43)
                                                .setStyle(stl.style()
                                                        .setTopPadding(3)
                                                        .setBottomPadding(2)
                                                        .setAlignment(HorizontalAlignment.RIGHT, VerticalAlignment.MIDDLE)))
                                        .widthFixed())
                                .add(cmp.text(report.getName()).setStyle(stl.style()
                                        .setForegroundColor(color)
                                        .setFontSize(15)
                                        .setBold(true)
                                        .setAlignment(HorizontalAlignment.RIGHT, VerticalAlignment.MIDDLE)
                                        .setTopPadding(5)
                                        .setBottomPadding(5)))
                                .setStyle(stl.style()
                                        .setBorder(stl.border()
                                                .setTopPen(stl.pen().setLineStyle(LineStyle.SOLID).setLineWidth(3f).setLineColor(color))
                                                .setBottomPen(stl.pen().setLineStyle(LineStyle.SOLID).setLineWidth(1.3f).setLineColor(color)))))
                        .setStyle(stl.style().setBottomPadding(20))
        );
        jasperReport.pageHeader(
                cmp.verticalList()
                        .add(cmp.horizontalList()
                                .add(cmp.hListCell(
                                        cmp.image(logo)
                                                .setWidth(40)
                                                .setHeight(43)
                                                .setStyle(stl.style()
                                                        .setTopPadding(3)
                                                        .setBottomPadding(2)
                                                        .setAlignment(HorizontalAlignment.LEFT, VerticalAlignment.MIDDLE)))
                                        .widthFixed())
                                .add(cmp.text(report.getName()).setStyle(stl.style()
                                        .setForegroundColor(color)
                                        .setFontSize(15)
                                        .setBold(true)
                                        .setAlignment(HorizontalAlignment.RIGHT, VerticalAlignment.MIDDLE)
                                        .setTopPadding(5)
                                        .setBottomPadding(5)))
                                .setStyle(stl.style()
                                        .setBorder(stl.border()
                                                .setTopPen(stl.pen().setLineStyle(LineStyle.SOLID).setLineWidth(3f).setLineColor(color))
                                                .setBottomPen(stl.pen().setLineStyle(LineStyle.SOLID).setLineWidth(1.3f).setLineColor(color)))))
                        .setStyle(stl.style().setBottomPadding(20))
        );

        jasperReport.setPageHeaderPrintWhenExpression(exp.printNotInFirstPage());
    }

    private void initFooter() {
//        jasperReport.subtotalsAtSummary(sbt.sum())
        jasperReport.pageFooter(cmp.horizontalList()
                        .add(cmp.pageNumber().setStyle(stl.style()
                                .setForegroundColor(color)
                                .setFontSize(11)
                                .setBold(true)
                                .setAlignment(HorizontalAlignment.LEFT, VerticalAlignment.MIDDLE)
                                .setTopPadding(5)
                                .setBottomPadding(5)))
                        .setStyle(stl.style().setTopBorder(stl.pen(3f, LineStyle.SOLID).setLineColor(color)))
        );
    }

    private void initBody() {
        List<ColumnBuilder> columnBuilders = getColumnBuilders();
        List<GroupBuilder> columnGroupBuilders = getColumnGroupBuilders();

        calcPageSize(columnBuilders.size());

        jasperReport.setColumnHeaderStyle(stl.style()
                .bold()
                .setTopBorder(stl.pen(2f, LineStyle.SOLID).setLineColor(color))
                .setBottomBorder(stl.pen(2f, LineStyle.SOLID).setLineColor(color)));

        jasperReport.setDetailStyle(stl.style()
                .setBottomBorder(stl.pen(.5f, LineStyle.SOLID).setLineColor(new Color(0, 82, 150, 83)))
                .setTopPadding(3)
                .setBottomPadding(3));

        jasperReport.columns(columnBuilders.toArray(new ColumnBuilder[columnBuilders.size()]));

        if (columnGroupBuilders.size() > 0) {
            jasperReport.groupBy(columnGroupBuilders.toArray(new GroupBuilder[columnGroupBuilders.size()]));
        }

        jasperReport.setDataSource(datas);

        jasperReport.setSummaryStyle(stl.style().setBackgroundColor(new Color(0, 82, 150, 20)).setBottomPadding(3).setTopPadding(3));
    }

    private void calcPageSize(int colNum) {
        if (colNum > 6) {
            jasperReport.setPageFormat(PageType.A4, PageOrientation.LANDSCAPE);
        } else {
            jasperReport.setPageFormat(PageType.A4, PageOrientation.PORTRAIT);
        }
    }

    public void build(OutputStream outputStream) throws DRException, FileNotFoundException {
        switch (type) {
            case PDF:
                jasperReport.toPdf(outputStream);
                break;
            case DOCX:
                jasperReport.toDocx(outputStream);
                break;
            case XLSX:
                jasperReport.toXlsx(outputStream);
                break;
            case HTML:
                JasperHtmlExporterBuilder htmlExporter = export.htmlExporter(outputStream)
                        .setImagesDirName(ctx.getRealPath("resources/report"))
                        .setImagesURI("/resources/report/")
                        .setHtmlHeader("")
                        .setHtmlFooter("")
                        .setOutputImagesToDir(true);

                jasperReport.toHtml(htmlExporter);
                break;
        }
    }

    public JasperReportBuilder getJasperReport() {
        return jasperReport;
    }

    public List<ColumnBuilder> getColumnBuilders() {
        List<ColumnBuilder> columnBuilders = new ArrayList<>();

        final DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        final DateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");
        final NumberFormat numberFormat = new DecimalFormat("#,##0");

        StyleBuilder columnStyle = stl.style().setFontSize(11).setTopPadding(3).setBottomPadding(3);
        StyleBuilder numColumnStyle = stl.style().setFontSize(11).setTopPadding(3).setBottomPadding(3).setHorizontalAlignment(HorizontalAlignment.LEFT);

        for (final Column column : report.getColumns()) {
//            if (column.getCalcType() == ReportCalcType.GROUP) continue;

            AbstractValueFormatter<Object, Object> valueFormatter = new AbstractValueFormatter<Object, Object>() {
                @Override
                public Object format(Object value, ReportParameters reportParameters) {
                    if (column.getPercent() && value instanceof Number)
                        return numberFormat.format(value) + " %";
                    else if (value instanceof Number)
                        return numberFormat.format(value);
                    else if (value instanceof Time)
                        return timeFormat.format(value);
                    else if (value instanceof Date)
                        return dateFormat.format(value);
                    else
                        return value;
                }
            };

            String name = column.getName();
            String code = column.getCode();

            ColumnBuilder columnBuilder;

            ReportCalcType calcType = column.getCalcType();

            switch (calcType) {
                case COUNT:
                case MAX:
                case MIN:
                case SUM:
                case AVG:
                    columnBuilder = Columns.column(name, field(code, Number.class)).setValueFormatter(valueFormatter).setStyle(numColumnStyle);
                    break;
                default:
                    switch (column.getColumnType()) {
                        case SINGLE_CHOICE:
                        case MULTIPLE_CHOICE:
                        case TEXT:
                            columnBuilder = Columns.column(name, code, String.class).setStyle(columnStyle);
                            break;
                        case DATE:
                            columnBuilder = Columns.column(name, code, Date.class).setValueFormatter(valueFormatter).setStyle(columnStyle);
                            break;
                        case TIME:
                            columnBuilder = Columns.column(name, code, Time.class).setValueFormatter(valueFormatter).setStyle(columnStyle);
                            break;
                        default:
                            columnBuilder = Columns.column(name, field(code, getColumnClass(column))).setValueFormatter(valueFormatter).setStyle(numColumnStyle);
                            break;
                    }
                    break;
            }
            columnBuilder.setTitleStyle(stl.style().bold().setBottomPadding(3).setTopPadding(3));
            columnBuilders.add(columnBuilder);

            List<SubtotalBuilder> subtotalBuilders = new ArrayList<>();


            if (column.getSummaryType() != null) {
                switch (column.getSummaryType()) {
                    case AVG:
                        subtotalBuilders.add(sbt.avg((ValueColumnBuilder<?, Number>) columnBuilder).setValueFormatter(valueFormatter));
                        break;
                    case COUNT:
                        subtotalBuilders.add(sbt.count((ValueColumnBuilder<?, Number>) columnBuilder).setValueFormatter(valueFormatter));
                        break;
                    case SUM:
                        subtotalBuilders.add(sbt.sum((ValueColumnBuilder<?, Number>) columnBuilder).setValueFormatter(valueFormatter));
                        break;
                    case MAX:
                        subtotalBuilders.add(sbt.max((ValueColumnBuilder<?, Number>) columnBuilder).setValueFormatter(valueFormatter));
                        break;
                    case MIN:
                        subtotalBuilders.add(sbt.min((ValueColumnBuilder<?, Number>) columnBuilder).setValueFormatter(valueFormatter));
                        break;
                }
            }

            if (subtotalBuilders.size() > 0) {
                jasperReport.subtotalsAtSummary(subtotalBuilders.toArray(new SubtotalBuilder[subtotalBuilders.size()]));
                jasperReport.setSubtotalStyle(stl.style().boldItalic().underline().setHorizontalAlignment(HorizontalAlignment.LEFT).setTopPadding(3).setBottomPadding(3));
            }

        }

        return columnBuilders;
    }

    public List<GroupBuilder> getColumnGroupBuilders() {
        ArrayList<GroupBuilder> columnGroupBuilders = new ArrayList<>();

        /*for (Column column : report.getColumns()) {
            if (column.getCalcType() == ReportCalcType.GROUP) {
                CustomGroupBuilder group = grp.group(column.getCode(), getColumnClass(column))
                        .setStyle(stl.style().bold().setFontSize(11).setTopPadding(5));
                columnGroupBuilders.add(group);
            }
        }*/

        return columnGroupBuilders;
    }

    private Class<?> getColumnClass(Column column) {
        switch (column.getColumnType()) {
            case NUMERIC:
                return Number.class;
            case TIME:
                return Time.class;
            case DATE:
                return Date.class;
            default:
                return String.class;
        }
    }
}
