package com.monsource.bis.test.report;

import com.monsource.bis.blank.dao.QuestionDao;
import com.monsource.bis.blank.dao.RecordDao;
import com.monsource.bis.blank.model.MetaData;
import com.monsource.bis.blank.model.QuestionType;
import com.monsource.bis.blank.model.Record;
import com.monsource.bis.blank.service.QuestionService;
import com.monsource.bis.blank.service.RecordService;
import net.sf.dynamicreports.jasper.builder.JasperReportBuilder;
import net.sf.dynamicreports.report.base.expression.AbstractValueFormatter;
import net.sf.dynamicreports.report.builder.DynamicReports;
import net.sf.dynamicreports.report.builder.column.ColumnBuilder;
import net.sf.dynamicreports.report.builder.column.Columns;
import net.sf.dynamicreports.report.builder.column.TextColumnBuilder;
import net.sf.dynamicreports.report.builder.grid.ColumnGridComponentBuilder;
import net.sf.dynamicreports.report.builder.grid.ColumnTitleGroupBuilder;
import net.sf.dynamicreports.report.builder.grid.VerticalColumnGridListBuilder;
import net.sf.dynamicreports.report.builder.style.StyleBuilder;
import net.sf.dynamicreports.report.constant.*;
import net.sf.dynamicreports.report.definition.ReportParameters;
import net.sf.dynamicreports.report.exception.DRException;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.renderers.BatikRenderer;
import org.apache.commons.lang.StringUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import static net.sf.dynamicreports.report.builder.DynamicReports.*;

import java.awt.*;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Time;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.List;

/**
 * Created by nasanjargal on 7/3/14.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({"classpath:context-mod.xml", "classpath:context-db.xml", "classpath:context-web.xml"})
public class TestJasper {
    @Autowired
    RecordDao recordDao;
    @Autowired
    RecordService recordSrv;
    @Autowired
    QuestionService questionSrv;
    @Autowired
    QuestionDao questionDao;

    @Test
    @Transactional
    public void test() throws JRException, IOException, DRException {

        String blankId = "B01";
        List<Record> records = recordSrv.getRecords(blankId, 1, 28);
        List<MetaData> metaDatas = questionSrv.getMetaData(blankId);

        JasperReportBuilder report = report();

        List<ColumnBuilder> columns = new ArrayList<>();
        List<ColumnTitleGroupBuilder> headers = new ArrayList<>();

        for (Record record : records) {
            for (String key : record.keySet()) {
                Object value = record.get(key);

                if (value instanceof Collection) {
                    record.put(key, StringUtils.join((Collection) value, ", "));
                }
            }
        }

        StyleBuilder headerStyle = stl.style().bold().setAlignment(HorizontalAlignment.CENTER, VerticalAlignment.MIDDLE);
        headerStyle.setBorder(stl.border().setTopPen(stl.pen(.5f, LineStyle.SOLID)));
        headerStyle.setBorder(stl.border().setBottomPen(stl.pen(.5f, LineStyle.SOLID)));

        StyleBuilder contentStyle = stl.style().setAlignment(HorizontalAlignment.CENTER, VerticalAlignment.MIDDLE);

        for (MetaData metaData : metaDatas) {

            Class c = null;

            switch (metaData.getType()) {
                case TEXT:
                    c = String.class;
                    break;
                case DATE:
                    c = Date.class;
                    break;
                case TIME:
                    c = Time.class;
                    break;
                case NUMERIC:
                    c = Double.class;
                    break;
                case SINGLE_CHOICE:
                    c = Integer.class;
                    break;
                case MULTIPLE_CHOICE:
                    c = String.class;
                    break;
            }

            TextColumnBuilder column = Columns.column(metaData.getCode(), metaData.getCode(), c);
            column.setStyle(contentStyle);

            if (metaData.getType() == QuestionType.TIME) {
                column.setValueFormatter(new AbstractValueFormatter<String, Time>() {
                    @Override
                    public String format(Time value, ReportParameters reportParameters) {
                        DateFormat df = new SimpleDateFormat("HH:mm:ss");
                        return df.format(value);
                    }
                });
            }

            columns.add(column);

            headers.add(grid.titleGroup(metaData.getText(), column));
        }

        BatikRenderer svg = BatikRenderer.getInstance(new FileInputStream("/media/d/My Project/bis/WebBis/src/test/test.xml"));


        report.setPageFormat(PageType.A4, PageOrientation.LANDSCAPE);
        report.columns(columns.toArray(new ColumnBuilder[columns.size()]));
        report.columnGrid(headers.toArray(new ColumnGridComponentBuilder[headers.size()]));

        report.pageHeader(cmp.image(svg).setWidth(400).setHorizontalAlignment(HorizontalAlignment.CENTER));

        report.setColumnTitleStyle(headerStyle);
        report.setDetailFooterStyle(stl.style().setBottomBorder(stl.pen(.5f, LineStyle.SOLID)));

        report.setDataSource(records);
        report.highlightDetailEvenRows();

        report.toXlsx(new FileOutputStream("/home/nasanjargal/Desktop/test/jasper_test.xlsx"));
        report.toPdf(new FileOutputStream("/home/nasanjargal/Desktop/test/jasper_test.pdf"));

        /*report.show();

        Scanner scanner = new Scanner(System.in);

        scanner.nextLine();*/

    }
}
