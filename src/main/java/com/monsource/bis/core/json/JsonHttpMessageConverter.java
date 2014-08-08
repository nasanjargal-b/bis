package com.monsource.bis.core.json;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

import java.io.IOException;
import java.lang.reflect.Type;

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

    @Override
    public Object read(Type type, Class<?> contextClass, HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {
        try {
            Object readObject = super.read(type, contextClass, inputMessage);
            return readObject;
        } catch (Exception e) {
            e.printStackTrace();
            if (e instanceof HttpMessageNotReadableException) {
                throw (HttpMessageNotReadableException) e;
            } else if (e instanceof IOException) {
                throw (IOException) e;
            } else {
                throw new RuntimeException(e);
            }
        }
    }
}
