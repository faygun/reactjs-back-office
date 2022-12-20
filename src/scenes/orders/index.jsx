import { Box, PaginationItem, useTheme, MenuItem, Select, FormControl } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState, useRef, useMemo } from "react";
import FilterBox from "../../components/Filter";
import CustomNoRowsOverlay from "../../components/Overlay"; 
import LoadingComponent from "../../components/Loading";
import moment from 'moment';
const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [orderData,setOrderData] = useState([]);
  const [pageSize, setPageSize] = useState(100);
  const [page, setPage] = useState(0);
  const [rowCount, setRowCount] = useState(orderData ? orderData.length : 0);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({pageNumber: page, pageSize, orderFrom:  moment().format("YYYY-MM-DD")});
  
  useEffect(()=>{
    console.log("effect run... ", filter);
    setIsLoading(true);

    console.log(filter);
    fetch(process.env.REACT_APP_SERVICE_ORDER_API, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(filter)
    })
    .then(response => response.json())
    .then((data)=>{
      let orderList = data.data;
      if(orderList && orderList.length > 0){
        setOrderData(orderList);
        setRowCount((prevRowCountState) =>
          orderList !== undefined ? orderList.length * (page + 2) : prevRowCountState,
        );
      }
      else{
        setPage(page - 1 < 0 ? 0 : page - 1);
        setOrderData([]);
        setRowCount(0);
      }
        

      console.log(orderList);
      setIsLoading(false);
    }).catch((err)=>{
        setIsLoading(false);
    });

  },[filter, setFilter]);

  const pageChange = (p)=> {
    console.log("page is ", p);
    setPage(p);
    setFilter({...filter, pageNumber : p});
  }

  const columns = [
    {field: "order_number", headerName:"Order ID", flex:1, valueGetter:(params)=>{ return params.row.attributes.order_number}},
    {field: "status", headerName:"Order Status", flex:1, valueGetter:(params)=>{ return params.row.attributes.status}},
    {field: "order_lines_count", headerName:"Items", flex:1, valueGetter:(params)=>{ return params.row.attributes.order_lines_count}},
    {field: "first_name", headerName:"First Name", flex:1, valueGetter:(params)=>{ return params.row.attributes.billing_address.first_name}},
    {field: "last_name", headerName:"Second Name", flex:1, valueGetter:(params)=>{ return params.row.attributes.billing_address.last_name}},
    {field: "city", headerName:"Shipping Address", flex:1, valueGetter:(params)=>{ return params.row.attributes.shipping_address.city + ", " + params.row.attributes.shipping_address.country_code}},
    {field: "order_lines_price_amount", headerName:"Total Value", flex:1, valueGetter:(params)=>{ return params.row.attributes.order_lines_price_amount}},
    {field: "order_lines_price_currency", headerName:"Currency", flex:1, valueGetter:(params)=>{ return params.row.attributes.order_lines_price_currency}},
    {field: "order_date", headerName:"Order Date", flex:1, valueGetter:(params)=>{ return params.row.attributes.order_date.split('T')[0]}},
    {field: "delivery_end_date", headerName:"Delivery Date", flex:1, valueGetter:(params)=>{ return params.row.attributes.delivery_end_date.split('T')[0]}}
  ]

  const searchOrder = (filterModel)=>{
    if(isLoading)
      return;

    setFilter(filterModel);
  }

  const toolBarGrid = ()=>{
    return (<GridToolbar sx={{
      "& .MuiButtonBase-root": {
        color: colors.primary[100],
      }
    }}/>)
  }

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
            // backgroundColor: colors.primary[500],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}>
        <FilterBox onSearchOrder={searchOrder} loading={isLoading}/>
        <DataGrid rows={orderData} 
                  columns={columns} 
                  disableSelectionOnClick
                  disableColumnFilter 
                  paginationMode="server"
                  pagination
                  rowCount={rowCount}
                  rowsPerPageOptions={[250, 500, 1000]}
                  page={page}
                  onPageChange={pageChange}
                  loading={isLoading}
                  components={{
                    Toolbar: toolBarGrid,
                    NoRowsOverlay: CustomNoRowsOverlay,
                    NoResultsOverlay: CustomNoRowsOverlay
                  }} >
                  {isLoading ? (<LoadingComponent/>) : ("")}
                  
                  </DataGrid>
      </Box>
    </Box>
  );
};

export default Orders