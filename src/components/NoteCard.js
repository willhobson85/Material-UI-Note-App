import React from "react";
import { Card, CardHeader, CardContent, IconButton, Typography } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const classes = (note)  => {
  return {
     test: {
        height: 350,
        border: (note.category === 'work') ? '1px solid red' :  null
     }
  }
}

export default function NoteCard({ note, handleDelete }) {
  const styles = classes(note)

  return (
    <div>
      <Card elevation={3} sx={styles.test}>
        <CardHeader 
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlinedIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        
        <CardContent>
          <Typography 
            variant="body2"
            color="textSecondary"
          >
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}