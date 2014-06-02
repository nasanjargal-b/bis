package com.monsource.bis.core.json;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

/**
 * Created by nasanjargal on 3/31/14.
 */
public class JsonHttpMessageConverter extends MappingJackson2HttpMessageConverter {

    public JsonHttpMessageConverter() {
        super();
        defaultConfigure(this.getObjectMapper());
    }

    @Override
    public void setObjectMapper(ObjectMapper objectMapper) {
        defaultConfigure(objectMapper);
        super.setObjectMapper(objectMapper);
    }

    private void defaultConfigure(ObjectMapper objectMapper) {
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    }
}
