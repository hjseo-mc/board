package com.example.backend;

import com.example.backend.domain.board.Board;
import com.example.backend.domain.board.BoardRepository;
import com.example.backend.domain.post.Post;
import com.example.backend.domain.post.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.annotation.PostConstruct;
import java.util.List;

@SpringBootApplication
public class BackendApplication {
    public static void main(String[] args) {SpringApplication.run(BackendApplication.class, args);}

    @Bean
    CommandLineRunner init(BoardRepository boardRepository, PostRepository postRepository) {
        return args -> {
            if (args.length > 0 && args[0].equals("test")) {
                Board board = boardRepository.save(Board.of("title1", "description1"));
                postRepository.saveAll(
                    List.of(
                        Post.of("title1", "content1", board),
                        Post.of("title2", "content2", board),
                        Post.of("title3", "content3", board)
                    )
                );
            }
        };
    }
}
