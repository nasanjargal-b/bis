package com.monsource.bis.core.model;

import java.io.Serializable;
import java.util.List;

/**
 * Created by nasanjargal on 5/31/14.
 */
public interface TreeModel<K> extends Serializable {

    public K getId();

    public String getName();

    public boolean isLeaf();

    public List getChildren();

}
