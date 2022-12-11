import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Comprar } from './components/Comprar'
import { Timer } from '../../../components/Timer'
import { InfoRaffle } from '../../../components/InfoRaffle'
import CardsImg from './components/CardsImg'

const premmios = ['CHIMPUNES X SPEEDPORTAL.3 CÉSPED ARTIFICIAL', 'CASACA CORTA VIENTO CON CAPUCHA OWN THE RUN', 'CAMISETA VISITANTE ARGENTINA 22']

export const Raffle = () => {

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            marginTop: 12,
            padding: 2,
            borderRadius: '10px',
            border: 1,
            borderColor: '#fff',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <CardsImg/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
                wrap="wrap"

              >
                <Grid item xs={12}>
                  <Timer />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    fontSize={20}
                    component="div"
                    sx={{
                      color: '#fff',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.1rem',
                      marginY: 2
                    }}
                  >
                    Premios:
                  </Typography>
                  {premmios?.map(premio => (
                    <Typography
                      fontSize={12}
                      component="div"
                      sx={{
                        color: '#fff',
                        fontFamily: 'monospace',
                        fontWeight: 500,
                        letterSpacing: '.1rem',
                      }}
                    >
                      - {premio}
                    </Typography>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Comprar />
                </Grid>
                <Grid item xs={12}>
                  <InfoRaffle/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
