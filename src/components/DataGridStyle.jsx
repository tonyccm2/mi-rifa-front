import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

export const DataGridStyle = ({
        height,
        rows,
        columns,
        experimentalFeatures,
        checkboxSelection = false,
        setAlumnosSeleccionados,
        getRowId
    }) => {
    return (
        <Box
            sx={{
                height: 480,
                width: '100%',
                '& .super-app-theme--header': {
                    backgroundColor: '#D75404',
                },
            }}
        >
            {checkboxSelection
                ? <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection={checkboxSelection}
                    experimentalFeatures={experimentalFeatures}
                    getRowId={getRowId}
                    onSelectionModelChange={itm => {
                        setAlumnosSeleccionados(itm)
                    }}
                />
                : <DataGrid
                    rows={rows}
                    columns={columns}
                    experimentalFeatures={experimentalFeatures}
                    getRowId={getRowId}
                />}

        </Box>
    )
}
