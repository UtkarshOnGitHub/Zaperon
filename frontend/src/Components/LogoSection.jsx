import { Box } from '@mui/material'
import React from 'react'
import profileLogo from "../Assets/ic_user.svg"

const LogoSection = () => {
  return (
    <>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",

        }}>
            <Box sx={
                {
                    width:"70px",
                    height:"70px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    background:"#EFEFEF",
                    padding:"30px",
                    borderRadius:"50%",
                }
                }>
                    <img src={profileLogo} width="60px"/>
            </Box>
            <Box
            sx={{
                textAlign:"center",
                color:"#0B3558"
            }}>
                <h1 style={{marginTop:"3px"}}>Welcome!</h1>
                <p style={{fontSize:"14px",marginTop:"-10px",fontWeight:"500"}}>Let's connect to your workspace.<br/>Please enter your email to continue.</p>
            </Box>
        </Box>
    </>
  )
}

export default LogoSection
