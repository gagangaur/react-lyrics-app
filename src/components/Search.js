import React, { Fragment, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// const SearchButton = styled(Button)`
//   background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
//   border-radius: 3px;
//   font-weight: 600;
//   border: 0;
//   color: white;
//   height: 4em;
//   padding: 0.7em 3em;
//   box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
//   text-decoration: None;
//   &:active {
//     transform: scale(0.95);
//   }
// `;

// const SearchTextField = styled(TextField)`
//   width: 50%;
//   padding-right: 0.5rem;
//   text-decoration: None;
//   margin-left: 4em;
//   &:active {
//     transform: scale(0.99);
//   }
// `;
// export default function Search() {
//   const [searchInput, handleSearchInput] = useState("");
//   const handleChange = e => {
//     handleSearchInput(e.target.value);
//   };
//   return (
//     <Fragment>
//       <h1>HELLO WORLD</h1>
//       <Grid container style={{ marginTop: "3em" }}>
//         <SearchTextField
//           id="outlined-basic"
//           variant="outlined"
//           value={searchInput}
//           onChange={handleChange}
//         />
//         <SearchButton>Search</SearchButton>
//       </Grid>
//     </Fragment>
//   );
// }

// import React from "react";

export default function Search() {
  console.log("inside the search component");
  return (
    <Router>
      <div>
        <h1>HELLO WORLD This is a Search Page</h1>
      </div>
    </Router>
  );
}
