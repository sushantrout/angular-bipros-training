package com.hooks.service;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.hooks.entity.Song;
import com.hooks.repo.SongRepo;

@Service
public class SongsService {

	@Autowired
	private SongRepo songRepo;
	
	public Iterable<Song> findAll() {
		PageRequest of = PageRequest.of(0, 3000);
		return songRepo.findAll(of).stream().filter(s -> s.getLrec() != null).collect(Collectors.toList());
	}

}
