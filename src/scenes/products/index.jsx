import { Box, Button, Input, Snackbar, useTheme } from "@mui/material"; 
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useRef, useState } from "react";


const Products = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [file, setFile] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const refFileInput = useRef(null);

    const handleChange = (e)=>{
        setFile(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        fetch(process.env.REACT_APP_SERVICE_PRODUCT_API, {
            method:"POST",
            body: formData
          })
          .then(response => response.json())
          .then((data)=>{
            if(data.result === true){
                setIsSuccess(true);
            }else{
                setIsSuccess(false);
            }
            setIsOpen(true);
          }).catch((err)=>{
            console.log(err);
            setIsSuccess(false);
            setIsOpen(true);
          });
    }
    return(
        <Box m="20px">
            <Header title="Products" subtitle="Welcome to your Product Page"></Header>
            <Box sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    // backgroundColor: colors.primary[500],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
                }} display="flex" justifyContent="space-between" alignItems="center">
                    <form>
                        <Input type="file" ref={refFileInput} onChange={handleChange}></Input>
                        <Button onClick={handleSubmit} variant="contained" size="large" sx={{ minWidth: "75px", marginLeft: "10px", marginTop:"10px", backgroundColor: colors.greenAccent[500], ":hover": {backgroundColor: colors.greenAccent[400]}}}>Upload</Button>    
                    </form>
                   
            </Box>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Snackbar open={isOpen} autoHideDuration={6000} onClose={()=> setIsOpen(false)}>
                    <Alert severity={isSuccess ? "success" : "error" } sx={{ width: '100%' }}>{isSuccess ? "The file has been uploaded successfully!" : "An error occurred while file uploading. Please try it later on!"}</Alert>
                </Snackbar>
            </Stack>
        </Box>
    )
}

export default Products