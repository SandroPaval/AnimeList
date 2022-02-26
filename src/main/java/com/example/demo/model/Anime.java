package com.example.demo.model;

public class Anime {

    private String titel;
    private int folgen;
    private int wertung;
    private String genre;
    private int animeID;
    private String img;
    private Boolean favorit;

    public Anime() {
    }

    public Anime(String titel, int folgen, int wertung, String genre, int animeID, String img) {
        this.titel = titel;
        this.folgen = folgen;
        this.wertung = wertung;
        this.genre = genre;
        this.animeID = animeID;
        this.img = img;
        this.favorit = false;
    }

    public String getTitel() {
        return titel;
    }

    public int getFolgen() {
        return folgen;
    }

    public int getWertung() {
        return wertung;
    }

    public String getGenre() {
        return genre;
    }

    public int getAnimeID() {
        return animeID;
    }

    public String getImg(){return img;}

    public Boolean getFavorit(){return favorit;}

    public void setAnimeID(int animeID) {this.animeID = animeID;}

    public void setTitel(String titel) {
        this.titel = titel;
    }

    public void setFolgen(int folgen) {
        this.folgen = folgen;
    }

    public void setWertung(int wertung) {
        this.wertung = wertung;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setImg(String img) {this.img = img;}

    public void setFavorit(Boolean favorit) {
        this.favorit = favorit;
    }

    @Override
    public String toString() {
        return "Anime{" +
                "titel='" + titel + '\'' +
                ", folgen=" + folgen +
                ", wertung=" + wertung +
                ", genre='" + genre + '\'' +
                ", animeID=" + animeID +
                '}';
    }
}