import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import LogIn from './LogIn';
import LogUp from './LogUp';

const drawerWidth = 200;
const navItems = ['Iniciar sesión', 'Registrarse'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          mx: 2,
          flexGrow: 1,
          display: { xs: 'none', md: 'block' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        MI RIFA
      </Typography>
      <Divider />
      <List>
        <Link to='/home'>
          <Button variant="text" fullWidth>
            <Typography variant="overline" color='#000'>Home</Typography>
          </Button>
        </Link>
        <Divider />
        <LogIn mobile={true} />
        <LogUp mobile={true} />
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} className='mb-16'>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <LocalActivityRoundedIcon />
            <Typography
              variant="h6"
              component="div"
              sx={{
                mx: 2,
                flexGrow: 1,
                display: { sx: 'block' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MI RIFA
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block', width: '450px' } }}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Link to='/home'>
                    <Button variant="text" fullWidth>
                      <Typography variant="overline" color='#fff'>Home</Typography>
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <LogIn />
                </Grid>
                <Grid item xs={4}>
                  <LogUp />
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}
export default Header;