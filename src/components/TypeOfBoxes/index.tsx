import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const boxTypes = ["AAAA", "BBB", "CCC"];

interface Props {
  title: string;
  color?: string;
}

export default (props: Props) => {
  return (
    <Box sx={{ backgroundColor: "yellowgreen" }} borderRadius={5} mt="2rem">
      <Box mb="1rem">
        <Paper elevation={3}>
          <Typography display="flex" justifyContent={"center"}>
            {props.title}
          </Typography>
        </Paper>
      </Box>

      <List>
        {boxTypes.map((eachType) => (
          <ListItem key={eachType}>
            <ListItemText
              primary={eachType}
              // secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
