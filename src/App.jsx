import { BrowserRouter as Router } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { AuthProvider } from "./contexts/AuthContext";
import AppTheme from "./theme/AppTheme";
import AppRoutes from "./pages/AppRoutes";
import { DateRangeProvider } from "./contexts/DateRangeContext";

function App() {
  return (
    <AuthProvider>
      <AppTheme>
        <DateRangeProvider>
          <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="tr">
            <CssBaseline />
            <GlobalStyles
              styles={{
                a: {
                  textDecoration: "inherit",
                  color: "inherit",
                },
              }}
            />
            <Router>
              <AppRoutes />
            </Router>
          </LocalizationProvider>
        </DateRangeProvider>
      </AppTheme>
    </AuthProvider>
  );
}

export default App;
