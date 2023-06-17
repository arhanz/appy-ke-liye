import React, { useEffect } from "react";
import Backdrop from "../components/Backdrop/index";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";
import { useDispatch } from "react-redux";
import { unsetLoading } from "redux/actions";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#9c8e35",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#18181b000",
    },
  },
});

export default function CustomTheme({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(unsetLoading());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Backdrop> {children} </Backdrop>{" "}
      </SnackbarProvider>{" "}
    </ThemeProvider>
  );
}
