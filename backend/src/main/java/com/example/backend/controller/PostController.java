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

import javax.transaction.Transactional;
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
            .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."))
            .toResponse()
        );
    }

    @PostMapping("/api/posts/")
    public ResponseEntity<?> create(@RequestBody PostDto postDto) {
        System.out.println("postDto: " + postDto);
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

    @PatchMapping("/api/posts/{id}")
    public ResponseEntity<?> update(@PathVariable Integer id, @RequestBody PostDto postDto) {
        System.out.println("update with " + postDto);
        Post post = postRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다."));
        post.update(postDto.getTitle(), postDto.getContent());
        System.out.println("updated post: " + post);
        return ResponseEntity.ok().body(
            postRepository.save(post).toResponse()
        );
    }

    @DeleteMapping("/api/posts/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        postRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
