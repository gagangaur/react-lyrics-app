import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Login = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  font-weight: 500;
  border: 0;
  color: white;
  padding: 0.7em 3em;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  text-decoration: None;
  &:active {
    transform: scale(0.98);
  }
`;
const NavLink = styled(Link)`
  position: relative;
  text-decoration: None;
  font-weight: 500;
  padding: 1.5em 1.5em;
  color: black;
  &:hover {
    color: blue;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  &:active {
    transform: scale(0.98);
  }
`;
const Typographyy = styled(Typography)`
  font-size: 2.5em;
  font-weight: 700;
  text-align: left;
  background: linear-gradient(to right, rgb(254, 107, 139), rgb(255, 139, 88));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
`;
const AppBarr = styled(AppBar)`
  background-color: #ffffff;
  box-shadow: None;
`;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: ".5em"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginLeft: "1em",
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <AppBarr position="static">
          <Toolbar>
            <div className={classes.title}>
              <Typographyy variant="h1">Lyrics Finder</Typographyy>
            </div>
            <NavLink
              to="#"
              style={{
                color: "blue"
              }}
            >
              Home
            </NavLink>
            <NavLink to="#">About</NavLink>
            <NavLink to="#">Search</NavLink>
            <NavLink to="#">Developer</NavLink>
            <Link to="#" style={{ textDecoration: "None" }}>
              <Login style={{ marginLeft: "1.5em" }}>Login</Login>
            </Link>
          </Toolbar>
        </AppBarr>
      </div>
      <div></div>
    </Router>
  );
}
