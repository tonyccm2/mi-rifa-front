import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid'
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

export default function CardsImg() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
    const [img, setImg] = React.useState(itemData[0])

    const handleClick = (item) => {
        setImg(item)
    }
    return (
        <>
            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignContent="center"
                wrap="wrap"
            >
                <Grid item xs={12} sm={2}>
                    <ImageList sx={{ width: '100%' }} cols={isMobile ? 1 : 3}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    onClick={() => handleClick(item)}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <ImageList
                        sx={{
                            width: '100%',
                            objectFit: "contain",
                        }} cols={1}>
                        <ImageListItem key={img.img}>
                            <img
                                src={`${img.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${img.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={img.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </ImageList>
                </Grid>
            </Grid>
        </>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://cdn.mobilesyrup.com/wp-content/uploads/2021/09/iphone-13-header-2-scaled.jpg',//https://cdn.mobilesyrup.com/wp-content/uploads/2021/09/iphone-13-header-2-scaled.jpg
        title: 'Burger',
    },//https://images.unsplash.com/photo-1551782450-a2132b4ba21d
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
];