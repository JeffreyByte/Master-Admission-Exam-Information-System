package com.example.masterexaminfosystem.service;

import com.example.masterexaminfosystem.pojo.entity.Fav;
import com.example.masterexaminfosystem.pojo.entity.University;
import com.example.masterexaminfosystem.repository.FavRepository;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class FavServiceImpl implements FavService {
    @Resource
    private FavRepository favRepository;

    @Override
    public Fav insertFav(Fav fav) {
        return favRepository.save(fav);
    }

    @Override
    public void deleteFav(Long id) {
        favRepository.deleteById(id);
    }

    @Override
    public Fav updateFav(Fav fav) {
        return favRepository.save(fav);
    }

    @Override
    public List<Fav> findAllFav() {
        return favRepository.findAll();
    }

    @Override
    public Fav findFavById(Long id) {
        return favRepository.findById(id).orElse(null);
    }

    @Override
    public List<Fav> findByUniversityIdAndUserId(Long univId, Long userId) {
        return favRepository.findFavsByUniversityIdAndUserId(univId, userId);
    }

    @Override
    public List<Long> findDistinctUserId() {
        return favRepository.findDistinctUserId();
    }

    @Override
    public List<Fav> findByUserId(Long uid) {
        return favRepository.findByUserId(uid);
    }

}
