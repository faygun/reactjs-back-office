import { defaultListboxReducer } from "@mui/base";
import { Box, useTheme } from "@mui/material"; 
import Header from "../../components/Header";
import { tokens } from "../../theme";
const Products = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Users" subtitle="Welcome to your Product Page"></Header>
            </Box>
        </Box>
    )
}

export default Products