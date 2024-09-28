import { Stack, Typography } from '@mui/material'
import React from 'react'

import Icon from '../public/assets/icons/gym.png'
const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    // Stack's default value of flex-direction is column
    <Stack 
    type='button' 
    justifyContent='center'   
    alignItems='center' 
    className='bodyPart-card'
    sx={bodyPart === item? {borderTop:'4px solid #FF2625', background:'#fff', borderBottomLeftRadius:'20px', width:'270px', height:'282px', cursor:'pointer', gap:'47px'}: {background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px'}}
    onClick={()=>{
      setBodyPart(item)
      window.scrollTo({top:1800, left:100, behavior:'smooth'}) 
    }}
    > 
      <img src={Icon} alt="dumbell"/>
      <Typography>{item}</Typography>
    </Stack>
  )
}

export default BodyPart