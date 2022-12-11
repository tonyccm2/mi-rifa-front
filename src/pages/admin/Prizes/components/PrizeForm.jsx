import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  IconButton,
  Tooltip,
  Typography
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { useAlertMessage } from '../../../../context/notifications'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded'
import InputForm from '../../../../components/InputForm'


const PrizeForm = ({ edit, data, mutate, isLoading }) => {
  const [open, setOpen] = useState(false)
  const [fullWidth] = useState(true)
  const [maxWidth] = useState('sm')
  const { showError, showSuccess } = useAlertMessage()
  const { handleSubmit, reset, control, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: {
      id_marca: '',
      nombre: ''
    }
  })

  const handleOpen = () => {
    if (edit) {
      reset({
        id_marca: data.id_marca,
        nombre: data.nombre
      })
    }

    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const onSubmit = data => {
    const formData = {
      nombre: data.nombre
    }
    const msg = edit ? 'No se pudo editar marca' : 'No se pudo crear marca'
    const msg2 = edit
      ? 'Marca editado correctamente'
      : 'Marca creado correctamente'

    mutate(formData, {
      onError: () => {
        handleClose()
        showError(msg)
        reset()
      },
      onSuccess: () => {
        handleClose()
        showSuccess(msg2)
        reset()
      }
    })
  }

  return (
    <>
      {edit ? (
        <Tooltip title='Editar Premio'>
          <IconButton aria-label='edit' onClick={handleOpen}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Button onClick={handleOpen} variant='contained' startIcon={<ControlPointRoundedIcon />}>
          Agregar Premio
        </Button>
      )}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{edit ? 'EDITAR MARCA' : 'AÑADIR MARCA'}</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <DialogContentText sx={{ marginBottom: '1em' }}>
              Información básica de la Marca
            </DialogContentText>
            <Grid container spacing={3} columns={2} alignContent='center'>
              <Grid item xs={true}>
                <InputForm
                  control={control}
                  id='id_marca'
                  label='ID de Marca'
                  disabled={true}
                  placeholder='Marca'
                />
              </Grid>

              <Grid item xs={1}>
                <InputForm
                  control={control}
                  id='nombre'
                  label='Nombre'
                  placeholder='Ingrese Nombre de la Marca'
                />
                <Typography
                  variant='subtitle2'
                  align='left'
                  color='red'
                >
                  {errors.nombre?.message}
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' color='error' startIcon={<CancelRoundedIcon />} onClick={() => {
              handleClose()

              reset()
            }}>
              CANCELAR
            </Button>
            <LoadingButton
              loading={isLoading}
              type='submit'
              loadingPosition='start'
              startIcon={<SaveIcon />}
              variant='contained'
            >
              GUARDAR
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default PrizeForm
