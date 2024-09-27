import { Box } from '@mui/material';
import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
    
  return (
    <div>
      {data.map((item) => (
        <Box
          itemId={item.id || item} // NOTE: itemId is required for track items
          title={item.id || item}
          key={item.id || item}>
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
      ))}
    </div>
  )
}

export default HorizontalScrollbar