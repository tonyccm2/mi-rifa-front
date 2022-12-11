import { useState } from 'react'
import {
  Button,
  Dialog,
  // DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  DialogContentText
} from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

const DeletePrize = ({ data, handleDelete }) => {
  const [open, setOpen] = useState(false)
  const [fullWidth] = useState(true)
  const [maxWidth] = useState('sm')

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const onSubmit = () => {
    handleDelete()
    handleClose()
  }

  return (
    <>
      <Tooltip title='Eliminar Premio'>
        <IconButton aria-label='delete' onClick={handleClickOpen}>
          <DeleteOutlineIcon color='error' />
        </IconButton>
      </Tooltip>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        {/* <DialogTitle>ELIMINAR Prize</DialogTitle> */}
        <DialogContent >
          <DialogContentText sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <b>¿Está seguro que quiere eliminar el registro: {data.nombre}?</b>
            <br />Una vez eliminado el producto, no podrás recuperar la información registrada.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='error' onClick={handleClose}>
            REGRESAR
          </Button>
          <Button variant='contained' onClick={onSubmit}>
            SI, ELIMINAR
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeletePrize
