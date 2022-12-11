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

export default function LogUp({mobile}) {
    const [open, setOpen] = useState(false);

    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: {
            email: '',
            name: '',
            last_name: '',
            birthday: new Date().toJSON().slice(0, 10),
            dni: '',
            department: '',
            province: '',
            district: '',
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
                <Typography variant="overline" color={mobile ? '#000' : '#fff'}>Registrarse</Typography>
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
                <DialogTitle>{"Registrarse"}</DialogTitle>
                <DialogContent >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid
                            container
                            spacing={2}
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
                                    id='name'
                                    label='Nombres'
                                    placeholder='Ingrese sus nombres'
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <InputForm
                                    control={control}
                                    id='last_name'
                                    label='Apellidos'
                                    placeholder='Ingrese sus apellidos'
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <InputForm
                                    control={control}
                                    id='birthday'
                                    label='Fecha de nacimiento'
                                    placeholder='Ingrese sus fecha de nacimiento'
                                    type='date'
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <InputForm
                                    control={control}
                                    id='dni'
                                    label='DNI'
                                    placeholder='Ingrese su DNI'
                                    type='number'
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <InputForm
                                    control={control}
                                    id='department'
                                    label='Departamento'
                                    placeholder='Ingrese departamento'
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <InputForm
                                    control={control}
                                    id='province'
                                    label='Provincia'
                                    placeholder='Ingrese provincia'
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <InputForm
                                    control={control}
                                    id='district'
                                    label='Distrito'
                                    placeholder='Ingrese distrito'
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
                    <Button onClick={handleClose} variant='contained' color='success'>Registrarse</Button>
                    <Button onClick={handleClose} variant='contained' color='error'>Cancelar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}