<%@ page import="java.util.Date" %>
<%--
  Created by IntelliJ IDEA.
  User: nasanjargal
  Date: 7/17/14
  Time: 4:17 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Барилгын эрэлт, нийлүүлэтийн судалгааны мэдээллийн сан</title>
    <link rel="stylesheet" href="/resources/css/style.css?_dc=<%=new Date().getTime()%>"/>
    <link rel="stylesheet" href="/resources/css/960.css?_dc=<%=new Date().getTime()%>"/>
    <script src="/resources/js/jquery-1.11.1.min.js"></script>
    <script>
        $(document).ready(function () {
            $('.blur').fadeOut(600, function () {
            });
        });
    </script>
</head>
<body>
<div class="blur">

</div>
<div class="container container_11">
    <!-- START LOGOS-->
    <div class="grid_2">&nbsp;</div>
    <div class="grid_1">
        <img class="logo" src="/resources/images/logo-mon.png"/>
    </div>
    <div class="grid_1">&nbsp;</div>
    <div class="grid_1">
        <img class="logo" src="/resources/images/ub-logo.png"/>
    </div>
    <div class="grid_1">&nbsp;</div>
    <div class="grid_1">
        <img class="logo" src="/resources/images/barilga-logo.png"/>
    </div>
    <div class="grid_1">&nbsp;</div>
    <div class="grid_1">
        <img class="logo" src="/resources/images/mnca-logo.png"/>
    </div>
    <div class="grid_2">&nbsp;</div>
    <!-- END LOGOS-->
</div>
<div class="clear"></div>
<div class="main-image">
    <div class="home-image">
        <div><img width="100%" src="/resources/images/home-back.jpg"/></div>
        <div><a href="home.jsp"><img class="btn-login" src="/resources/images/btn-login.png"/></a></div>
    </div>
</div>
<div class="clear"></div>
<div class="footer container container_11">
    <!-- START LOGOS-->
    <div class="grid_1">
        <img class="logo" src="/resources/images/mmcg-logo.png"/>
    </div>
    <div class="grid_2">&nbsp;</div>
    <div class="grid_5 title"><span>ОРОН СУУЦНЫ ЭРЭЛТ, НИЙЛҮҮЛЭЛТИЙН СУДАЛГААНЫ МЭДЭЭЛЛИЙН САН</span></div>
    <div class="grid_2">&nbsp;</div>
    <div class="grid_1">
        <img class="logo" src="/resources/images/monsource-logo.png"/>
    </div>
    <!-- END LOGOS-->
</div>
</body>
</html>
