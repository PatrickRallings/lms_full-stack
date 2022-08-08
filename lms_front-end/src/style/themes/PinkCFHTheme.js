import {createTheme} from '@mui/material/styles'

export const PinkCFHTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#D81A5E',
            light: '#fd7633',
            dark: '#3A1026',
            contrastText: '#FFF',
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