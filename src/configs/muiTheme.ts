import { createTheme, Theme } from '@mui/material/styles';
import common from '@mui/material/colors/common';

function muiTheme(outerTheme: Theme) {
  const defaultTheme = createTheme({
    palette: {
      mode: outerTheme.palette.mode,
      primary: {
        main: common.white,
      },
      secondary: {
        main: '#fc8380',
      },
    },
  });

  return createTheme({
    palette: {
      primary: {
        main: defaultTheme.palette.primary.main,
      },
      secondary: {
        main: defaultTheme.palette.secondary.main,
      },
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'standard',
          fullWidth: true,
          type: 'number',
        },
        styleOverrides: {
          root: {
            '--primary-color': defaultTheme.palette.primary.main,
            '--secondary-color': defaultTheme.palette.secondary.main,
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            rows: 'number',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            border: 'none',
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            '& .MuiInput-root:before': {
              border: 'none',
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          icon: {
            color: 'var(--primary-color)',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              transform: 'translate(0, -50%) rotate(90deg) scale(1.1)',
              backgroundColor: 'white',
            },
          },
        },
      },
    },
  });
}

export default muiTheme;