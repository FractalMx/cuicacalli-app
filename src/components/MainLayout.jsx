// src/components/MainLayout.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  Box,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const links = [
  { path: '/students', label: 'Participantes' },
  { path: '/pays', label: 'Pagos' },
  { path: '/workshops', label: 'Talleres' },
  { path: '/teachers', label: 'Maestros' },
];

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const drawer = (
    <Box onClick={() => setMobileOpen(false)} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        🎨 Cuicacalli
      </Typography>
      <Divider />
      <List>
        {links.map(({ path, label }) => (
          <ListItem key={path} disablePadding>
            <ListItemButton
              component={Link}
              to={path}
              selected={location.pathname === path}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar component="nav">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            🎨 Cuicacalli
          </Typography>

          {!isMobile &&
            links.map(({ path, label }) => (
              <Box
                key={path}
                component={Link}
                to={path}
                sx={{
                  color: 'white',
                  ml: 2,
                  textDecoration: 'none',
                  fontWeight: location.pathname === path ? 'bold' : 'normal'
                }}
              >
                {label}
              </Box>
            ))}
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ p: 3, width: '100%', mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
}


