import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";

export default function NewsCard() {
    const date=new Date();
    const week=['','一','二','三','四','五','六','日']
    const newsList=['教育部召开党组扩大会传达学习2023年全国“两会”精神',
    '教育部向毕业生发出提醒 求职须警惕陷阱避免踩“坑”',
    '这30所高校初试大纲已变更']
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    今天是{date.getFullYear()}年{date.getMonth()+1}月{date.getDate()}日
                    星期{week[date.getDay()]}
                    <br/><br/>
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    今日考研资讯
                </Typography>
                {
                    newsList.map(news=>
                        <Typography gutterBottom variant="h6" component="div" key={news}>
                            <Link href="#">{news}</Link>
                        </Typography>
                    )
                }
            </CardContent>
        </Card>
    );
}