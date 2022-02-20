package com.example.demo.dao;

import com.example.demo.model.Anime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class AnimeJdbcDao implements DAO<Anime> {



    private static final Logger log = LoggerFactory.getLogger(AnimeJdbcDao.class);
    private JdbcTemplate jdbcTemplate;


    RowMapper<Anime> rowMapper = (rs, rowNum) -> {
        Anime anime = new Anime();
        anime.setTitel(rs.getString("titel"));
        anime.setFolgen(rs.getInt("folgen"));
        anime.setWertung(rs.getInt("wertung"));
        anime.setGenre(rs.getString("genre"));
        anime.setAnimeID(rs.getInt("animeID"));
        anime.setImg(rs.getString("img"));
        anime.setFavorit(rs.getBoolean("favorit"));
        return anime;
    };

    public AnimeJdbcDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Anime> getAllAnimes() {
        String sql = "SELECT titel, folgen, wertung, genre, animeID, img, favorit FROM animeliste";
        return jdbcTemplate.query(sql,rowMapper);
    }

    @Override
    public List<Anime> getAllAnimeByFavorit() {
        String sql = "SELECT titel, folgen, wertung, genre, animeID, img, favorit FROM animeliste WHERE favorit=true";
        return jdbcTemplate.query(sql,rowMapper);
    }

    @Override
    public void createAnime(Anime anime) {
        String sql = "INSERT INTO animeliste(titel, folgen, wertung, genre, animeID, img) VALUES(?,?,?,?,?,?)";
        int inserted = jdbcTemplate.update(sql,anime.getTitel(),anime.getFolgen(),anime.getWertung(),anime.getGenre(),anime.getAnimeID(), anime.getImg());
        if( inserted == 1) {
            log.info("Neuer Anime wurde erstellt: " + anime.getTitel());
        }
    }

    @Override
    public Optional<Anime> getAnimeById(int id) {
        String sql = "SELECT titel, folgen, wertung, genre, animeID, img, favorit FROM animeliste WHERE animeID = ?";
        Anime anime = null;
        try {
            anime = jdbcTemplate.queryForObject(sql, new Object[]{id},rowMapper);
        }catch (DataAccessException ex) {
            log.info("Anime wurde nicht gefunden, ID: " + id);
        }
        return Optional.ofNullable(anime);
    }

    @Override
    public void updateAnimeById(Anime anime, int id) {
        String sql = "UPDATE animeliste SET titel = ?, folgen = ?, wertung = ?, genre = ?, img = ?, favorit = ? WHERE animeID = ?";
        int update = jdbcTemplate.update(sql, anime.getTitel(), anime.getFolgen(), anime.getWertung(), anime.getGenre(),anime.getImg(),anime.getFavorit(), id);
        if( update == 1) {
            log.info("Anime geupdated: " + anime.getTitel());
        }
    }

    @Override
    public void updateFavoriteOfAnime(int id){
        String sql ="UPDATE animeliste SET favorit= NOT favorit WHERE animeID = ?";
        jdbcTemplate.update(sql,id);
    }



    @Override
    public void deleteAnimeById(int id) {
    jdbcTemplate.update("DELETE FROM animeliste WHERE animeID = ?",id);
    }
}
