// routes
import Router from "./routes";
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';

import './App.css';
import { SnackbarProvider } from "notistack";
function App() {

  return (
    <>
    <ThemeProvider>
      <ThemeSettings>
        {" "}
        <Router />{" "}
      </ThemeSettings>
    </ThemeProvider>

    <SnackbarProvider  autoHideDuration={5000} maxSnack={4} anchorOrigin={{horizontal:"right",vertical:"top"}} />
    </>
  );
}

export default App;
