import { Box,Button,CircularProgress,FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import Cookies from 'js-cookie';


const getLogin = (data={})=>{
  return axios.post("http://localhost:8080/login",data)
}

const FormSection = ({getUserName}) => {

    const [showPassword  , setShowPassword] = useState(false)
    const [loader , setLoader] = useState(false)
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [passwordErr , setPasswordErr] = useState(false)
    const [EmailErr , setEmailErr] = useState(false)
    const inital={
      email:email,
      password:password
    }

    const handleClickShowPassword =()=>{
        setShowPassword(!showPassword)
    }

    const handleSubmit = ()=>{
        setLoader(true)
        getLogin(inital).then((res)=>{
          if(res.data.message === "Token Generated"){
            const token = res.data.token;
            const expirationTime = new Date(new Date().getTime() + 20 * 1000);;
            Cookies.set('jwtToken', token, { expires: expirationTime, path: '/' });
            getUserName(email)
            setLoader(false)
            setPasswordErr(false)
            setEmailErr(false)
          }

          else if(res.data == "Wrong Password"){
            setPasswordErr(true)
            setLoader(false)
          }else if(res.data =="No Email Found!"){
            setEmailErr(true)
            setLoader(false)
          }
        })
    }

    useEffect(()=>{

    },[passwordErr])

    console.log(passwordErr)
  return (
    <>
    <Box
    sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    }}>
        <TextField
          id="outlined-text-input"
          type="text"
          error={EmailErr}
          label={EmailErr ? "Error" : "Email Address"}
          helperText={EmailErr ? "Please Enter A Valid Email" : ""}
          onChange={(e)=>{setEmail(e.target.value)}}
          autoComplete='off'
          sx={{
            width:"30%",
            '@media (max-width: 900px)': {
                width:"60%",
            },
          }}
        />
   <FormControl sx={{ m: 3, width: '30%' ,
               '@media (max-width: 900px)': {
                width:"60%",
            },
 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            error ={passwordErr}
            label={passwordErr ? "Error" :"Password"}
            helperText={passwordErr ? "Password" : ""}
            autoComplete='off'
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e)=>{setPassword(e.target.value)}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {passwordErr && <div style={{width:"30%",textAlign:"left", color: 'red' ,marginTop:"-20px"}}>Password Must Be 9 Character Long!</div>}
        <Box width="30%" textAlign={"right"} color="#003FB9" marginTop={"-10px"}>
            <p style={{fontWeight:"700"}}>Forgot Password?</p>
        </Box>
        <Button loading={true}  sx={{
            backgroundColor:"#325daf",
            color:"white",
            padding:"10px",
            width:"30%",
            '&:hover': {
                backgroundColor: '#003FB9',
              },
              '@media (max-width: 900px)': {
                width:"60%",
            },
        }} onClick={handleSubmit}>
        {!loader==true ? "Submit" : <CircularProgress sx={{color:"white"}} size={25}/>}
        </Button >
    </Box>
    </>
  )
}

export default FormSection
