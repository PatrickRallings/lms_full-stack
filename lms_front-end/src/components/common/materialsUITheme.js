import { createTheme } from '@mui/material/styles'

export const materialsUITheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#fd7633',
            light: '#D81A5E',
            dark: '#3A1026',
            contrastText: '#D81A5E',
        },
        secondary: {
            main: '#6d3c4e',
        },
        info: {
            main: '#f32124',
        },
        text: {
            primary: '#3A1026',
        },
    },
});