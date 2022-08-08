import {createTheme} from '@mui/material/styles'

export const OrangeCFHTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#fd7633',
            light: '#D81A5E',
            dark: '#3A1026',
            contrastText: '#FFF',
        },
        secondary: {
            main: '#3A1026',
        },
        info: {
            main: '#f32124',
        },
        text: {
            primary: '#3A1026',
        },
    },
});