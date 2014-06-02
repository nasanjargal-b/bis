package com.monsource.bis.core.json;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.servlet.View;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

public class JsonView implements View {

    ObjectMapper objectMapper;
    JsonData jsonData;

    public JsonView(ObjectMapper objectMapper, JsonData jsonData) {
        this.objectMapper = objectMapper;
        this.jsonData = jsonData;
    }

    public JsonData getJsonData() {
        return jsonData;
    }

    @Override
    public String getContentType() {
        return "application/json";
    }

    @Override
    public void render(Map<String, ?> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
        if (!jsonData.isSuccess()) {
            response.sendError(500, jsonData.getMessage());
            return;
        }

        objectMapper.writeValue(response.getOutputStream(), jsonData);
    }
}