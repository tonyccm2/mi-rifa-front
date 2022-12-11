import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import { DataGridStyle } from '../../../components/DataGridStyle'
import CreatePrize from './components/CreatePrize'

export const Prizes = () => {
  return (
    <>
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Grid item xs={12} className='my-5'>
            <CreatePrize/>
          </Grid>
          <Grid item xs={12}
            sx={{
              paddingBot: 2,
              backgroundColor: '#EECC8D',
              borderRadius: '10px',
            }}
          >
            <DataGridStyle
              rows={rows || []}
              columns={columns}
              getRowId={(row) => row.id}
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}


const columns = [
  {
    headerClassName: 'super-app-theme--header',
    field: 'codDocente',
    headerName: 'Código Tutor',
    type: 'string',
  },
  {
    headerClassName: 'super-app-theme--header',
    field: 'nomDocente',
    headerName: 'Docente',
    width: 300,
    type: 'string',
  },
  {
    headerClassName: 'super-app-theme--header',
    field: 'tema',
    headerName: 'Tema',
    width: 300,
    type: 'string',
  },
  {
    headerClassName: 'super-app-theme--header',
    field: 'fecTicket',
    headerName: 'Fecha',
    type: 'date',
  },
  {
    headerClassName: 'super-app-theme--header',
    field: 'hora',
    headerName: 'Hora',
    type: 'string',
  },
]
const rows = [
  {
    id: 1,
    cod_tutor: '161756',
    tema: 'falta a examen',
    fecha: '12/12/22',
    hora: '17:00',
    estado: true
  },
  {
    id: 2,
    cod_tutor: '161756',
    tema: 'falta a examen',
    fecha: '12/12/22',
    hora: '17:00',
    estado: false
  },
  {
    id: 3,
    cod_tutor: '161756',
    tema: 'falta a examen',
    fecha: '12/12/22',
    hora: '17:00',
    estado: true
  },
  {
    id: 4,
    cod_tutor: '161756',
    tema: 'falta a examen',
    fecha: '12/12/22',
    hora: '17:00',
    estado: false
  },
  {
    id: 5,
    cod_tutor: '161756',
    tema: 'falta a examen',
    fecha: '12/12/22',
    hora: '17:00',
    estado: true
  },
  {
    id: 6,
    cod_tutor: '161756',
    tema: 'falta a examen',
    fecha: '12/12/22',
    hora: '17:00',
    estado: false
  },
  {
    id: 7,
    cod_tutor: '161756',
    tema: 'falta a examen',
    fecha: '12/12/22',
    hora: '17:00',
    estado: true
  },
]