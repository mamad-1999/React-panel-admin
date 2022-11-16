import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import router from "./routes/PanelRoutes";
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
      <ThemeProvider theme={darkTheme}>
        <QueryClientProvider client={queryClint}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
