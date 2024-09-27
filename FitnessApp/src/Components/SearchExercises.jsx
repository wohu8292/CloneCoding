import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../Utils/fetchData'

import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const[search, setSearch]=useState('')
  const[bodyParts, setBodyParts]=useState([])

  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
      console.log(bodyPartsData)
    }

    fetchExercisesData()
    console.log(bodyParts)
  },[])

  const handleSearch= async()=>{
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      console.log(exercisesData)
      const searchedExercises = exercisesData.filter((data)=>{
        data.name.toLowerCase().includes(search)
        || data.target.toLowerCase().includes(search)
        || data.equipment.toLowerCase().includes(search)
        || data.bodyPart.toLowerCase().includes(search)
      }) 

      setSearch('')
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={'700'} sx={{fontSize:{lg:'44px', xs:'30px'}}} mb={'49px'} textAlign={'center'}>
        Awsome Exercises You Should Know
      </Typography>

      <Box position={'relative'} mb={'72px'}>
        <TextField height='76px' sx={{input:{fontWeight:'700', border:'none', borderRadius:'4px'}, width:{lg:'1170px', xs:'350px'}, backgroundColor:'#fff', borderRadius:'40px'}}
        value={search}
        onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
        placeholder='Search Exercises'
        type='text'
        />
        <Button className='search-btn' sx={{bgcolor:'#FF2625', color:'#fff', textTransform:'none', width: {lg:'173px', xs: '80px'}, height:'56px', position:'absolute', right:'0px', fontSize:{lg:'20px', xs:'14px'}}} onClick={handleSearch}>Search</Button>
      </Box>

      <Box position={'relative'} width={'100%'} p={'20px'}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises