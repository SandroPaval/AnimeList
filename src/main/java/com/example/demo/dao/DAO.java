package com.example.demo.dao;

import java.util.List;
import java.util.Optional;

public interface DAO<T> {


    List<T> getAllAnimes();

    List<T> getAllAnimeByFavorit();

    void createAnime(T t);

    Optional<T> getAnimeById(int id);

    void updateAnimeById(T t, int id);

    void updateFavoriteOfAnime(int id);

    void deleteAnimeById(int id);
}
