import React from 'react'
import { Grid, Typography, Box, createTheme } from '@mui/material'

function Home() {

  const defaultTheme = createTheme();
  const fontColor = "#555";

  return (
    <>
      <Grid xs={12} sm={6} item container alignItems={"center"} color={fontColor}>
          <Grid item>
          <br /><br />
              <Grid item><Typography variant='h3' >Sürdürülebilir</Typography></Grid>
              <Grid item><Typography variant='h3' >Gelecek için<br/> Şık, rahat ve samimi</Typography></Grid>
              <br /><br />
              <Grid item>
                  <Typography variant='body1' >
                  RA&NANNA olarak, sürdürülebilirlik ve tarzın mükemmel uyumunu sunuyoruz. 
                  Bez çantalarımızla, moda ve çevre bilincini bir araya getiriyoruz.
                  </Typography>
                  <br />
                  <Typography variant='body1' >
                  Kaliteli malzemelerden elde edilen ve özgün tasarımlarıyla dikkat çeken bez çantalarımızla,
                  hem tarzınızı yansıtın hem de doğaya katkıda bulunun. <br /><br />
                  Siz de bu benzersiz deneyime ortak olun ve stilinizi sürdürülebilirliğin gücüyle birleştirin.
                  </Typography>
              </Grid>
              <br />
          </Grid>
      </Grid>
      <Grid xs={12} sm={6} item>
          <Box component="img" width={"100%"} src="../src/assets/images/bagHero.png"/>
      </Grid>
    </>
  )
}

export default Home