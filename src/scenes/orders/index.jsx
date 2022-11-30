import { Box, Button, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbarExport,GridToolbar } from "@mui/x-data-grid";
import { mockOrderDataList } from "../../data/mockData";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [orderData,setOrderData] = useState([]);

  useEffect(()=>{
   setOrderData(mockOrderDataList);
   console.log("rendering...");
  },[]);
  //const orderData = mockOrderDataList.map((item)=> item.attributes);
  const columns = [
    {field: "order_number", headerName:"Order ID", flex:1, valueGetter:(params)=>{ return params.row.attributes.order_number}},
    {field: "order_lines_price_amount", headerName:"Total Value", flex:1, valueGetter:(params)=>{ return params.row.attributes.order_lines_price_amount}},
    {field: "order_lines_price_currency", headerName:"Currency", flex:1, valueGetter:(params)=>{ return params.row.attributes.order_lines_price_currency}},
    {field: "status", headerName:"Order Status", flex:1, valueGetter:(params)=>{ return params.row.attributes.status}},
    {field: "order_date", headerName:"Order Date", flex:1, valueGetter:(params)=>{ return params.row.attributes.order_date.split('T')[0]}},
    {field: "delivery_end_date", headerName:"Delivery Date", flex:1, valueGetter:(params)=>{ return params.row.attributes.delivery_end_date.split('T')[0]}}
  ]


  return (
    <Box m="20px">
      {/* HEADER */}
      <Header title="Orders" subtitle="Welcome to your Order Page" />
      <Box 
        m="40px 0 0 0" 
        height="75vh"
        sx={{
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
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}>
        
        <DataGrid rows={orderData} columns={columns} components={{
          Toolbar: ()=> {return <GridToolbar sx={{
            "& .MuiButtonBase-root": {
              color: colors.primary[100],
            }
        }}/>}}} />
      </Box>
    </Box>
  );
};

export default Orders