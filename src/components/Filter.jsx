import { Box, Button, MenuItem, FormControl, InputLabel, Select, TextField, useTheme, Icon } from "@mui/material"
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { tokens } from "../theme";
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import moment from 'moment';
import countryList from '../data/countryList.json';

const FilterBox = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currencyList, setCurrencyList] = useState(["EUR","USD","GBP"]);
    const [currency, setCurrency] = useState([]);
    const [orderNumber, setOrderNumber] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [orderStatusList, setOrderStatusList] = useState(["Initial", "Fulfilled", "Approved"])
    const [orderStatus, setOrderStatus] = useState([]);
    const [brandList, setBrandList] = useState([{id:"9d21fdd7-9986-458c-9542-e325d546036e", name:"Crea Socks"}])
    const [brand, setBrand] = useState("");
    const [country, setCountry] = useState("");
    const [orderEnd, setOrderEnd] = useState(moment());
    const [orderFrom, setOrderFrom] = useState(moment().add(-1, 'M'));
    const [pageSize, setPageSize] = useState(100)

    const clickSearchButton = ()=>{
        const reqModel = {
            pageNumber:0, 
            pageSize, 
            orderNumber, 
            customerEmail, 
            currency, 
            orderStatus, 
            brand, 
            country,
            orderFrom: orderFrom ? dayjs(orderFrom).format("YYYY-MM-DD") : null, 
            orderEnd: orderEnd ? dayjs(orderEnd).format("YYYY-MM-DD") : null};
        props.onSearchOrder(reqModel);
    };

    const resetFilter = ()=>{
        setCurrency("");
        setBrand("");
        setCountry("");
        setOrderStatus("");
        setOrderFrom(null)
        setOrderEnd(null)
        setCustomerEmail("");
        setOrderNumber("");
        setPageSize(100)
    };

    return(
        <Box m="2px">
            <Box m="5px">
                <FormControl variant="outlined" margin={"none"} sx={{marginRight:"5px"}}>
                    <TextField id="orderNumber" variant="outlined" label="Order Number" focused={false} value={orderNumber} onChange={(e)=> setOrderNumber(e.target.value)}/>
                </FormControl>
                {/* <TextField id="customerEmail" type="email" placeholder="Customer Email" variant="outlined" value={customerEmail} onChange={(e)=> setCustomerEmail(e.target.value)}/> */}
                <FormControl variant="outlined" margin={"none"} sx={{marginRight:"5px"}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                                inputFormat="DD-MM-YYYY"
                                renderInput={(props) => <TextField {...props} />}
                                label="Order From"
                                value={orderFrom}
                                onChange={(selected) => {setOrderFrom(selected);}}
                            />
                    </LocalizationProvider>
                </FormControl>
                <FormControl variant="outlined" margin={"none"} sx={{marginRight:"5px"}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                                inputFormat="DD-MM-YYYY"
                                renderInput={(props) => <TextField {...props} />}
                                label="Order End"
                                value={orderEnd}
                                onChange={(selected) => {setOrderEnd(selected);}}
                            />
                    </LocalizationProvider>
                </FormControl>
            </Box>
            <Box m="15px 5px">
                <FormControl variant="outlined" margin={"none"} style={{minWidth:120, marginRight:"5px"}}>
                    <InputLabel id="orderStatus-select-label" focused={false} sx={{color: colors.primary[100]}}>Order Status</InputLabel>
                    <Select multiple={false} displayEmpty id="status" value={orderStatus} onChange={(e)=> setOrderStatus(e.target.value)}>
                        {orderStatusList.map((item, index)=>(
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" margin={"none"} style={{minWidth:120, marginRight:"5px"}} >
                    <InputLabel id="brand-select-label" focused={false} sx={{color: colors.primary[100]}}>Brand</InputLabel>
                    <Select  multiple={false} displayEmpty id="brand" labelId="brand-select-label" value={brand} onChange={(e)=> setBrand(e.target.value)}>
                        {/* <MenuItem disabled value="">
                            <em>Brand</em>
                        </MenuItem> */}
                        {brandList.map((item, index)=>(
                            <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" margin={"none"} style={{minWidth:120, marginRight:"5px"}} >
                    <InputLabel id="country-select-label" focused={false} sx={{color: colors.primary[100]}}>Country</InputLabel>
                    <Select  multiple={false} displayEmpty id="country" labelId="country-select-label" value={country} onChange={(e)=> setCountry(e.target.value)}>
                        {/* <MenuItem disabled value="">
                            <em>Brand</em>
                        </MenuItem> */}
                        {countryList.map((item, index)=>(
                            <MenuItem key={index} value={item.locale}>{item.country}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" margin={"none"} style={{minWidth:120}} >
                    <InputLabel id="pageSize-select-label" focused={false} sx={{color: colors.primary[100]}}>Page Size</InputLabel>
                    <Select autoWidth={false} multiple={false} displayEmpty id="pageSize" value={pageSize} onChange={(e)=> setPageSize(e.target.value)} >
                        {/* <MenuItem disabled value="">
                            <em>Page Size</em>
                        </MenuItem> */}
                        <MenuItem key={0} value={100}>100</MenuItem>
                        <MenuItem key={1} value={250}>250</MenuItem>
                        <MenuItem key={2} value={500}>500</MenuItem>
                        <MenuItem key={3} value={1000}>1000</MenuItem>
                        {/* <MenuItem key={4} value={3000}>3000</MenuItem> */}
                    </Select>
                </FormControl>
                <Button onClick={clickSearchButton} variant="contained" size="large" sx={{ minWidth: "75px", marginLeft: "10px", marginTop:"10px", backgroundColor: colors.greenAccent[500], ":hover": {backgroundColor: colors.greenAccent[400]}}}>Search</Button>
                <Button onClick={resetFilter} variant="contained" size="large" sx={{ minWidth: "75px", marginLeft: "10px", marginTop:"10px", backgroundColor: colors.blueAccent[500], ":hover": {backgroundColor: colors.blueAccent[400]}}}>Reset</Button>
            </Box>
        </Box>
    )
}

export default FilterBox