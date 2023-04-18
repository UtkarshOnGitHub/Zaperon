import { Box } from '@mui/material';
import './App.css';
import LogoSection from './Components/LogoSection';
import FormSection from './Components/FormSection';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function App() {
  const [username , setUserName] = useState("")
  const getUserName = (value)=>{
    alert("Logged In")
    setUserName(value)
  }
  useEffect(()=>{
    const cookieTimeout = 20000;
    let timerId;
   if(Cookies.get("jwtToken")){
    const handleCookieTimeout = () => {
      if (Cookies.get('jwtToken') === undefined) {
        alert('Your session has expired. Please login again.');
        window.location.href = '/';
      } else {
        timerId = setTimeout(handleCookieTimeout, cookieTimeout);
      }
    }
    timerId = setTimeout(handleCookieTimeout, cookieTimeout);
    return () => {
      clearTimeout(timerId);
    }
   }

  },[username])

  return (
    <>
      <Box      
      sx={{
        width: "full",
        height: "100vh",
        display:"flex",justifyContent:"center",alignItems:"center"}}
        >
          <Box width="90%">
            <LogoSection/>
            {username =="" ? <FormSection getUserName={getUserName}/>: <Box textAlign={"center"}>
              <h1>Welcome {username}</h1>
              </Box>}
            <Footer/>
          </Box>

      </Box>
    </>
  );
}

export default App;
