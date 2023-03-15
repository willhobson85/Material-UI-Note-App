import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { Container } from '@mui/system/';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { useHistory } from 'react-router-dom'

export default function Create() {
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
        sx={{
          textDecoration: 'underline', 
          marginBottom: 5
        }}
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
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
          </RadioGroup>
        </FormControl>

        <Button
          sx={{
            backgroundColor: 'green', 
            '&:hover': {
              backgroundColor: 'blue'
            }
          }}
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRightIcon />}
          >
          Submit
        </Button>
      </form>
    </Container>
  )
}
