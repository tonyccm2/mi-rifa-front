import { Button, MenuItem, TextField, Grid } from '@mui/material'
import React, { useState } from 'react'

export const Comprar = () => {
    const [cantidad, setCantidad] = useState(0)
    const handleChange = (event) => {
        setCantidad(event.target.value)
    };
    return (
        <>
            <Grid container spacing={2} className='my-5'>
                <Grid item xs={4}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={cantidad}
                        onChange={handleChange}
                        size="small"
                        focused
                        fullWidth
                        sx={{
                            "& .MuiInputBase-root": {
                                color: '#fff'
                            },
                        }}
                    >
                        {
                            [1, 2, 3, 4, 5, 10].map((option, i) => (
                                <MenuItem key={i} value={option}>
                                    {option}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </Grid>
                <Grid item xs={8}>
                    <Button variant='contained' fullWidth>
                        comprar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
