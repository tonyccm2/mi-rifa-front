import { Container, Grid } from '@mui/material'
import React from 'react'
import { CardRaffle } from '../../../components/CardRaffle'
import Header from '../../../components/Header'

export const Raffles = () => {
    return (
        <>  
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignContent="center"
                    wrap="wrap"
                    className='my-5'
                >
                    <Grid item xs={12} sm={12} md={4}>
                        <CardRaffle
                            img="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_53a5fa14d3914493a13a92a51b3d587a.jpg"
                            height={2}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardRaffle
                            img="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardRaffle
                            img="https://cdn.mobilesyrup.com/wp-content/uploads/2021/09/iphone-13-header-2-scaled.jpg"
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
