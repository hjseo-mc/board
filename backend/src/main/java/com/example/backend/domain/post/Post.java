package com.example.backend.domain.post;

import com.example.backend.domain.board.Board;
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
    @ManyToOne @JoinColumn(name = "board_id")
    private Board board;

    private Post(String title, String content, Board board) {
        this.title = title;
        this.content = content;
        this.board = board;
    }

    public static Post of(String title, String content, Board board){
        return new Post(title, content, board);
    }

    public PostDto toResponse(){
        return new PostDto(id, title, content, board.getId());
    }
}
