///////////////////////////////////////////////////////
////////// REACT IMPORTS ////////////
/////////////////////////////////////////////////////
import * as React from "react";

///////////////////////////////////////////////////////
/////////// MUI IMPORTS /////////////////
/////////////////////////////////////////////////////
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function PerfectTrip({ data }) {
  const theme = useTheme();

  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Box className="mt-3">
          <Card
            sx={{
              display: "flex",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: 150,
                height: 150,
              }}
              image={data.featuredImg}
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              width="100%"
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                }}
                style={{
                  backgroundColor: "#F4F4F4",
                }}
              >
                <Box ml={2}>
                  <Typography
                    variant="h6"
                    className="zokiTextBlack capitalizedText zokiHeadings"
                  >
                    {data.name}{" "}
                  </Typography>{" "}
                </Box>{" "}
                <Box ml={4}>
                  <Typography variant="body1" className="capitalizedText">
                    <span className="zokiTextColor me-1">
                      <i className="fas fa-plane-departure"> </i>{" "}
                    </span>{" "}
                    <span className="zokiTextBlack"> Flights </span>{" "}
                  </Typography>{" "}
                  <Typography
                    variant="body1"
                    className="zokiTextBlack capitalizedText"
                  >
                    <span className="zokiTextColor me-1">
                      <i className="fas fa-hotel"> </i>{" "}
                    </span>{" "}
                    <span className="zokiTextBlack"> Hotels </span>{" "}
                  </Typography>{" "}
                  <Typography
                    variant="body1"
                    className="zokiTextBlack capitalizedText"
                  >
                    <span className="zokiTextColor me-1">
                      <i className="fas fa-plane"> </i>{" "}
                    </span>{" "}
                    <span className="zokiTextBlack"> Charters </span>{" "}
                  </Typography>{" "}
                </Box>{" "}
              </CardContent>{" "}
            </Box>{" "}
          </Card>{" "}
        </Box>{" "}
      </Grid>{" "}
    </>
  );
}
