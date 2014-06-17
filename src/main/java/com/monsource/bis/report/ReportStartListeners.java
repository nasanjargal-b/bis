package com.monsource.bis.report;

import org.pentaho.reporting.engine.classic.core.ClassicEngineBoot;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Created by nasanjargal on 6/13/14.
 */
public class ReportStartListeners implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        ClassicEngineBoot.getInstance().start();
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
    }
}
