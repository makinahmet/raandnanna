import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button } from '@mui/material'

function ProductCard(props) {
  return (
    <Card sx={{ maxWidth: 250 }}>
        <CardActionArea href={props.location}>
            <CardMedia component="img" image={props.image} width={"100%"}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.cardHeader}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.content}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Button variant='contained' color='warning'>{props.price}</Button>
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default ProductCard;