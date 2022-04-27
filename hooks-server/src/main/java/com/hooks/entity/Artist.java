package com.hooks.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "Artists")
public class Artist {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "code")
	private Long code;
	
	@Column(name = "Name")
	private String name;
}
