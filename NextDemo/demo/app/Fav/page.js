'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from "@mui/material/Box";
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from "@mui/material/Container";
import {useEffect, useRef, useState} from "react";
import cookie from "react-cookies";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import UniversityList from "@/app/UniversityList/page";

export default function IconLabelTabs() {
    const [value,setValue]=useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="md">
            <TabContext value={value}>
                <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    centered
                >
                    <Tab icon={<FavoriteIcon/>} label="所有收藏" value="1" />
                    <Tab icon={<SchoolIcon/>} label="收藏院校" value="2" />
                    <Tab icon={<BookIcon/>} label="收藏图书" value="3" />
                </TabList>
                <TabPanel value="1">
                    <UniversityList url={`api/university/getFavs/${cookie.load('userId')}`} />
                </TabPanel>
                <TabPanel value="2">
                    <UniversityList url={`api/university/getFavs/${cookie.load('userId')}`} />
                </TabPanel>
                <TabPanel value="3">开发中</TabPanel>
            </TabContext>
        </Container>

    );
}