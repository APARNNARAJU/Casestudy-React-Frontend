import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#3b615eaa" }}>
        <Toolbar>
        <Avatar alt="Remy Sharp" src="https://img.freepik.com/premium-vector/employee-icon_933463-1357.jpg" sx={{ mr: 2 }} />
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            CloudFare-Employee
          </Typography>
          <Link to={'/home'}>
           <Button style={{color:'white'}}>Home</Button>
          </Link>
          <Link to={'/form'}>
           <Button style={{color:'white'}}>Employee Form</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar