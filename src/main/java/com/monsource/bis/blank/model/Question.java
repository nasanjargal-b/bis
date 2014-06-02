package com.monsource.bis.blank.model;

import com.monsource.bis.core.model.TreeModel;

import javax.xml.bind.annotation.*;
import java.util.*;

@XmlRootElement(name = "question")
public class Question implements TreeModel<String> {

    private String id;
    private String text;
    private String name;
    private List<String> choices;
    private ColumnType type;
    private boolean group = false;
    private boolean grid = false;
    private List<Question> children;

    public String getId() {
        return this.id;
    }

    @XmlAttribute(name = "id")
    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return this.text;
    }

    @XmlElement(name = "text")
    public void setText(String text) {
        this.text = text;
    }

    public String getName() {
        return name;
    }

    @XmlAttribute(name = "name")
    public void setName(String name) {
        this.name = name;
    }

    public List<String> getChoices() {
        return this.choices;
    }

    @XmlElementWrapper(name = "choices")
    @XmlElement(name = "choice")
    public void setChoices(List<String> choices) {
        this.choices = choices;
    }

    public ColumnType getType() {
        return this.type;
    }

    @XmlAttribute(name = "type")
    public void setType(ColumnType type) {
        this.type = type;
    }

    public boolean isGroup() {
        return this.group;
    }

    @XmlAttribute(name = "group")
    public void setGroup(boolean group) {
        this.group = group;
    }

    public boolean isGrid() {
        return grid;
    }

    @XmlAttribute(name = "grid")
    public void setGrid(boolean grid) {
        this.grid = grid;
    }

    public List getChildren() {
        return this.children;
    }

    @XmlElementWrapper(name = "questions")
    @XmlElement(name = "question")
    public void setChildren(List<Question> children) {
        this.children = children;
    }

    @XmlTransient
    public boolean isLeaf() {
        return !this.group;
    }

}