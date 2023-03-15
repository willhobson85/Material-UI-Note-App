import React from 'react'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import NoteCard from '../components/NoteCard'

export default function Notes() {
  const [notes, setNotes] = useState([])


  useEffect(() => {
    fetch('http://localhost:8000/notes/')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <Container>
      {/* <Grid 
        // The grid is a 12-column grid system.
        container
      >
        <Grid 
          item 
          // The next line states that on a medium (md) screen, it will take up X columns per item, using 3 in this example.
          md={3}
          // Extra small size
          xs={12}
          // Small size
          sm={6}
        >
          <Paper>1</Paper>
        </Grid>
        <Grid 
          item 
          xs={12}
          sm={6}
          md={3}
        >
          <Paper>2</Paper>
        </Grid>
        <Grid 
          item 
          xs={12}
          sm={6}
          md={3}
        >
          <Paper>3</Paper>
        </Grid>
        <Grid 
          item 
          xs={12}
          sm={6}
          md={3}
        >
          <Paper>4</Paper>
        </Grid>
      </Grid> */}

      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid 
            item 
            key={note.id}
            xs={12}
            md={6}
            lg={4}
          >
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
