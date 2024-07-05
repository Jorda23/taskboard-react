import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { IoIosSettings } from 'react-icons/io';

export default function CardItem() {
  return (
    <Card sx={{ width: 232, height: 354, borderRadius: 2,  boxShadow: '0px 3px 6px', color: "#e6e6e6" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 24, height: 24 }}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings"  sx={{ width: 50, height: 50 }}>
            <IoIosSettings />
          </IconButton>
        }
        sx={{
          '.css-et1ao3-MuiTypography-root': {
            fontSize: '10px',
            color: 'black',
          },
          '.css-18pr98t-MuiTypography-root': {
            fontSize: '8px',
          },
        }}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        src="https://images.unsplash.com/photo-1718489211836-65a20ad6bd8d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
        
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 2,
            fontSize: '14px'
          }}
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
