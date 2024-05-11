//react and router
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import Privacy from './pages/Privacy';
import Influencer from './pages/Influencer';

//components
import { Grid, createTheme, Box} from '@mui/material'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const defaultTheme = createTheme();
  const headerBackGround = defaultTheme.palette.grey[200];
  const contentBackGround = "#fff";
  const footerBackGround = defaultTheme.palette.grey[200];

  return (
      <Grid color={defaultTheme.palette.primary.contrastText}>
        <Grid container xs={12} sm item justifyContent={'center'} bgcolor={headerBackGround}>
            <Grid item container sx={{maxWidth:"1200px"}}>
                <Navbar/>
            </Grid>
        </Grid>
        <Grid container xs={12} sm item justifyContent={'center'} bgcolor={contentBackGround}>
            <Grid item container sx={{maxWidth:"1200px", minHeight:"200px"}}>
              <BrowserRouter>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<ContactUs />} />
                  <Route path="products" element={<Products />} />
                  <Route path="privacy" element={<Privacy />} />
                  <Route path="influencer" element={<Influencer />} />
                </Routes>
              </BrowserRouter>
            </Grid>
        </Grid>
        <Grid container xs={12} sm item justifyContent={'center'} bgcolor={footerBackGround}>
            <Grid item container sx={{maxWidth:"1200px"}}>
                <Footer/>
            </Grid>
        </Grid>
      </Grid>
  )
}

export default App