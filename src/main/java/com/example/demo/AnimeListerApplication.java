package com.example.demo;

import com.example.demo.dao.DAO;
import com.example.demo.model.Anime;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class AnimeListerApplication {

	private static DAO<Anime> dao;

	public AnimeListerApplication(DAO<Anime> dao) {
		this.dao = dao;
	}


	public static void main(String[] args) {
		SpringApplication.run(AnimeListerApplication.class, args);


	}
}
