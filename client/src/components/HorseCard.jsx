import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import LinearDeterminate from "./LinearDeterminate"
import img from "../images/horses.jpeg"

function HorseCard({ name, distance }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="240" image={img} alt="horses" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          height at the withers - 155-165 cm;
        </Typography>
        <Typography variant="body2" color="text.secondary">
          oblique body length - 160-172 cm;
        </Typography>
        <Typography variant="body2" color="text.secondary">
          height in the lower back - 153-163 cm;
        </Typography>
        <Typography variant="body2" color="text.secondary">
          pastern girth - 18.5-20 cm.
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ pt: 2 }}>
          Race
        </Typography>
        <LinearDeterminate distance={distance} />
      </CardContent>
      <CardActions>
        <Button size="small">Bet</Button>
        <Button size="small">Add to the favorite</Button>
      </CardActions>
    </Card>
  )
}

export default HorseCard
