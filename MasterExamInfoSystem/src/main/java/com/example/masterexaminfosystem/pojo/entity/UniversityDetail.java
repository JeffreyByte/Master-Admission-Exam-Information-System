package com.example.masterexaminfosystem.pojo.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "university_detail")
public class UniversityDetail{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "uid")
    private Long uid;

    @Column(name = "detail")
    private String detail;

}
