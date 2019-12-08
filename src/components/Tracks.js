import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Track from "./Track";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Div = styled(Container)`
  margin-top: 5em;
  align-content: "center";
  align-items: "center";
`;

export default function Tracks() {
  const classes = useStyles();
  const Trackss = [];
  for (let i = 0; i < 10; i++) {
    Trackss.push(
      <Grid
        key={i}
        item
        xs={12}
        sm={12}
        lg={6}
        md={6}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "2em"
        }}
      >
        <Track />
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Div>
        <div styles={{ flexGrow: 1 }}>
          <Grid container spacing={3} style={{ marginTop: "1.5em" }}>
            {Trackss}
          </Grid>
        </div>
      </Div>
    </React.Fragment>
  );
}
