import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, ThemeProvider} from '@mui/material';

import {OrangeCFHTheme} from "../../../style/themes/OrangeCFHTheme";

const CourseCard = ({courseCardImage, courseCardTitle, courseCardDescription}) => {
    return (
        <ThemeProvider theme={OrangeCFHTheme}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={courseCardImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {courseCardTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {courseCardDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </ThemeProvider>
    )
}

export default CourseCard;