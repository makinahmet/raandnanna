import React from 'react'
import { Grid, createTheme, Box, Link, MenuItem, MenuList } from '@mui/material';
import Divider from '@mui/material/Divider';

function Footer() {

    const defaultTheme = createTheme();
    const fontColor = "#555";
    const backGroundColor = defaultTheme.palette.grey[200];

  return (
    <>
        <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'} minHeight={100} bgcolor={backGroundColor} color={fontColor}>
            <Grid item xs={12} sm>
                <Grid item container justifyContent={'center'} alignItems={'center'} padding={3}>
                    <Box component="img" width={50} src="../src/assets/images/logo.png"/>
                </Grid>
            </Grid>
            <Grid item xs={12} sm container alignItems={"center"} justifyContent={'center'}>
            <MenuList>
                    <MenuItem>
                        <Link color={fontColor} underline="hover" href="/">
                            Anasayfa
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link color={fontColor} underline="hover" href="/products">
                            Ürünler
                        </Link>
                    </MenuItem>
                </MenuList>
            </Grid>
            <Grid item xs={12} sm container alignItems={"center"} justifyContent={'center'}>
                <MenuList>
                    <MenuItem>
                        <Link color={fontColor} underline="hover" href="/about">
                            Hakkımızda
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link color={fontColor} underline="hover" href="/contact">
                            İletişim
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link color={fontColor} underline="hover" href="/privacy">
                            KVKK
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link color={fontColor} underline="hover" href="/influencer">
                            İnfluencer iş ortaklığı
                        </Link>
                    </MenuItem>
                </MenuList>
            </Grid>
        </Grid>
    
        <Grid item xs bgcolor={fontColor} height={"1px"}>&nbsp;</Grid>

        <Grid item container justifyContent={"center"} padding={1} bgcolor={backGroundColor} color={fontColor}>
            © Copyright 2024 Tüm hakları RA&NANNA tafından saklıdır. Görseller telif hakkına tabidir.
        </Grid>
    </>
  )
}

export default Footer