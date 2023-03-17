import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { format } from 'date-fns'

const drawerWidth = 240;

export default function Layout({ children }) {
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlinedIcon color='secondary'/>,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlinedIcon color='secondary'/>,
      path: '/create'
    }
  ]

  return (
    <Box sx={{ 
      display: 'flex',
      marginTop: 7
    }}>
      <AppBar
        elevation={0}
        sx={{
          position: 'fixed',
          marginLeft: drawerWidth
        }}
      >
        <Toolbar
          sx={{
            width: `calc(97% - (${drawerWidth}px))`
          }}
        >
          <Typography
            sx={{
              flexGrow: 1
            }}
          >
            Today is {format(new Date(), 'do MMMM Y') }
          </Typography>
          <Typography>
            Mario
          </Typography>
          <Avatar 
            src='/mario-av.png' 
            sx={{ marginLeft: 1}}   
          />
        </Toolbar>
      </AppBar>

      <div 
        sx={{
          background: '#f9f9f9',
          width: '100%'
        }}
      >
        {children}
      </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <div>
          <Typography variant="h5">
            Notes
          </Typography>
        </div>
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              sx={location.pathname === item.path ? { backgroundColor: '#f4f4f4' } : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

    </Box>
  )
}