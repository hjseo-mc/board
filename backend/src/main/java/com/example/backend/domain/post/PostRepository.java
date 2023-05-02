package com.example.backend.domain.post;


import com.example.backend.domain.board.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface PostRepository extends JpaRepository<Post, Integer> {
    Collection<Post> findByBoardId(Integer boardId);
}
