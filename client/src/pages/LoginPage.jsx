import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const FormAuthOrLogin = () => {
  return (
      <Box sx={{
        width: '30em',
        height: '30em',
        display: 'flex',
        padding: '5em',
        flexDirection: 'column',
        justifyContent: 'space-between',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderRadius: '1em'
    }}>
        <Typography variant="h4" textAlign='center'>LOGIN</Typography>
        <TextField id='login' label='Login' variant="standard"></TextField> 
        <TextField id='password' label='Password' variant="standard"></TextField> 
        <Stack direction='row' spacing={'50%'}>
          <Button variant="contained" color="success">Login</Button>
          <Link to={'/registration'}>
            <Button variant="outlined" color="success">Registration</Button>
          </Link>
        </Stack>
      </Box>
  )
}

export default FormAuthOrLogin