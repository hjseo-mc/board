package com.example.backend.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String title;
    @Column
    private String content;

    private Post(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public static Post of(String title, String content){
        return new Post(title, content);
    }

    public PostDto toDto(){
        return new PostDto(id, title, content);
    }
}
