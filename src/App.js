import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import router from "./routes/PanelRoutes";
import { SnackbarProvider } from "notistack";
// theme 

import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const queryClint = new QueryClient()

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3} dense autoHideDuration={3000} anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}>
        <ThemeProvider theme={darkTheme}>
          <QueryClientProvider client={queryClint}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
