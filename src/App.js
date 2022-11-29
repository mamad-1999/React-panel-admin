import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import router from "./routes/PanelRoutes";
import { SnackbarProvider } from "notistack";
import { ConfirmProvider } from "material-ui-confirm";
// theme 

import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const queryClint = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3} dense autoHideDuration={3000} anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}>
        <ThemeProvider theme={darkTheme}>
          <ConfirmProvider>
            <QueryClientProvider client={queryClint}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </ConfirmProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
