///////////////////////////////////////////////////////
////////// REACT IMPORTS ////////////
/////////////////////////////////////////////////////
import React from "react";

///////////////////////////////////////////////////////
/////////// MUI IMPORTS /////////////////
/////////////////////////////////////////////////////
import { Typography, Grid, Box, Container } from "@material-ui/core";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";

///////////////////////////////////////////////////////
////////// IMAGES IMPORTS //////////
/////////////////////////////////////////////////////
import AboutUsImg from "./images/About Us/about us.webp";
import DollarFile from "./images/About Us/dollar-file.webp";

const useStyles = makeStyles((theme) => ({}));

function AboutUs() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        alignContent="center"
        justifyContent="center"
        mt={[80, 80, 55, 20]}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={7} lg={6}>
            <Grid item xs={12} sm={12} md={9} lg={6}>
              <Box position="relative">
                <Box
                  position="absolute"
                  top={27}
                  left={20}
                  width="80%"
                  alignContent="center"
                  style={{
                    backgroundColor: "black",
                    border: "7px solid white",
                    boxShadow: "0px 0px 10px #C0C0C0",
                  }}
                  px={3}
                  py={1}
                >
                  <Typography
                    variant="h4"
                    className="zokiHeadings boldText zokiTextColor"
                  >
                    Traveler 's Best Choice{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Box>{" "}
            </Grid>{" "}
            <img src={AboutUsImg} alt="About Us" width="500" height="457" />
          </Grid>{" "}
          <Grid item xs={12} sm={12} md={5} lg={6}>
            <Typography variant="body1" className="zokiTextBlack">
              {" "}
              ――――INTRODUCTION ABOUT US{" "}
            </Typography>{" "}
            <Typography variant="h3" className="zokiHeadings boldText">
              <span className="zokiTextColor"> Hello. </span>
              Our Agency Has Been Present Best In The Market{" "}
            </Typography>{" "}
            <Box pr={[1, 1, 1, 15]} my={1}>
              <Typography variant="body1" className="zokiTextBlack">
                Welcome to Fly with Zoki.Keeping housing as smooth and stress -
                free as possible.whether You 're planning a romantic getaway, a
                family vacation, or just a plan.Business travel, we offer a wide
                selection of properties to suit you.{" "}
              </Typography>{" "}
            </Box>{" "}
            <Grid container>
              <Grid item xs={3} sm={3} md={2}>
                <img
                  src={DollarFile}
                  alt="Dollar File Icon"
                  width=""
                  height=""
                />
              </Grid>{" "}
              <Grid item xs={9} sm={9} md={10}>
                <Box pl={[3, 3, 6, 3]} py={1}>
                  <Typography
                    variant="body1"
                    className="zokiTextBlack boldText"
                  >
                    Best Price Guaranted{" "}
                  </Typography>{" "}
                  <Typography variant="body2" className="zokiTextBlack">
                    Requirements and budget.From luxury resorts to budget
                    friendly ones Hotel, bus.Our user - friendly platform allows
                    you to search and book your bookings quickly and
                    efficiently.{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Grid>{" "}
            </Grid>{" "}
            <Box display="flex" justifyContent="flex-start" mt={[1, 1, 1, 3]}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                  width: "30%",
                }}
                className="rounded-pill capitalizedText zokiTextColor"
              >
                Read More{" "}
              </Button>{" "}
            </Box>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Box>{" "}
    </Container>
  );
}

export default AboutUs;
