package com.example.backend.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String content;

    private Post(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public static Post of(Integer id, String title, String content){
        return new Post(id, title, content);
    }

    public PostDto toDto(){
        return new PostDto(id, title, content);
    }
}
