package com.hooks.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "songs")
public class Song {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "code")
	private Long code;
	
	@ManyToOne
	@JoinColumn(name = "artistcode")
	private Artist arist;
	
	@ManyToOne
	@JoinColumn(name = "titlecode")
	private Title title;
	
	@Column(name = "lrec")
	private Long lrec;
}
