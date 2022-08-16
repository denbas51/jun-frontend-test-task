import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import HorseCard from "./HorseCard"

function HorseList({ data }) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        {data.map((horse) => (
          <Grid key={horse.name} item xs={12} sm={6} md={4} lg={3}>
            <HorseCard
              name={horse.name}
              distance={Math.round(horse.distance / 10)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default HorseList
