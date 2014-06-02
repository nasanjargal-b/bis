@XmlSchema(
        namespace = "http://www.monsource.net/xsd/blank",
        xmlns = {
                @XmlNs(namespaceURI = "http://www.monsource.net/xsd/blank", prefix = "")
        },
        elementFormDefault = XmlNsForm.QUALIFIED
) package com.monsource.bis.blank.model;

import javax.xml.bind.annotation.XmlNs;
import javax.xml.bind.annotation.XmlNsForm;
import javax.xml.bind.annotation.XmlSchema;