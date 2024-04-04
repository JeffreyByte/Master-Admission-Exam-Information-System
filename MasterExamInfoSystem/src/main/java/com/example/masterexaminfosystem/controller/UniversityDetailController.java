package com.example.masterexaminfosystem.controller;

import com.example.masterexaminfosystem.pojo.entity.UniversityDetail;
import com.example.masterexaminfosystem.service.UniversityDetailService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/universityDetail")
public class UniversityDetailController {
    @Resource
    UniversityDetailService universityDetailService;

    @GetMapping("")
    public List<UniversityDetail> findAll() {
        return universityDetailService.findAllUniversityDetail();
    }

    @GetMapping("/{id}")
    public UniversityDetail findById(@PathVariable("id") Long id) {
        return universityDetailService.findUniversityDetailById(id);
    }

    @PostMapping("")
    public UniversityDetail addUniversityDetail(@RequestBody UniversityDetail UniversityDetail) {
        return universityDetailService.insertUniversityDetail(UniversityDetail);
    }

    @DeleteMapping("/{id}")
    public void deleteUniversityDetail(@PathVariable("id") Long id) {
        universityDetailService.deleteUniversityDetail(id);
    }

    @PutMapping("")
    public UniversityDetail updateUniversityDetail(@RequestBody UniversityDetail UniversityDetail) {
        return universityDetailService.updateUniversityDetail(UniversityDetail);
    }

}
