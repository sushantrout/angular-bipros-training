package com.hooks.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hooks.dto.SongDTO;
import com.hooks.entity.Artist;
import com.hooks.entity.Title;
import com.hooks.service.SongsService;

@RestController
@RequestMapping(value = "/api/songs")
public class SongController {
	
	@Autowired
	private SongsService songsService;
	
	@GetMapping
	public List<SongDTO> findAll() {
		List<SongDTO> songs = new ArrayList<>();
		songsService.findAll().forEach(a -> {
			SongDTO dto = new SongDTO();
			Artist arist = a.getArist();
			if(arist != null) {
				dto.setArtist(arist.getName());				
			}
			Title title = a.getTitle();
			if(title != null) {
				dto.setTitle(title.getName());
			}
			dto.setCode(a.getCode());
			dto.setLrec(a.getLrec());
			songs.add(dto);
		});
		return songs;
	}
}
