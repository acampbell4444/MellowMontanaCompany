import React, { FC, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom styled components using Material UI's styled API
const HeroBackground = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: "url(https://lirp.cdn-website.com/md/pexels/dms3rep/multi/opt/pexels-photo-259881-1920w.jpeg)",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 6),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  letterSpacing: '0.1em',
}));

// Create theme with Material UI
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      letterSpacing: '0.2em',
      [createTheme().breakpoints.down('md')]: {
        fontSize: '2.5rem',
      },
    },
    h4: {
      fontWeight: 300,
      letterSpacing: '0.15em',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        },
      },
    },
  },
});

const LandingPage: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;

  const drawer = (
    <Paper sx={{ height: '100%', bgcolor: 'rgba(0, 0, 0, 0.9)' }}>
      <List>
        {['Water Sports', 'Locations', 'About', 'Book Now'].map((text) => (
          <ListItem component="button" key={text}>
            <ListItemText 
              primary={text}  
              sx={{ 
                '& .MuiListItemText-primary': { 
                  letterSpacing: '0.1em',
                  textAlign: 'center' 
                } 
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', position: 'relative' }}>
        <HeroBackground />
        
        {/* Navigation */}
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                letterSpacing: '0.2em',
                fontWeight: 600 
              }}
            >
              MELLOW MONTANA CO.
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Button color="inherit">WATER SPORTS</Button>
                <Button color="inherit">LOCATIONS</Button>
                <Button color="inherit">ABOUT</Button>
                <HeroButton 
                  variant="contained" 
                  sx={{ 
                    bgcolor: 'white',
                    color: 'black',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.9)',
                    }
                  }}
                >
                  BOOK NOW
                </HeroButton>
              </Box>
            )}
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better mobile performance
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: drawerWidth 
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        {/* Main Content */}
        <Container 
          maxWidth="lg" 
          sx={{ 
            pt: { xs: 12, md: 20 },
            pb: 8,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h1" 
                gutterBottom
                sx={{ 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                DISCOVER CLARITY
              </Typography>
              <Typography 
                variant="h4" 
                gutterBottom
                sx={{ 
                  mb: 6,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                FLATHEAD WATER SPORTS
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <HeroButton 
                  variant="contained"
                  sx={{ 
                    bgcolor: 'white',
                    color: 'black',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.9)',
                    }
                  }}
                >
                  BOOK YOUR ADVENTURE
                </HeroButton>
                <HeroButton 
                  variant="outlined"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'rgba(255,255,255,0.9)',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  LEARN MORE
                </HeroButton>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Footer */}
        <Paper 
          component="footer" 
          elevation={0}
          sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            bgcolor: 'transparent',
            py: 3,
          }}
        >
          <Container maxWidth="lg">
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  © 2024 MELLO MONTANA CO.
                </Typography>
              </Grid>
              <Grid item>
                <Box sx={{ display: 'flex', gap: 3 }}>
                  <Button color="inherit" sx={{ opacity: 0.8 }}>Instagram</Button>
                  <Button color="inherit" sx={{ opacity: 0.8 }}>Facebook</Button>
                  <Button color="inherit" sx={{ opacity: 0.8 }}>Contact</Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;