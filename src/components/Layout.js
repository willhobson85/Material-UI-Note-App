import React from "react";
import { Drawer, Typography, Box } from "@mui/material";

const drawerWidth = 240;

export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* app bar */}

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
      </Drawer>

    </Box>
  )
}