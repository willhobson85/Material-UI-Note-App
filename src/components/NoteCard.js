import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Card, CardHeader, CardContent, IconButton, Typography, Avatar } from "@mui/material";
import { yellow, green, pink, blue } from '@mui/material/colors';

const classes = (note)  => {
  return {
     test: {
        border: (note.category === 'important') ? '1px solid red' :  null
     },
     marginTop: 4
  }
}

export default function NoteCard({ note, handleDelete }) {
  const styles = classes(note)
  
  const avatarColor = note => {
    if (note.category === "todos") {
      return yellow[700];
    }
    if (note.category === "money") {
      return green[500];
    }
    if (note.category === "important") {
      return pink[500];
    }
    return blue[500];
  };

  return (
    <div>
      <Card 
        elevation={3} 
        
        sx={styles.test}
      >
        <CardHeader 
          avatar={
            <Avatar
              sx={{ backgroundColor: avatarColor(note) }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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