package com.example.backend.controller;

import com.example.backend.domain.Post;
import com.example.backend.domain.PostDto;
import com.example.backend.domain.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostRepository postRepository;

    @GetMapping("/api/posts")
    public ResponseEntity getList() {
        return ResponseEntity.ok().body(
            postRepository.findAll().stream()
                .map(Post::toDto)
                .collect(Collectors.toList())
        );
    }

    @GetMapping("/api/posts/{id}")
    public ResponseEntity getPost(@PathVariable Integer id) {
        return ResponseEntity.ok().body(
            postRepository.findById(id)
                .map(Post::toDto)
        );
    }

    @PostMapping("/api/posts")
    public ResponseEntity createPost(@RequestBody PostDto postDto) {
        return ResponseEntity.ok().body(
            postRepository.save(Post.of(postDto.getId(), postDto.getTitle(), postDto.getContent()))
            .toDto()
        );
    }

    @DeleteMapping("/api/posts/{id}")
    public ResponseEntity deletePost(@PathVariable Integer id){
        postRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
