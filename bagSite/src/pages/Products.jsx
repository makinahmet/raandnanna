import React from 'react'
import {Grid} from '@mui/material'
import ProductCard from '../components/ProductCard'

function Products() {

  const slingBagDesc = "1.sınıf kanvas kumaş. Ergonomik tasarım.";
  const slingBagImage = "../src/assets/images/productImages/slingBag/1.png";
  const slingBagHeader = "CrossBody Bag";
  const slingBagPrice = "450 TL";

  const midToteDesc = "1.sınıf kanvas kumaş. Şık tasarım. El tutamacı ve omuz kordonu.";
  const midBagImage = "../src/assets/images/productImages/midTote/1.png";
  const midBagHeader = "Mid-Tote";
  const midBagPrice = "350 TL";

  const bigToteDesc = "1.sınıf kanvas kumaş. Geniş aile boyu. El tutamacı ve omuz kordonu.";
  const bigBagImage = "../src/assets/images/productImages/bigTote/1.png";
  const bigBagHeader = "Big-Tote";
  const bigBagPrice = "400 TL";

  return (
    <Grid container direction={"row"} spacing={2} padding={2}>
      <Grid item >
        <ProductCard location="#" image={slingBagImage} cardHeader={slingBagHeader} content={slingBagDesc} price={slingBagPrice}/>
      </Grid>
      <Grid item >
        <ProductCard location="#" image={midBagImage} cardHeader={midBagHeader} content={midToteDesc} price={midBagPrice}/>
      </Grid>
      <Grid item >
        <ProductCard location="#" image={bigBagImage} cardHeader={bigBagHeader} content={bigToteDesc} price={bigBagPrice}/>
      </Grid>
    </Grid>
  )
}

export default Products