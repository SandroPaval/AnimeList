package com.example.demo.controller;

import com.example.demo.dao.DAO;
import com.example.demo.model.Anime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class AnimeController {

    @Autowired
    private DAO dao;

    @GetMapping("/Anime")
    public List<Anime> getAnime(){
        return dao.getAllAnimes();
    }

    @GetMapping("/Anime/Favorite")
    public List<Anime> getAnimeByFavorite(){return dao.getAllAnimeByFavorit();}

    @GetMapping("/Anime/{id}")
    public Optional getAnimeById(@PathVariable int id) {
        return dao.getAnimeById(id);
    }

    @GetMapping("/Anime/Wertung")
   public List<Anime> getAnimeByWertung(){return dao.getAllAnimesByWertung();}

    @PostMapping("/Anime")
    public void saveAnime(@RequestBody Anime anime){
        dao.createAnime(anime);
    }

    @PutMapping("/Anime/{id}")
        public void updateAnime(@RequestBody Anime anime, @PathVariable int id){
        dao.updateAnimeById(anime,id);
    }

    @PutMapping("/Anime/{id}/Favorite")
    public void updateAnimeByFavorite(@PathVariable int id){
        dao.updateFavoriteOfAnime(id);
    }

    @DeleteMapping("/Anime/{id}")
    public void deleteAnime(@PathVariable int id) {
        dao.deleteAnimeById(id);
    }

}
