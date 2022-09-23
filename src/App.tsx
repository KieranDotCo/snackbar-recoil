import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { RecoilRoot } from "recoil";
import SnackbarWrapper from "./components/SnackbarWrapper/SnackbarWrapper";
import SnackbarForm from "./components/SnackbarForm/SnackbarForm";
import { Divider } from "@mui/material";

export default function App() {
  return (
    <RecoilRoot>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Snackbar with Recoil
          </Typography>
          <Divider />
          <br />
          <SnackbarForm />
          <SnackbarWrapper />
        </Box>
      </Container>
    </RecoilRoot>
  );
}
