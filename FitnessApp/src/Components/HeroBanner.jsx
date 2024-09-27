import { Box, Typography, Stack } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../public/assets/images/banner.png'


const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px', xs:'70px'}, ml:{sm:'50px'}}} position='relative' p='20px'>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
        <Typography fontWeight={700} mt='30px' mb='23px' sx={{fontSize: {lg:'44px', xs:'40px'}}}>Sweat, Smile <br/> And Repeat</Typography>
        <Typography fontSize="18px" fontFamily="Alegreya" lineHeight="35px">Check out the most effective exercises personalized to you</Typography>
    
        <Stack>
            <a href='#exercises' style={{marginTop:'45px', textDecoration:'none', width:'200px', textAlign:'center', background: '#FF2625', padding:'14px', fontSize:'22px', textTransform:'none', color:'white', borderRadius:'4px'}}>Explore Exercises</a>
        </Stack>

        <Typography fontWeight={600} color='FF2625' sx={{display:{lg:'block', xs:'none'}, fontSize:'200px', opacity:'0.1'}}>Exercise</Typography>
        <img src={HeroBannerImage} alt="hero-banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner