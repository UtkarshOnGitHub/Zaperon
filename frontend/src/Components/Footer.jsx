import { Box } from '@mui/material'
import React from 'react'
import Zaperon from "../Assets/zaperon_logo.png"

const Footer = () => {
  return (
    <>
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop:"100px",
            '@media (max-width: 900px)': {
                flexDirection:"column"
            },
        }}>
            <Box sx={{
                display:"flex",
                color:"grey",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <p>Powered By </p>
                <img src={Zaperon} alt="" />
            </Box>
            <Box sx={{
                display:"flex",
                gap:"10px",
                color:"#003FB9",
                fontWeight:"600"
            }}>
                <p>Need Help?</p>
                <p>Privacy Policy & Terms</p>
            </Box>
        </Box>
    </>
  )
}

export default Footer
