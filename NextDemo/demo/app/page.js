'use client'
import * as React from 'react';
import Box from "@mui/material/Box";
import {register} from 'swiper/element/bundle';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import picOne from './static/1.png'
import picTwo from './static/2.png'
import picThree from './static/3.png'

register();
import Image from "next/image";
import UnivCard from "@/app/RecommendationCard";
import BookCard from "@/app/BookCard";
import NewsCard from "@/app/NewsCard";
import ResponsiveAppBar from "@/app/nav";
import cookie from "react-cookies";
import RecommendationCard from "@/app/RecommendationCard";

export default function IndexPage() {
    const pic=[picOne,picTwo,picThree];
    const getKey = (() => {
        let i = 0;
        return () => {
            return i++;
        }
    })();
    const univInitData={
        title: '今日院校推荐',
        name: '安徽大学',
        clickPrefix: 'university',
        pictureLink: 'https://www.ahu.edu.cn/_upload/column/00/2a/42/picture.jpg',
        api: `/api/university/getRecommendation`,
        content: '安徽大学(Anhui University)坐落于素有“三国故地、包拯家乡，江淮首郡、吴楚要冲”美誉的历史文化名城、安徽省省会合肥市。学校是国家“双一流”和“211工程”建设首批入列高校，是安徽省人民政府与教育部共建高校，是安徽省属重点综合性大学。'
    }
    return <>
        <Box sx={{ m: '0 auto'}} maxWidth='lg' className='wrapper'>
            <Box className='slider'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        pic.map(item=>
                            <SwiperSlide key={getKey()}>
                                <Image
                                    src={item}
                                    alt='Picture'
                                    width={1200}
                                    height={300}
                                    priority
                                />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </Box>
            <RecommendationCard initData={univInitData} />
            <BookCard />
            <NewsCard />
        </Box>
    </>
}