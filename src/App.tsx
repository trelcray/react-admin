import { ColorModeContext, useMode } from "./styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar } from "./pages/global/Topbar";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
