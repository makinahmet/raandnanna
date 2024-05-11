import React from 'react'
import {Grid, Typography} from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactUs() {

  const fontColor = "#222";

  return (
    <Grid color={fontColor}>
      <br />
      <Grid container direction={"row"} spacing={1} alignItems={"center"}>
        <Grid item>
          <LocationOnIcon/>
        </Grid>
        <Grid item>
          Konuksever Mahallesi 792.sokak no:16/7, Muratpaşa/ANTALYA
        </Grid>
      </Grid>
      <br />
      <Grid container direction={"row"} spacing={1} alignItems={"center"}>
        <Grid item>
          <LocalPhoneIcon/>
        </Grid>
        <Grid item>
          0554 889 90 66
        </Grid>
      </Grid>
      <br />
      <Grid container direction={"row"} spacing={1} alignItems={"center"}>
        <Grid item>
          <EmailIcon/>
        </Grid>
        <Grid item>
          info@raandnanna.com
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContactUs