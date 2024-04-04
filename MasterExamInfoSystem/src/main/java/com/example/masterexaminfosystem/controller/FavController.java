package com.example.masterexaminfosystem.controller;

import com.example.masterexaminfosystem.pojo.entity.Fav;
import com.example.masterexaminfosystem.pojo.entity.University;
import com.example.masterexaminfosystem.service.FavService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fav")
public class FavController {
    @Resource
    FavService favService;

    @GetMapping("")
    public List<Fav> findAll() {
        return favService.findAllFav();
    }

    @GetMapping("/findDistinctUserId")
    public List<Long> findDistinctUserId(){
        return favService.findDistinctUserId();
    }


    @GetMapping("/uid/{uid}")
    public List<Fav> findByUserId(@PathVariable Long uid){
        return favService.findByUserId(uid);
    }

    @GetMapping("/{id}")
    public Fav findById(@PathVariable("id") Long id) {
        return favService.findFavById(id);
    }

    @GetMapping("/{userId}/{univId}")
    public List<Fav> findByUniversityIdAndUserId(@PathVariable Long univId, @PathVariable Long userId){
        return favService.findByUniversityIdAndUserId(univId,userId);
    }

    @PostMapping("")
    public Fav addFav(@RequestBody Fav Fav) {
        return favService.insertFav(Fav);
    }

    @DeleteMapping("/{id}")
    public void deleteFav(@PathVariable("id") Long id) {
        favService.deleteFav(id);
    }

    @PutMapping("")
    public Fav updateFav(@RequestBody Fav Fav) {
        return favService.updateFav(Fav);
    }



}