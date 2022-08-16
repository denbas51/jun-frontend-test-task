import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import HorseCard from "./HorseCard"
import { useSelector } from "react-redux"

function HorseList() {
  const todos = useSelector((state) => state.todos.todos)
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        {todos.map((horse) => (
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
