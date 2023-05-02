package com.example.backend.domain.board;

import com.example.backend.domain.post.Post;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Board {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    @OneToMany(mappedBy = "board")
    private List<Post> post = new ArrayList<>();

    public static Board of(String title, String description){
        return new Board(title, description);
    }
    public Board(String title, String description) {
        this.title = title;
        this.description = description;
    }
    public BoardDto toResponse(){
        return new BoardDto(id, title, description);
    }
}
