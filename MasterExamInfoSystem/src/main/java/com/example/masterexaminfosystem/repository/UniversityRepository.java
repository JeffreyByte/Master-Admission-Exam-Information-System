package com.example.masterexaminfosystem.repository;

import com.example.masterexaminfosystem.pojo.entity.University;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UniversityRepository extends JpaRepository<University, Long> {
    @Query(value = "select university.* from university, fav where fav.university_id=university.id and fav.user_id=?1 order by university.id", nativeQuery = true)
    List<University> getFavs(Long uid);
}