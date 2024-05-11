import React from 'react'
import { Grid, createTheme, Box, MenuList, MenuItem, Link} from '@mui/material'

function Navbar() {

    const defaultTheme = createTheme();
    const fontColor = "#555";

  return (
    <Grid container direction={"row"} alignItems={'center'} padding={1}>
        <Grid item xs={12} sm={1} sx={{alignItems:{xs:"center"}, justifyContent:{xs:"center", sm:"flex-start"}}} container>
            <Link href="/">
                <Box component="img" width={75} src="../src/assets/images/logo.png"/>
            </Link> 
        </Grid>
        <Grid item padding={1} xs={12} sm>
            <Grid container spacing={1} item direction={'row'} padding={1} sx={{justifyContent:{xs:"center", sm:"flex-start"}}}>
                <Grid item>
                    <Link color={fontColor} underline='hover' href="/">ANASAYFA</Link>
                </Grid>
                <Grid item>
                    <Link color={fontColor} underline='hover' href="/products">ÜRÜNLER</Link>
                </Grid>        
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Navbar