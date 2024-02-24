import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function CardRender({title , image, desc , id}) {
    const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
          component="img"
          alt="Product Image"
          height="140"
          image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {desc}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={()=>{navigate(`/ShowDetails/${id}`)}}>Show Details</Button>
      </CardActions>
    </Card>
  );
}