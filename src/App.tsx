import {
  Button,
  Container,
  Divider,
  Grid,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import holdingBox from "./assets/person-holding-box.jpg";
import Navbar from "./components/Navbar";
import styled from "@emotion/styled";
import TypeOfBoxes from "./components/TypeOfBoxes";
import EachProfile from "./components/EachProfile";

const SpecialButton = styled(Button)(({ theme }) => ({
  height: "3rem",
  padding: "2rem 4rem",
  backgroundColor: "purple",
  // borderRadius: theme.shape.borderRadius,
}));

const MyCustomBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
  height: "2rem",
  backgroundColor: "red",
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Grid sx={{ p: "10px 20px" }} bgcolor={"background.default"}>
        <Box mb={2}>
          <Typography variant="h5" mb={1} fontWeight={700}>
            We give another chance to your old boxes
          </Typography>
          <Typography>
            They may just need some more style, so we can sell them.
          </Typography>
        </Box>

        <ImageListItem sx={{ mt: "1rem", mb: "1rem" }}>
          <img src={holdingBox} alt="Boxes image" />
        </ImageListItem>

        <Stack
          flexWrap={"wrap"}
          spacing={3}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <Button>A button</Button>
          <Button variant="contained">Other button</Button>
          <Button variant="outlined">Another button</Button>
        </Stack>
      </Grid>

      <Divider sx={{ m: "1rem 0" }} />
      <Grid
        mt={2}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        p="2rem"
      >
        <Typography variant="h4">
          Lorem ipsum dolor sit amet consectetur.
        </Typography>
        <MyCustomBox mt={"2rem"}>A styled Tag</MyCustomBox>
        <SpecialButton>Caliz</SpecialButton>

        <TypeOfBoxes title="HAVN List" />
        <EachProfile age={22} />
      </Grid>
    </>
  );
}

export default App;
