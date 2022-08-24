import { Container, Typography } from "@mui/material";
import React from "react";

interface IUserData {
  username: string;
  age: number;
  gender: "male" | "female";
}

export default ({ username, age, gender }: IUserData) => {
  return (
    <Container>
      <Typography variant="h6">Profile:</Typography>
      <Typography variant="body1">{username}</Typography>
      <Typography variant="body1">{age}</Typography>
      <Typography variant="body1">{gender}</Typography>
    </Container>
  );
};

// const index: React.FC<IUserData> = ({ username, age, gender }) => {
//   return (
//     <Container>
//       <Typography variant="h6">Profile:</Typography>
//       <Typography variant="body1">{username}</Typography>
//       <Typography variant="body1">{age}</Typography>
//       <Typography variant="body1">{gender}</Typography>
//     </Container>
//   );
// };

// export default index;
