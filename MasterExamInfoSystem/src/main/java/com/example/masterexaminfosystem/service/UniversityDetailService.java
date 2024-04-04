package com.example.masterexaminfosystem.service;

import com.example.masterexaminfosystem.pojo.entity.UniversityDetail;
import java.util.List;
public interface UniversityDetailService {
    UniversityDetail insertUniversityDetail(UniversityDetail universityDetail);

    void deleteUniversityDetail(Long id);

    UniversityDetail updateUniversityDetail(UniversityDetail universityDetail);

    List <UniversityDetail> findAllUniversityDetail();

    UniversityDetail findUniversityDetailById(Long id);
}
