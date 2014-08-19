package com.monsource.bis.report.ws;

import com.monsource.bis.data.entity.*;
import com.monsource.bis.data.entity.type.ReportParameterType;
import com.monsource.bis.data.entity.type.ReportType;
import com.monsource.bis.report.dao.ReportDao;
import com.monsource.bis.report.service.ReportViewService;
import com.monsource.bis.report.ws.xml.*;
import org.apache.axis.MessageContext;
import org.apache.axis.transport.http.AxisServlet;
import org.apache.axis.transport.http.HTTPConstants;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.context.ApplicationContext;
import org.springframework.web.servlet.FrameworkServlet;

import javax.servlet.http.HttpServlet;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import java.io.StringReader;
import java.io.StringWriter;
import java.util.*;

/**
 * Created by nasanjargal on 8/13/14.
 */
public class ReportWebService {

    private ApplicationContext getSpringContext() {
        MessageContext currentContext = MessageContext.getCurrentContext();
        HttpServlet servlet = (AxisServlet) currentContext.getProperty(HTTPConstants.MC_HTTP_SERVLET);
        ApplicationContext ctx = (ApplicationContext) servlet.getServletContext().getAttribute(FrameworkServlet.SERVLET_CONTEXT_PREFIX + "dispatcher");
        return ctx;
    }

    public String reports() throws JAXBException {

        ApplicationContext ctx = this.getSpringContext();

        SessionFactory sessionFactory = ctx.getBean(SessionFactory.class);
        Session session = sessionFactory.getCurrentSession();

        Criteria criteria = session.createCriteria(ReportEntity.class);
        criteria.add(Restrictions.eq("group", false));
        criteria.add(Restrictions.ne("type", ReportType.JASPER));
        List<ReportEntity> reports = criteria.list();

        ArrayList<ReportXml> reportXmlList = new ArrayList<>();

        for (ReportEntity report : reports) {
            ReportXml reportXml = new ReportXml(report.getId(), report.getName());
            ArrayList<ParameterXml> parameters = new ArrayList<ParameterXml>();

            for (ReportParameterEntity parameter : report.getReportParameters()) {
                if (parameter.getType() == ReportParameterType.QUERY) continue;

                ParameterXml parameterXml = new ParameterXml(parameter.getCode(), parameter.getName(), new ArrayList<ValueXml>());

                switch (parameter.getType()) {
                    case CITY:
                        Criteria cityCriteria = session.createCriteria(CityEntity.class);
                        List<CityEntity> cities = cityCriteria.list();
                        for (CityEntity city : cities) {
                            parameterXml.getValues().add(new ValueXml(city.getId(), city.getName()));
                        }
                        break;
                    case DISTRICT:
                        Criteria districtCriteria = session.createCriteria(DistrictEntity.class);
                        List<DistrictEntity> districts = districtCriteria.list();
                        for (DistrictEntity district : districts) {
                            parameterXml.getValues().add(new ValueXml(district.getId(), district.getCity().getName() + ", " + district.getName()));
                        }
                        break;
                    case RESEARCH:
                        Criteria researchCriteria = session.createCriteria(ResearchEntity.class);
                        List<ResearchEntity> researches = researchCriteria.list();
                        for (ResearchEntity research : researches) {
                            parameterXml.getValues().add(new ValueXml(research.getId(), research.getYear() + " - " + research.getName()));
                        }
                        break;
                }

                parameters.add(parameterXml);
            }

            reportXml.setParameters(parameters);
            reportXmlList.add(reportXml);
        }

        JAXBContext jaxbContext = JAXBContext.newInstance(ReportsXml.class);
        Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

        StringWriter writer = new StringWriter();
        jaxbMarshaller.marshal(new ReportsXml(reportXmlList), writer);

        return writer.toString();
    }

    public String reportData(Integer id, String parameters) throws JAXBException {

        JAXBContext jaxbContext = JAXBContext.newInstance(InputParamsXml.class);
        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();

        InputParamsXml params = (InputParamsXml) unmarshaller.unmarshal(new StringReader(parameters));

        ApplicationContext ctx = getSpringContext();
        ReportViewService reportViewSrv = ctx.getBean(ReportViewService.class);
        ReportDao reportDao = ctx.getBean(ReportDao.class);

        Map<String, String[]> paramMap = new HashMap<>();

        for (InputParamXml param : params) {
            paramMap.put(param.getId(), new String[]{param.getValue()});
        }

        List<Map> datas = reportViewSrv.calc(id, paramMap);

        ReportEntity report = reportDao.get(id);

        ReportResultsXml reportResults = new ReportResultsXml(report.getId(), report.getName());
        reportResults.setColumns(new ArrayList<ReportResultColumnXml>());
        reportResults.setRows(new ArrayList<ReportResultRowXml>());

        for (ReportQuestionEntity question : report.getReportQuestions()) {
            reportResults.getColumns().add(new ReportResultColumnXml(question.getCode(), question.getName()));
        }

        for (Map data : datas) {
            reportResults.getRows().add(new ReportResultRowXml(data));
        }


        JAXBContext jaxbContextResult = JAXBContext.newInstance(ReportResultsXml.class);
        Marshaller marshaller = jaxbContextResult.createMarshaller();

        StringWriter writer = new StringWriter();
        marshaller.marshal(reportResults, writer);

        return writer.toString();
    }

}
