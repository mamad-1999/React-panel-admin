import BaseContainer from "./layout/BaseContainer"
import { RouterProvider } from "react-router-dom";
import router from "./routes/PanelRoutes";
// theme 

import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
