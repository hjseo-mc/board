package com.example.backend.domain.post;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class PostDto implements Serializable {
    private Integer id;
    private String title;
    private String content;
    private Integer boardId;
}



