// ImageSearchGallery.tsx
import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
  Box,
} from '@mui/material';
import { usePexels } from '../../hook/usePexels';
import { PexelsPhoto } from '../../hook/usePexels/interface/pixel.interface.js';

const ImageSearchGallery: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, isError } = usePexels(searchQuery);
  const [selectedImage, setSelectedImage] = useState<PexelsPhoto | null>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('query') as string;
    setSearchQuery(query);
  };

  const handleImageSelect = (photo: PexelsPhoto) => {
    setSelectedImage(photo);
  };

  console.log("data",data);

  return (
    <Box sx={{ padding: 2 }}>
      <form onSubmit={handleSearch}>
        <TextField
          name="query"
          label="Search for images..."
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>

      {isLoading && (
        <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />
      )}
      {isError && <Typography color="error">Error loading images</Typography>}
      {data && (
        <Box
          sx={{
            width: "100%",
            marginTop: 2,
            maxHeight: '30vh',
            overflowY: 'auto',
            paddingRight: 2,
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': { width: '8px' },
            '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' },
            '&::-webkit-scrollbar-thumb': { backgroundColor: '#888' },
            '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#555' },
          }}
        >
          <Grid container spacing={2}>
            {data?.Photos?.map((photo: PexelsPhoto) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={photo.Id}>
                <Card>
                  <CardActionArea onClick={() => handleImageSelect(photo)}>
                    <CardMedia
                      component="img"
                      height="80"
                      image={photo.Src.Medium}
                      alt={photo.Alt}
                      sx={{ objectFit: 'cover' }}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {selectedImage && (
        <div>
          <Typography variant="h5" component="div" sx={{ marginTop: 4 }}>
            Selected Image
          </Typography>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={selectedImage.Src.Large}
              alt={selectedImage.Alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {selectedImage.Photographer}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {selectedImage.Alt}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Box>
  );
};

export default ImageSearchGallery;
