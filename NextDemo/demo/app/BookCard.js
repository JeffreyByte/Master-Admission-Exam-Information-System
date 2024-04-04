import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BookCard() {
    return (
        <Card variant="outlined">
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://gw.alicdn.com/imgextra/i4/725677994/O1CN019iyJHP28vJ1XHdIPA_!!725677994.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    今日图书推荐
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    《张宇考研数学基础30讲》
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    本书以考研命题所使用的所有题目源头为依据，精心挑选和编制了数百道题目。利于考生在复习过程中开拓思路，练习分析问题，解决问题的能力。本书内容包括高等数学（微积分）、线性代数、概率论与数理统计，题目类型有选择题、填空题、解答题构成。
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">了解更多</Button>
            </CardActions>
        </Card>
    );
}