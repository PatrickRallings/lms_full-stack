import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {ImageListItemBar} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function CourseImageList({imageSourceFromClick, modalClicked}) {

    return (
        <ImageList sx={{ width: 750, height: 450 }} cols={3} rowHeight={164} gap={8} variant="quilted">
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="eager"
                    />
                    <ImageListItemBar
                        sx={{
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        position="top"
                        actionIcon={
                            <IconButton
                                sx={{ color: '#fd7633' }}
                                aria-label={`star ${item.title}`}
                                onClick={() => imageSourceFromClick(item.img)}
                            >
                                <AddPhotoAlternateIcon />
                            </IconButton>
                        }
                        actionPosition="left"
                        onClick={modalClicked}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        title: 'HTML (Visual)',
    },
    {
        img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
        title: 'Networking',
    },
    {
        img: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890',
        title: 'Empty Tag',
    },
    {
        img: 'https://images.squarespace-cdn.com/content/v1/6266f85818652d5c8e2ebf6b/1f70cdf6-4f14-4373-b4f7-62fead788410/win_MONO_72-4.jpg',
        title: 'Nick',
    },
    {
        img: 'https://images.unsplash.com/photo-1632882765546-1ee75f53becb',
        title: 'HTML (Written)',
    },
    {
        img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
        title: 'Java on Computer',
    },
    {
        img: 'https://images.unsplash.com/photo-1506620780696-e5cb6c54524e',
        title: 'Assorted Beans',
    },
    {
        img: 'https://images.unsplash.com/photo-1450024529642-858b23834369',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3',
        title: 'Reflective Sphere',
    },
    {
        img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb',
        title: 'Java on Phone',
    },
    {
        img: 'https://images.unsplash.com/photo-1587612049655-c1030366a74a',
        title: 'UX Planning',
    },
    {
        img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
        title: 'Circuit Board',
    },
];
