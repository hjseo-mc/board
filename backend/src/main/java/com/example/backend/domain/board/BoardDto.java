package com.example.backend.domain.board;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class BoardDto implements Serializable {
    private Integer id;
    private String title;
    private String description;

    public Board toEntity() {
        return Board.of(title, description);
    }

}
