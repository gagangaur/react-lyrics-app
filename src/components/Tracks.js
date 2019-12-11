import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Track from "./Track";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Consumer } from "../components/Context";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
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
  return (
    <Consumer>
      {value => {
        if (value === undefined || value.length === 0) {
          return (
            <div
              className={classes.root}
              style={{ justifyContent: "center", marginTop: "1em" }}
            >
              <CircularProgress />
            </div>
          );
        } else {
          return (
            <Div>
              <div styles={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={3}
                  style={{
                    marginTop: "1.5em",
                    alignItems: "center",
                    left: "50%"
                  }}
                >
                  {value.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </Grid>
              </div>
            </Div>
          );
        }
      }}
    </Consumer>
  );
}
