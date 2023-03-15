import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { Container } from '@mui/system/';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { ThemeProvider, createMuiTheme, makeStyles } from '@mui/styles';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { useHistory } from 'react-router-dom'


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
  const [title, setTitle] = useState('')
  const history = useHistory()
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }

    if (title === '') {
      setDetailsError(true)
    }

    if (title && details) {
      fetch('http://localhost:8000/notes/', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }
  }
  
  
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

    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <TextField 
        onChange={(e) => setTitle(e.target.value)}
        sx={{
          marginTop: 5,
          marginBottom: 5,
          display: 'block'
        }}
        label="Note Title"
        variant='outlined'
        color='secondary'
        fullWidth
        required
        error={titleError}
      />  
      <TextField 
        onChange={(e) => setDetails(e.target.value)}
        sx={{
          marginTop: 5,
          marginBottom: 5,
          display: 'block'
        }}
        label="Details"
        variant='outlined'
        color='secondary'
        multiline
        rows={4}
        fullWidth
        required
        error={detailsError}
      />  
      
      <FormControl
        sx={{
          marginTop: 5,
          marginBottom: 1,
          display: 'block'
        }}
      >
        <FormLabel>Note Category</FormLabel>
        <RadioGroup 
          row
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel 
            value='money'
            control={<Radio />} 
            label='Money' 
            color='secondary'
          />
          <FormControlLabel 
            value='todos'
            control={<Radio />} 
            label='Todos' 
            color='secondary'
          />
          <FormControlLabel 
            value='reminders'
            control={<Radio />} 
            label='Reminders' 
            color='secondary'
          />
          <FormControlLabel 
            value='work'
            control={<Radio />} 
            label='Work' 
            color='secondary'
          />
          {/* <Radio 
            value='hello' 
            color='secondary'
          />
          <Radio 
            value='goodbye' 
            color='secondary'
          /> */}
        </RadioGroup>
      </FormControl>

      <Button
        // className={classes.btn}
        sx={{backgroundColor: 'green', '&:hover': {backgroundColor: 'blue'}}}
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}
        >
        Submit
      </Button>
    </form>

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
