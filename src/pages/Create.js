import React from 'react'
import Typography from '@mui/material/Typography'

export default function Create() {
  return (
    <div>
     <Typography
      variant='h6'
      // This will set the style as an h6
      color='textSecondary'
      // Sets the text to the secondary color of the theme's text
      component='h2'
      // This will make the inspect tool think it is an h2
      gutterBottom
      // Adds a margin to the bottom
     >
       Create a new note
     </Typography>
    </div>
  )
}
