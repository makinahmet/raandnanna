import React from 'react'
import {Grid, Typography} from '@mui/material'

function Influencer() {

  const fontColor="#222";
  const brand = "RA&NANNA";
  
  return (
    <Grid color={fontColor}>
      <br />
      <Typography variant='h6'>
        Sevgili {brand} x Influncer
      </Typography>
      <br />
      <Typography>
        {brand} markasının bir parçası olmak ve kazan kazan sistemiyle gelirini artırmak için affiliate programımıza katıl!
      </Typography>
      <br />
      <Typography>
        İş Birliği programımıza {brand} ürünlerini deneyimledikten sonra kendi sosyal medya kitlenle paylaşarak katılabilirsin.
      </Typography>
      <br />
      <Typography>
        Takipçilerinin beğeneceği ürünleri seçebilir ve bunları blog yazılarında, sosyal medya hesaplarında veya videolarında tanıtabilirsin.
      </Typography>
      <br />
      <Typography>
        İş birliği projemiz hakkında detaylı bilgi için bize whatsaptan yazmanı bekliyoruz. (0554 889 90 66)
      </Typography>
      <br />
      <Typography>
        Seninle tanışmak için çok heyecanlıyız!
      </Typography>
      <br />
    </Grid>
  )
}

export default Influencer

