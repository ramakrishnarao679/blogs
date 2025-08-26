import React from 'react'
import {Box, Paper, Typography, TextField, Stack, Button,} from '@mui/material'
import {FormControl,FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'


const RegistrationPage = () => {
  return (  
    <div>
       <Box sx={{display: 'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
      <Paper  elevation={5} sx={{width:'350px', height:'550px', padding:'15px', borderRadius:'20px',}}>
        <Stack spacing={3}>
            <Typography variant='h3'>Registration</Typography>
            <Box sx={{display:'flex', gap:2}}>
                <TextField required id="outlined-required" label="FirstName" variant='outlined' />
                <TextField required id="outlined-required" label="LastName" variant='outlined' />
            </Box>
            <TextField required id="outlined-required" label="Email" variant='outlined' />
            <TextField required id="outlined-required" label="Password" variant='outlined' />
            <TextField required id="outlined-required" label="Mobile Num" variant='outlined' />
             <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Felmale" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" size='large'>Rigister </Button>
        </Stack>
      </Paper>
    </Box>
    </div>
  )
}

export default RegistrationPage
