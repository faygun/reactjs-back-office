import CircularProgress from '@mui/material/CircularProgress';
import {Box, useTheme} from '@mui/material';
import {tokens} from '../theme'

const LoadingComponent = ()=> {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ display: 'flex', width:'100%', height:'100%', position:"relative", backgroundColor: colors.primary[500], zIndex:'10'}}>
      <CircularProgress sx={{display:"flex", position:"absolute", top:"50%", right:"50%"}} color="info" />
    </Box>
  );
}

export default LoadingComponent