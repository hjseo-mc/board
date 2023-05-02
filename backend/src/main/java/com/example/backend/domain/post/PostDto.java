package com.example.backend.domain;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
// @JsonIgnoreProperties(ignoreUnknown = true) - 스프링 부트에 이미 설정되어 있음
@AllArgsConstructor
public class PostDto implements Serializable {
    private Integer id;
    private String title;
    private String content;

    public Post toEntity() {
        return new Post(id, title, content);
    }
}
