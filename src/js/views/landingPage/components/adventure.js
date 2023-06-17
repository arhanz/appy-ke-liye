///////////////////////////////////////////////////////
////////// REACT IMPORTS ////////////
/////////////////////////////////////////////////////
import React from "react";

///////////////////////////////////////////////////////
////////// IMAGES IMPORTS //////////
/////////////////////////////////////////////////////
import MountainIcon from "./images/Adventure and Activity and Booking Trip/MountainIcon.webp";
import BagPackIcon from "./images/Adventure and Activity and Booking Trip/BagPackIcon.webp";
import FireIcon from "./images/Adventure and Activity and Booking Trip/FireIcon.webp";
import PathIcon from "./images/Adventure and Activity and Booking Trip/PathIcon.webp";
import TentIcon from "./images/Adventure and Activity and Booking Trip/TentIcon.webp";
import SearchFileIcon from "./images/Adventure and Activity and Booking Trip/SearchFileIcon.webp";
import BookingTripSectionBg from "./images/Adventure and Activity and Booking Trip/BookingTripSectionBg.webp";

///////////////////////////////////////////////////////
/////////// MUI IMPORTS /////////////////
/////////////////////////////////////////////////////
import { Grid, Button, Box } from "@material-ui/core";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Adventure() {
  return (
    <>
      <Box
        mx="auto"
        my={5}
        justifyContent="center"
        alignContent="center"
        textAlign="center"
      >
        <Container maxWidth="lg">
          <Typography variant="body2" className="zokiTextBlack">
            {" "}
            ―――Travel By Activity{" "}
          </Typography>{" "}
          <Box mt={1} mb={3}>
            <Typography
              variant="h4"
              className="zokiHeadings zokiTextBlack boldText"
            >
              Adventure & Activity{" "}
            </Typography>{" "}
          </Box>{" "}
          <Grid container spacing={5}>
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <Box
                style={{
                  border: "2px solid #D3D3D3",
                }}
                p={2}
                border={1}
              >
                <img
                  src={MountainIcon}
                  alt="Mountain Icon"
                  className="my-2"
                  width={75}
                  height={43}
                />{" "}
                <Typography
                  variant="body1"
                  color="secondary"
                  className="zokiTextBlack my-1"
                >
                  Adventure{" "}
                </Typography>{" "}
                <Typography variant="body2" color="textSecondary">
                  15 destinations{" "}
                </Typography>{" "}
              </Box>{" "}
            </Grid>{" "}
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <Box
                style={{
                  border: "2px solid #D3D3D3",
                }}
                p={2}
                border={1}
              >
                <img
                  src={BagPackIcon}
                  alt="Bag Pack Icon"
                  className="my-2"
                  width={35}
                  height={52}
                />{" "}
                <Typography
                  variant="body1"
                  color="secondary"
                  className="zokiTextBlack"
                >
                  Trekking{" "}
                </Typography>{" "}
                <Typography variant="body2" color="textSecondary">
                  15 destinations{" "}
                </Typography>{" "}
              </Box>{" "}
            </Grid>{" "}
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <Box
                style={{
                  border: "2px solid #D3D3D3",
                }}
                p={2}
                border={1}
              >
                <img
                  src={FireIcon}
                  alt="Fire Icon"
                  className="my-2"
                  width={38}
                  height={50}
                />{" "}
                <Typography
                  variant="body1"
                  color="secondary"
                  className="zokiTextBlack"
                >
                  Adventure{" "}
                </Typography>{" "}
                <Typography variant="body2" color="textSecondary">
                  15 destinations{" "}
                </Typography>{" "}
              </Box>{" "}
            </Grid>{" "}
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <Box
                style={{
                  border: "2px solid #D3D3D3",
                }}
                p={2}
                border={1}
              >
                <img
                  src={PathIcon}
                  alt="Path Icon"
                  className="my-2"
                  width={45}
                  height={50}
                />{" "}
                <Typography
                  variant="body1"
                  color="secondary"
                  className="zokiTextBlack"
                >
                  Off Road{" "}
                </Typography>{" "}
                <Typography variant="body2" color="textSecondary">
                  15 destinations{" "}
                </Typography>{" "}
              </Box>{" "}
            </Grid>{" "}
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <Box
                style={{
                  border: "2px solid #D3D3D3",
                }}
                p={2}
                border={1}
              >
                <img
                  src={TentIcon}
                  alt="Tent Icon"
                  className="my-2"
                  width={52}
                  height={49}
                />{" "}
                <Typography
                  variant="body1"
                  color="secondary"
                  className="zokiTextBlack"
                >
                  Camping{" "}
                </Typography>{" "}
                <Typography variant="body2" color="textSecondary">
                  15 destinations{" "}
                </Typography>{" "}
              </Box>{" "}
            </Grid>{" "}
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <Box
                style={{
                  border: "2px solid #D3D3D3",
                }}
                p={2}
                border={1}
              >
                <img
                  src={SearchFileIcon}
                  alt="Search File Icon"
                  className="my-2"
                  width={43}
                  height={47}
                />{" "}
                <Typography
                  variant="body1"
                  color="secondary"
                  className="zokiTextBlack"
                >
                  Exploring{" "}
                </Typography>{" "}
                <Typography variant="body2" color="textSecondary">
                  15 destinations{" "}
                </Typography>{" "}
              </Box>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Container>{" "}
      </Box>{" "}
      <Box
        className="text-white mb-5 position-relative"
        style={{
          backgroundImage: `url(${BookingTripSectionBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          alignContent="center"
          justifyContent="center"
          textAlign="center"
          style={{
            zIndex: 2,
            color: "white",
          }}
          pt={5}
        >
          <Container maxWidth="lg">
            <Box mt={3}>
              <Typography variant="h4" className="SingleUniqueTextAtAdventures">
                love where you 're going{" "}
              </Typography>{" "}
            </Box>{" "}
            <Typography variant="h3" className="zokiHeadings">
              Travel Is A World Leading <br /> Online Tour Booking Platform{" "}
            </Typography>{" "}
          </Container>{" "}
        </Box>{" "}
        <Box
          alignContent="center"
          justifyContent="center"
          textAlign="center"
          pb={4}
        >
          <Button
            variant="contained"
            className="runded-pill w-40 boldText mt-3 capitalizedText"
            style={{
              background: "#18181b",
              color: "#d9ca77",
              borderRadius: "10px",
            }}
          >
            Book Your Trip Now{" "}
          </Button>{" "}
        </Box>{" "}
      </Box>{" "}
    </>
  );
}

export default Adventure;
