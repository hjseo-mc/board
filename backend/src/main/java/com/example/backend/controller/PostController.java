package com.example.backend.controller;

import com.example.backend.domain.board.Board;
import com.example.backend.domain.board.BoardDto;
import com.example.backend.domain.board.BoardRepository;
import com.example.backend.domain.post.Post;
import com.example.backend.domain.post.PostDto;
import com.example.backend.domain.post.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostRepository postRepository;
    private final BoardRepository boardRepository;

    @GetMapping("/api/posts")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok().body(
            postRepository.findAll().stream()
            .map(Post::toResponse)
            .collect(Collectors.toList())
        );
    }

    @GetMapping("/api/posts/{id}")
    public ResponseEntity<?> getOne(@PathVariable Integer id) {
        return ResponseEntity.ok().body(
            postRepository.findById(id)
            .map(Post::toResponse)
        );
    }

    @PostMapping("/api/posts/")
    public ResponseEntity<?> create(@RequestBody PostDto postDto) {
        return ResponseEntity.ok().body(
            postRepository.save(
                Post.of(
                    postDto.getTitle(),
                    postDto.getContent(),
                    boardRepository.getOne(postDto.getBoardId())
            ))
            .toResponse()
        );
    }

    @DeleteMapping("/api/posts/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        postRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
