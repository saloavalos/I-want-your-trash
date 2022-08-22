import { Button, Container, Grid } from "@mui/material";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ChairIcon from "@mui/icons-material/AccessibleForwardRounded";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container sx={{ backgroundColor: "red", borderRadius: 5, p: "10px 20px" }}>
      <div>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <hr />
      <Button variant="text">Text</Button>
      <Button variant="contained" startIcon={<ChairIcon />}>
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Grid spacing={1}>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
      </Grid>
    </Container>
  );
}

export default App;
