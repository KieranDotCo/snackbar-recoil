import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { RecoilRoot } from "recoil";
import SnackbarWrapper from "./components/SnackbarWrapper/SnackbarWrapper";
import SnackbarForm from "./components/SnackbarForm/SnackbarForm";
import { Divider, Paper } from "@mui/material";

export default function App() {
  return (
    <RecoilRoot>
      <Container maxWidth="md" disableGutters style={{marginTop: '1rem'}}>
        <Paper style={{padding: '1rem',}} elevation={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            Snackbar with Recoil
          </Typography>
          <Divider />
          <br />
          <SnackbarForm />
          <SnackbarWrapper />
        </Paper>
      </Container>
    </RecoilRoot>
  );
}
