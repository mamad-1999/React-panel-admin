import BaseContainer from "./layout/BaseContainer"
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
        <BaseContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
