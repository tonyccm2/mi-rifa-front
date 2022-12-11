import { Grid, Typography } from '@mui/material'
import React from 'react'

export const InfoRaffle = () => {
    return (
        <>

            <Grid
                container
                spacing={0}
                sx={{
                    bgcolor: '#9c27b0',
                    borderRadius: '10px',
                    paddingY: 1
                }}
            >
                <Grid item xs={4}>
                    <Typography fontSize={18} color='#fff' align='center'>S/. 1</Typography>
                    <Typography fontSize={9} color='#fff' align='center'>precio</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography fontSize={18} color='#fff' align='center'>1763</Typography>
                    <Typography fontSize={9} color='#fff' align='center'>participantes</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography fontSize={18} color='#fff' align='center'>2</Typography>
                    <Typography fontSize={9} color='#fff' align='center'>premios</Typography>
                </Grid>
            </Grid>
        </>
    )
}
