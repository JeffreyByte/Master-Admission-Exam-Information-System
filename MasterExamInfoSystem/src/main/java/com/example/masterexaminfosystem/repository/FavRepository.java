package com.example.masterexaminfosystem.repository;

import com.example.masterexaminfosystem.pojo.entity.Fav;
import com.example.masterexaminfosystem.pojo.entity.University;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FavRepository extends JpaRepository<Fav, Long>{
    List<Fav> findFavsByUniversityIdAndUserId(Long univId, Long userId);
    List<Fav> findByUserId(Long userId);

    @Query("SELECT DISTINCT f.userId FROM Fav f")
    List<Long> findDistinctUserId();
}
