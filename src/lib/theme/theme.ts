import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#783EAD",
    },
    secondary: {
      main: "#F7F3E7",
    },
    success: {
      main: "#B1996E",
    },
    info: {
      main: "#F3F7F6",
    },
    warning: {
      main: "#A38755",
    },
    error: {
      main: "#D13534",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "12px 24px",
          color: "white",
          fontStyle: "normal",
          borderRadius: "10px",
          fontFamily: "Roboto , sans-serif",
          textTransform: "initial",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
  },

  typography: {
    fontFamily: "Roboto , sans-serif",
    fontWeightRegular: 400,

    h1: {
      fontFamily: "Roboto , sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Roboto , sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Roboto , sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Roboto , sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "Roboto , sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "Roboto , sans-serif",
      fontWeight: 600,
    },
    body1: {
      color: "#0B1134",
      fontFamily: "Roboto , sans-serif",
      fontSize: "16px",
    },
    body2: {
      color: "#0B1134",
      fontFamily: "Roboto , sans-serif",
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
