import React from 'react'
import {Box, Paper, Typography, TextField, Stack, Button,} from '@mui/material'
import {YouTube, Instagram, Facebook} from '@mui/icons-material';

const LoginPage = () => {
  return (  
    <div>
       <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', height:'100vh',}}>
      <Paper  elevation={5} sx={{width:'350px', height:'400px', padding:'15px', borderRadius:'20px',}}>
        <Stack spacing={3}>
            <Typography variant='h3'>SignIn</Typography>
            <TextField required id="outlined-required" label="Email" variant='outlined' />
            <TextField required id="outlined-required" label="Password" variant='outlined' />
                <Button variant="contained" size='large'>Login </Button>
                <Box sx={{display:'flex', justifyContent:'center'}}>
                <Button variant="contained" size='small' color='success'>Register </Button>
                </Box>

                <Box sx={{display:'flex', justifyContent:'center', }}>
                <a href='https://www.youtube.com/' target='black' ><YouTube color='error' fontSize='large' /></a>
                <a href='https://www.instagram.com'target='black' ><Instagram  color='warning' fontSize='large'/></a>
                <a href='https://www.facebook.com' target='black' ><Facebook color='info' fontSize='large'/></a>
                </Box>
        </Stack>
      </Paper>
    </Box>
    </div>
  )
}

export default LoginPage
