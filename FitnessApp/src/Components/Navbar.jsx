import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../public/assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack direction='row' 
    justifyContent='space-around' 
    sx={{gap:{sm:'23px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none'}}>
      <Link to='/'>
        <img src={Logo} alt="logo" style={{width:'48px', height: '48px', margin: '0px 20px'}} />
      </Link>

      <Stack direction='row' gap='40px' fontFamily='Alegreya' fontSize='24pd' alignItems='flex-end'>
        <Link style={{textDecoration:'none', color: '3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '3A1212' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar