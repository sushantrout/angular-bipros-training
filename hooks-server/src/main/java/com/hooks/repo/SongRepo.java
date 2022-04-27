package com.hooks.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hooks.entity.Song;

@Repository
public interface SongRepo extends JpaRepository<Song, Long>{

}
