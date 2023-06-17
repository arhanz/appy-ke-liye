///////////////////////////////////////////////////////////////
////////////   REACT IMPORTS   //////////////
/////////////////////////////////////////////////////////////
import React, { useState } from "react";
import { Link } from "react-router-dom";

///////////////////////////////////////////////////////////////
/////////////  IMAGES IMPORTS   ////////////
/////////////////////////////////////////////////////////////
import FlyWithZOKILogo from "assets/images/Navbar and footer/FlyWithZOKILogo.webp";

///////////////////////////////////////////////////////
/////////// MUI IMPORTS /////////////////
/////////////////////////////////////////////////////
import { Box, Toolbar, ListItem, ListItemText } from "@material-ui/core";
import Button from "@mui/material/Button";

export default function MainTopMenu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/">
          <img
            src={FlyWithZOKILogo}
            style={{
              width: "25%",
            }}
            alt="Fly WIth ZOKI Logo"
          />
        </Link>{" "}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>{" "}
        </button>{" "}
        <div className="collapse navbar-collapse" id="navbarNav">
          <Box ml="auto">
            <ul className="navbar-nav">
              <ListItem>
                <Link to="/" className="zokiTextBlack">
                  Home{" "}
                </Link>{" "}
              </ListItem>{" "}
              <ListItem>
                <Link to="/search-hotels" className="zokiTextBlack">
                  Hotels{" "}
                </Link>{" "}
              </ListItem>{" "}
              <ListItem>
                <Link to="/search-packages" className="zokiTextBlack">
                  Packages{" "}
                </Link>{" "}
              </ListItem>{" "}
              <ListItem>
                <Link to="/search-flights" className="zokiTextBlack">
                  Flights{" "}
                </Link>{" "}
              </ListItem>{" "}
              <ListItem className="nav-item">
                <a href="#zoki-contact" className="zokiTextBlack">
                  Contact{" "}
                </a>{" "}
              </ListItem>{" "}
              <Link to="/login">
                <Button
                  variant="contained"
                  className="zokiBtnColor text-white capitalizedText rounded"
                  fullWidth
                >
                  Login{" "}
                </Button>{" "}
              </Link>{" "}
            </ul>{" "}
          </Box>{" "}
        </div>{" "}
      </nav>{" "}
    </>
  );
}
