import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";

export default function RatingWithValoration({
  valoracion,
  cantidadOpiniones,
  tamanio,
}) {
  const val = valoracion;
  const roundedValue = val % 1 >= 0.5 ? Math.ceil(val) : Math.floor(val);
  const clampedValue = Math.min(5, Math.max(0.5, roundedValue));

  return (
    <Box
      sx={{
        width: tamanio ? "200px" : "400px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Rating
        name="text-feedback"
        value={clampedValue}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Typography
        variant="body2"
        style={{ marginLeft: "5px", marginTop: "2.1px" }}
      >
        {val}({cantidadOpiniones} de opiniones)
      </Typography>
    </Box>
  );
}
