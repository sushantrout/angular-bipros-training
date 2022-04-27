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
@Table(name = "titles")
public class Title {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "code")
	private Long code;
	
	@Column(name = "name")
	private String name;
}
