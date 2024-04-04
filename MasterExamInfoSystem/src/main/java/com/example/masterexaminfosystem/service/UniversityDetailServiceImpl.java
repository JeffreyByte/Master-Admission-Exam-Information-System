package com.example.masterexaminfosystem.service;

import com.example.masterexaminfosystem.pojo.entity.UniversityDetail;
import com.example.masterexaminfosystem.repository.UniversityDetailRepository;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class UniversityDetailServiceImpl implements UniversityDetailService{
    @Resource
    private UniversityDetailRepository universityDetailRepository;

    @Override
    public UniversityDetail insertUniversityDetail(UniversityDetail universityDetail) {
        return universityDetailRepository.save(universityDetail);
    }

    @Override
    public void deleteUniversityDetail(Long id) {
        universityDetailRepository.deleteById(id);
    }

    @Override
    public UniversityDetail updateUniversityDetail(UniversityDetail universityDetail) {
        return universityDetailRepository.save(universityDetail);
    }

    @Override
    public List<UniversityDetail> findAllUniversityDetail() {
        return universityDetailRepository.findAll();
    }

    @Override
    public UniversityDetail findUniversityDetailById(Long id) {
        return universityDetailRepository.findById(id).orElse(null);
    }
}
