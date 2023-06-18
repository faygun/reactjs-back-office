import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Orders from "./scenes/orders";
import  Dashboard  from "./scenes/dashboard";
import Users from "./scenes/users";
import Products from "./scenes/products";
import { LoginPage } from "./scenes/login";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  const [theme, colorMode] = useMode();
  
  return (
  <ColorModeContext.Provider value={colorMode}>
    <AuthProvider>
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="app">
            <Sidebar/>
            <main className="content">
              <Topbar/>
              <Routes>
                  <Route path="/login" element={<LoginPage />} />  
                  <Route path="/" element={<ProtectedLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/orders" element={<Orders/>}></Route>
                    <Route path="/users" element={<Users/>}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                  </Route>
                </Routes>
            </main>
          </div>
      </ThemeProvider>
    </AuthProvider>
    
  </ColorModeContext.Provider>  
  );
}

export default App;
