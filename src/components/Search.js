import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Div = styled(Container)`
  margin-top: 5em;
  align-content: "center";
  align-items: "center";
  height: 100vh;
`;
const SearchButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  font-weight: 600;
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
  width: 50%;
  padding-right: 0.5rem;
  text-decoration: None;
  margin-left: 4em;
  &:active {
    transform: scale(0.99);
  }
`;
export default function Search() {
  const [searchInput, handleSearchInput] = useState("");
  const handleChange = e => {
    handleSearchInput(e.target.value);
  };
  return (
    <Fragment>
      <Div>
        <Grid container style={{ marginTop: "3em", alignItems: "center" }}>
          <div>
            <SearchTextField
              id="outlined-basic"
              variant="outlined"
              value={searchInput}
              onChange={handleChange}
            />
            <SearchButton>Search</SearchButton>
          </div>
        </Grid>
      </Div>
    </Fragment>
  );
}
