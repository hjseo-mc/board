package com.example.backend.domain;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonIgnoreProperties({ "id" })
@AllArgsConstructor
public class PostDto implements Serializable {
    private Integer id;
    private String title;
    private String content;

    public Post toEntity() {
        return new Post(id, title, content);
    }
}
