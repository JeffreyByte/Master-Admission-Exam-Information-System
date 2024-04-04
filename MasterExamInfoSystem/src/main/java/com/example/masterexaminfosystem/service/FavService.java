package com.example.masterexaminfosystem.service;

import com.example.masterexaminfosystem.pojo.entity.Fav;
import com.example.masterexaminfosystem.pojo.entity.University;

import java.util.List;
public interface FavService {
    Fav insertFav(Fav fav);

    void deleteFav(Long id);

    Fav updateFav(Fav fav);

    List <Fav> findAllFav();

    Fav findFavById(Long id);

    List<Fav>  findByUniversityIdAndUserId(Long univId,Long userId);

    List<Long> findDistinctUserId();

    List<Fav> findByUserId(Long uid);
}
