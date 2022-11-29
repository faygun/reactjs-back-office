import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Orders from "./scenes/orders";
import  Dashboard  from "./scenes/dashboard";
import Users from "./scenes/users";
import Products from "./scenes/products";
function App() {
  const [theme, colorMode] = useMode();
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders/>}></Route>
              <Route path="/users" element={<Users/>}></Route>
              <Route path="/products" element={<Products/>}></Route>
            </Routes>
          </main>
        </div>
    </ThemeProvider>
    
  </ColorModeContext.Provider>  
  );
}

export default App;
