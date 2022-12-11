import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function ThemeContext ({ children }) {
  const [mode, setMode] = React.useState('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            // light: will be calculated from palette.primary.main,
            main: '#D75404',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          }
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
