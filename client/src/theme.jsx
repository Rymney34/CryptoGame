import { createTheme } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#43c149',
      light: '#66bb6a',
      dark: '#2e7d32',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1b5e20',
      light: '#4caf50',
      dark: '#003300',
    },
    background: {
      paper: '#0a0d0f',
      default: '#121212',
    },
    error: {
      main: '#f44336',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
    },
    text: {
      primary: '#00ff00',
      secondary: '#b0bec5',
    },
    divider: '#004d00',
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightRegular: 400,
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgb(5, 250, 152)',
            boxShadow: '0px 3px 20px 10px rgb(5, 250, 152)',
          },
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          padding: '10px',
          borderRadius: 4,
          border: '1px solid'
        },
      },
    },
  },
});
