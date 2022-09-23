import {
  AlertColor,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { snackbarState } from "../../recoil/atoms/snackbar/SnackbarAtom";

const SnackbarForm: React.FC = () => {
  const [snackbar, setSnackbar] = useRecoilState(snackbarState);
  const [horizontal, setHorizontal] = React.useState<
    "center" | "left" | "right"
  >("center");
  const [vertical, setVertical] = React.useState<"bottom" | "top">("bottom");
  const [severity, setSeverity] = React.useState<AlertColor>("success");
  const [variant, setVariant] = React.useState<
    "filled" | "standard" | "outlined"
  >("filled");

  const onClick = () => {
    setSnackbar({
      open: true,
      message: "Hello World",
      severity,
      vertical,
      horizontal,
      variant,
    });
  };

  const onClose = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  return (
    <>
      <FormControl>
        <FormLabel id="horizontal">Horizontal</FormLabel>
        <RadioGroup
          aria-labelledby="horizontal"
          value={horizontal}
          name="radio-buttons-group"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setHorizontal((event.target as HTMLInputElement).value as any);
          }}
          row
        >
          <FormControlLabel value="left" control={<Radio />} label="Left" />
          <FormControlLabel value="center" control={<Radio />} label="Center" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel id="vertical">Vertical</FormLabel>
        <RadioGroup
          aria-labelledby="vertical"
          value={vertical}
          name="radio-buttons-group"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setVertical((event.target as HTMLInputElement).value as any);
          }}
          row
        >
          <FormControlLabel value="top" control={<Radio />} label="Top" />
          <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel id="severity">Severity</FormLabel>
        <RadioGroup
          aria-labelledby="severity"
          value={severity}
          name="radio-buttons-group"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSeverity((event.target as HTMLInputElement).value as any);
          }}
          row
        >
          <FormControlLabel
            value="success"
            control={<Radio />}
            label="Success"
          />
          <FormControlLabel value="error" control={<Radio />} label="Error" />
          <FormControlLabel value="info" control={<Radio />} label="Info" />
          <FormControlLabel
            value="warning"
            control={<Radio />}
            label="Warning"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <FormControl>
        <FormLabel id="variant">Variant</FormLabel>
        <RadioGroup
          aria-labelledby="variant"
          value={variant}
          name="radio-buttons-group"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setVariant((event.target as HTMLInputElement).value as any);
          }}
          row
        >
          <FormControlLabel value="filled" control={<Radio />} label="Filled" />
          <FormControlLabel
            value="outlined"
            control={<Radio />}
            label="Outlined"
          />
          <FormControlLabel
            value="standard"
            control={<Radio />}
            label="Standard"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <Divider />
      <br />
      <Button fullWidth variant="outlined" onClick={onClick}>
        Show Snackbar
      </Button>
      <br />
      <br />
      <Button fullWidth variant="outlined" color="secondary" onClick={onClose}>
        Close Snackbar
      </Button>
    </>
  );
};

export default SnackbarForm;
