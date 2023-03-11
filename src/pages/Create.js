import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { Container } from '@mui/system/';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { ThemeProvider, createMuiTheme, makeStyles } from '@mui/styles';

// import ButtonGroup from '@mui/material/ButtonGroup';
// This lets you have multiple buttons displayed together

// const useStyles = makeStyles({
//   // This is similar to a react hook
//   // This is also no longer working. Now we use sx={{}} in the components
//   // Each property inside this will be a CSS class
//   btn: {
//     fontSize: 60,
//     backgroundColor: 'green',
//     // This is how we add an effect, such as hover
//     '&:hover': {
//       backgroundColor: 'blue'
//     }
//   }
// })

export default function Create() {
  // To use the styles above, we invoke the hook inside the function by assigning a constant to the hook
  
  // const classes = useStyles()
  
  
  return (
    <Container>
     <Typography
      sx={{textDecoration: 'underline', marginBottom: 5}}
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

    <Button
      // className={classes.btn}
      sx={{backgroundColor: 'green', '&:hover': {backgroundColor: 'blue'}}}
      onClick={() => console.log('You clicked me')}
      type='submit'
      color='secondary'
      variant='contained'
      endIcon={<KeyboardArrowRightIcon />}
    >
      Submit
    </Button>

     {/* <Button 
      type='submit'
     >
      Submit
     </Button>
     <Button
      type='submit'
      color='secondary'
      variant='outlined'
      // Lets us set a different type of button
     >
        Submit
      </Button>

      <ButtonGroup 
        color='secondary'
        variant='contained'
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

      {/* icons */}
      {/* <br />
      <AcUnitOutlinedIcon />
      // To create an icon, you must install icon package and import them. They can also take props
      // Can add icons to a button at start by using startIcon={<component />} or at the end with endIcon={<component />}
      <AcUnitOutlinedIcon 
        color='secondary'
        fontSize='large'
      /> */}
    </Container>
  )
}
