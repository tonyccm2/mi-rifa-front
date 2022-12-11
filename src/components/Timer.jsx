import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

export const Timer = ({ date }) => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        // const countdownDate = new Date(`${date} 20:00:00`).getTime()
        const countdownDate = new Date(`2022-12-09T20:00:00+0000`).getTime()
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    })


    return (
        <>
            <Box component="span"
            >
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                    columns={15}
                >
                    <Grid item xs={3}>
                        <Typography
                            fontSize={10}
                            color='#fff'
                            align='center'
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 500,
                            }}
                        >
                            Días
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography align='center'></Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography
                            fontSize={10}
                            color='#fff'
                            align='center'
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 500,
                            }}
                        >
                            Horas
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography align='center'></Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography
                            fontSize={10}
                            color='#fff'
                            align='center'
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 500,
                            }}
                        >
                            Minutos
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography align='center'></Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography
                            fontSize={10}
                            color='#fff'
                            align='center'
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 500,
                            }}
                        >
                            Segundos
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3} sx={{
                            paddingY: '8px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignContent: 'center',
                            justifyContent: 'center',
                            bgcolor: '#D75404',
                        }} >
                            <Typography color='#fff' sx={{ fontFamily: 'monospace' }}>{timerDays === NaN ? '00' : timerDays}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant='h6' align='center' color='#fff'>:</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3} sx={{
                            paddingY: '8px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignContent: 'center',
                            justifyContent: 'center',
                            bgcolor: '#D75404',
                        }} >
                            <Typography color='#fff' sx={{ fontFamily: 'monospace' }}>{timerHours === NaN ? '00' : timerHours}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant='h6' align='center' color='#fff'>:</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3} sx={{
                            paddingY: '8px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignContent: 'center',
                            justifyContent: 'center',
                            bgcolor: '#D75404',
                        }} >
                            <Typography color='#fff' sx={{ fontFamily: 'monospace' }}>{timerMinutes === NaN ? '00' : timerMinutes}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant='h6' align='center' color='#fff'>:</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={3} sx={{
                            paddingY: '8px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignContent: 'center',
                            justifyContent: 'center',
                            bgcolor: '#D75404',
                        }} >
                            <Typography color='#fff' sx={{ fontFamily: 'monospace' }}>{timerSeconds === NaN ? '00' : timerSeconds}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
