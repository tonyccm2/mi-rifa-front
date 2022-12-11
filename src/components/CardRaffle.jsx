import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import { Timer } from './Timer';
import { Link } from 'react-router-dom';
import { InfoRaffle } from './InfoRaffle';

export const CardRaffle = ({ img, height }) => {
    const [date, setDate] = useState(new Date().toJSON())
    return (
        <Card
            sx={{
                bgcolor: '#07000e', // EECC8D F08B33 D75404 8A2C02
                borderRadius: '10px',
            }}
        >
            <Box
                sx={{
                    borderRadius: '10px',
                    border: 1,
                    borderColor: '#fff',
                }}
            >
                <Link
                    to={`raffle/${123}`}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={img}
                            alt="green iguana"
                            sx={{ objectFit: "contain", height: `350px`,
                                borderRadius: '10px', }}
                        />
                        <CardContent>
                            <Timer />
                        </CardContent>
                        <CardActions
                        >
                            <InfoRaffle/>
                        </CardActions>
                    </CardActionArea>
                </Link>
            </Box>
        </Card>
    )
}
