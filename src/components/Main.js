import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import SVG from "../main-svg.svg";
import styled from "styled-components";

const H1 = styled("h1")`
  font-family: "Playfair Display SC", serif;
  font-size: 3.5em;
  padding: 1em;
`;
export default function Main() {
  return (
    <Fragment>
      {/* <div style={{ border: "2px black" }}>
        <h1>Main section</h1>
      </div> */}
      <div style={{ flexGrow: 1 }}>
        <Grid container style={{ marginTop: "3em" }}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div>
              <H1>Get Your Lyrics Here</H1>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src={SVG} style={{ width: "100%", height: "auto" }} />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
