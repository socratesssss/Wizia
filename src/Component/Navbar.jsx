import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
const drawerWidth = 240;
const navItems = ['About Us', 'Pricing', 'Customers', 'Solutions'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color:"white", backgroundColor:"#002228" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <img src="Logo.png" alt="" />
      </Typography>
      <Divider />
      <List sx={{ gap:"5px"} }>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#002228', paddingY:{lg:1, xs:1}, paddingX:{sx:0, md:6}, maxWidth:"1400px"  }}> {/* Custom Background */}
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {/* Left Side: Menu Icon and Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon sx={{fontSize: 50 }} />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'none', md: 'block' }, fontWeight: 'bold' }}
            >
              <img src="Logo.png" alt="" />
            </Typography>
          </Box>

          {/* Middle: Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'block' }, }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', paddingRight: { md: 2, lg: 6 }, }}>
                {item}
              </Button>
            ))}
          </Box>

          {/* Right Side: Extra Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>

          <Button variant="contained" sx={{ backgroundColor: ' #0FF1F6'
, color: "#002228", borderRadius:"20px",
boxShadow: "0px 2px 20px rgba(0, 255, 246, 0.3)",
'&:hover':{
    backgroundColor:'#09a07d'
}
}}>
              Book a Demo <LaunchOutlinedIcon sx={{marginLeft:"4px",fontSize: '17px'}}/>
            </Button>


            <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff',borderRadius:"20px" ,
                '&:hover':{
    backgroundColor:'rgba(131, 147, 144,0.6)'
}
            }}>
            Contact Us
            </Button>
          
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
