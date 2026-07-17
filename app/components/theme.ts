import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#64105f", dark: "#450644", light: "#8a3985" },
    secondary: { main: "#b7bf3b", light: "#f2f4b6" },
    background: { default: "#ecebea", paper: "#ffffff" },
    text: { primary: "#222222", secondary: "#6f6f6f" },
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    h1: { fontWeight: 900, lineHeight: 1.05 },
    h2: { fontWeight: 900, lineHeight: 1.1 },
    button: { textTransform: "uppercase", fontWeight: 800 },
  },
});
