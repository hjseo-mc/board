package com.example.backend.domain.post;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class PostDto implements Serializable {
    private Integer id;
    private final String title;
    private final String content;
    private final Integer boardId;
}



