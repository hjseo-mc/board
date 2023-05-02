package com.example.backend.controller;

import com.example.backend.domain.board.Board;
import com.example.backend.domain.board.BoardDto;
import com.example.backend.domain.board.BoardRepository;
import com.example.backend.domain.post.Post;
import com.example.backend.domain.post.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardRepository boardRepository;
    private final PostRepository postRepository;

    @GetMapping("/api/boards")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok().body(
                boardRepository.findAll().stream()
                .map(Board::toResponse)
                .collect(Collectors.toList())
        );
    }

    @GetMapping("/api/boards/{id}")
    public ResponseEntity<?> getOne(@PathVariable Integer id) {
        return ResponseEntity.ok().body(
                boardRepository.findById(id)
                .map(Board::toResponse)
        );
    }

    @GetMapping("/api/boards/{id}/posts")
    public ResponseEntity<?> getPosts(@PathVariable Integer id) {
        return ResponseEntity.ok().body(
            postRepository.findByBoardId(id).stream()
                .map(Post::toResponse).collect(Collectors.toList())
        );
    }

    @PostMapping("/api/boards/")
    public ResponseEntity<?> create(@RequestBody BoardDto boardDto) {
        return ResponseEntity.ok().body(
                boardRepository.save(Board.of(boardDto.getTitle(), boardDto.getDescription()))
                .toResponse()
        );
    }

    @DeleteMapping("/api/boards/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        boardRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
