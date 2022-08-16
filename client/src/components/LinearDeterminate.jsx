import * as React from "react"
import Box from "@mui/material/Box"
import LinearProgress from "@mui/material/LinearProgress"

export default function LinearDeterminate({ distance }) {
  const [progress, setProgress] = React.useState(distance)
  React.useEffect(() => {
    setProgress(distance)
  }, [distance])

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  )
}
