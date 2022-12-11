import { MenuItem, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

const InputForm = ({ control, id, label, disabled = false, placeholder, multiline = false, rows = 1, type = 'text', data = [], inputProps = null, helperText = '', autoFocus }) => {
  return (type === 'select'
    ? <Controller
        name={id}
        control={control}
        render={({ field: { onChange, value } }) => (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            variant="filled"
            size="small"
            select
            fullWidth
            placeholder={placeholder}
            InputProps={inputProps}
            helperText={helperText}
        >
            {data.map((elemento, index) =>
                <MenuItem key={index} value={elemento.value}>{elemento.denominacion}</MenuItem>)}
        </TextField>
        )}
        />
    : <Controller
                  name={id}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label={label}
                      value={value}
                      onChange={onChange}
                      variant="filled"
                      size="small"
                      disabled={disabled}
                      multiline={multiline}
                      rows={rows}
                      placeholder={placeholder}
                      fullWidth
                      type={type}
                      InputProps={inputProps}
                      helperText={helperText}
                      autoFocus={autoFocus}
                    />
                  )}
                />)
}

export default InputForm
