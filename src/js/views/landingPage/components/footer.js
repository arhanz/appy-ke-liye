///////////////////////////////////////////////////////
////////// REACT IMPORTS ////////////
/////////////////////////////////////////////////////
import React from "react";

///////////////////////////////////////////////////////
////////// IMAGES IMPORTS //////////
/////////////////////////////////////////////////////
import FlyWithZOKILogo from "assets/images/Navbar and footer/FlyWithZOKILogo.webp";

///////////////////////////////////////////////////////
/////////// MUI IMPORTS /////////////////
/////////////////////////////////////////////////////
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@material-ui/core";
import Container from "@mui/material/Container";

function Footer() {
  return (
    <>
      <Box className="text-white mt-5 pt-5 zokiBgBlack">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <img
                src={FlyWithZOKILogo}
                width={150}
                height={150}
                alt="zoki logo"
              />
            </Grid>{" "}
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Typography variant="body1"> Flights </Typography>{" "}
              <Box my={1}>
                <Typography variant="body1"> Hotels </Typography>{" "}
              </Box>{" "}
              <Typography variant="body1"> Packages </Typography>{" "}
            </Grid>{" "}
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Typography variant="body1"> About Zoki </Typography>{" "}
              <Box my={1}>
                <Typography variant="body1"> Our Team </Typography>{" "}
              </Box>{" "}
              <Box my={1}>
                <Typography variant="body1"> Announcements </Typography>{" "}
              </Box>{" "}
              <Typography variant="body1"> Contact Us </Typography>{" "}
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box
                display="flex"
                textAlign="left"
                alignContent="left"
                justifyContent="left"
                my={1}
              >
                <i className="fa fa-plane p-3 mr-3 rounded-circle zokiBgColor zokiTextBlack" />
                <Box mt={2}>
                  <Typography variant="body1" color="initial">
                    We are member of IATA{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Box>{" "}
              <Box
                display="flex"
                textAlign="left"
                alignContent="left"
                justifyContent="left"
                my={1}
              >
                <i className="fa fa-phone-alt p-3 mr-3 rounded-circle zokiBgColor zokiTextBlack" />
                <Box mt={2}>
                  <Typography variant="body1" color="initial">
                    02081254786{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Box>{" "}
              <Box
                display="flex"
                textAlign="left"
                alignContent="left"
                justifyContent="left"
                my={1}
              >
                <i className="fa fa-envelope p-3 mr-3 rounded-circle zokiBgColor zokiTextBlack" />
                <Box mt={2}>
                  <Typography variant="body1" color="initial">
                    hello @flywithzoki.com{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Box>{" "}
            </Grid>{" "}
          </Grid>{" "}
          <hr />
          <Grid
            container
            spacing={2}
            columns={{
              xs: 8,
              sm: 12,
              md: 16,
            }}
            className="text-white"
          >
            <Grid item xs={16} sm={6} md={8}>
              <Box textAlign="left">
                <Typography variant="body1">
                  {" "}
                  {`Copyright © Zoki ${new Date().getFullYear()}.`}{" "}
                </Typography>{" "}
              </Box>{" "}
            </Grid>{" "}
            <Grid item xs={16} sm={6} md={8}>
              <Box textAlign="right">
                <Typography variant="body1">
                  Terms & Conditions | Privacy Policy | Cookies Policy{" "}
                </Typography>{" "}
              </Box>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Container>{" "}
      </Box>{" "}
    </>
  );
}

export default Footer;
