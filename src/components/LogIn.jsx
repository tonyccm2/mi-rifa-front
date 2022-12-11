import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { useForm } from 'react-hook-form';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import InputForm from './InputForm';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function LogIn({mobile}) {
    const [open, setOpen] = useState(false);

    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = data => {
        console.log(data)
    }

    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <Button variant="text" onClick={handleClickOpen} fullWidth>
                <Typography variant="overline" color={mobile ? '#000' : '#fff'}>Iniciar Sesión</Typography>
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth={true}
                maxWidth={'sm'}
            >
                <DialogTitle>{"Iniciar Sesión"}</DialogTitle>
                <DialogContent >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid
                            container
                            spacing={4}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            alignContent="center"
                            wrap="wrap"
                            sx={{
                                marginTop: '2px'
                            }}
                        >
                            <Grid item xs={12} >
                                <InputForm
                                    control={control}
                                    id='email'
                                    label='Email'
                                    placeholder='Ingrese Email'
                                    type='mail'
                                    autoFocus
                                    inputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <EmailIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <InputForm
                                    control={control}
                                    id='password'
                                    label='Password'
                                    placeholder='Ingrese Password'
                                    type={showPassword ? 'text' : 'password'}
                                    inputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge='end'
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='contained' color='success'>Ingresar</Button>
                    <Button onClick={handleClose} variant='contained' color='error'>Cancelar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}