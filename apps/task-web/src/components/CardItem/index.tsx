import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoIosSettings } from 'react-icons/io';

interface CardItemProps {
  Id: number;
  Title: string;
  Description: string;
  ImageSrc: string;
  User: {
    Username: string;
  };
}

export default function CardItem({
  Description,
  Id,
  ImageSrc,
  Title,
}: CardItemProps) {
  return (
    <Card
      sx={{
        width: 232,
        height: 354,
        borderRadius: 2,
        boxShadow: '0px 3px 6px',
        color: '#e6e6e6',
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ width: 24, height: 24 }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings" sx={{ width: 50, height: 50 }}>
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
        height="180"
        src={ImageSrc}
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
            WebkitLineClamp: 1,
            fontWeight: 'bold',
            fontSize: '18px',
          }}
        >
          {Title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 2,
            fontSize: '14px',
          }}
        >
          {Description}
        </Typography>
      </CardContent>
    </Card>
  );
}
