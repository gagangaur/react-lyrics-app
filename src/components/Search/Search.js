import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { tb, td, sCircle, cover, sCover, btn } from "./Search.module.css";

const Div = styled(Container)`
  margin-top: 5em;
  align-content: "center";
  justify-content: "center";
  align-items: "center";
  height: 100vh;
  margin: 0 auto;
`;
const SearchButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  font-weight: 600;
  margin: auto;
  border: 0;
  color: white;
  height: 4em;
  padding: 0.7em 3em;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  text-decoration: None;
  &:active {
    transform: scale(0.95);
  }
`;

const SearchTextField = styled(TextField)`
  /* max-width: 50%; */
  min-width: 50%;
  padding: 1rem;
  margin: 0.5em;
  /* text-decoration: None; */
  float: right;
`;
export default function Search() {
  const [searchInput, handleSearchInput] = useState("");
  const handleChange = e => {
    handleSearchInput(e.target.value);
  };
  const sendLyricsRequest = () => {
    return undefined;
  };
  return (
    <Fragment>
      <Div>
        <Grid container style={{ marginTop: "3em", justifyContent: "center" }}>
          {/* <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            style={{ justifyContent: "center", padding: "1em" }}
          >
            <SearchTextField
              id="outlined-basic"
              variant="outlined"
              value={searchInput}
              onChange={handleChange}
              placeholder="Enter Song"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            style={{ justifyContent: "center", margin: "auto" }}
          >
            <SearchButton>Search</SearchButton>
          </Grid> */}
          <div id={cover}>
            {/* <form method="get" action=""> */}
            <div className={tb}>
              <div className={td}>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={td} id={sCover}>
                <button
                  type="submit"
                  onClick={sendLyricsRequest}
                  className={btn}
                >
                  <div id={sCircle}></div>
                  <span></span>
                </button>
              </div>
            </div>
            {/* </form> */}
          </div>
        </Grid>
      </Div>
    </Fragment>
  );
}
