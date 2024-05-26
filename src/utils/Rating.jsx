import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function TextRating(valoracion) {

  const val = valoracion.valoracion; 

  const roundedValue = val % 1 >= 0.5 ? Math.ceil(val) : Math.floor(val);
  const clampedValue = Math.min(5, Math.max(0.5, roundedValue));

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={clampedValue}
        readOnly
        precision={0.5}  
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{val}</Box>
    </Box>
  );
}