import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { Box, Grid } from "@material-ui/core";

function PackageCard({ data, setPackageRender }) {
  return (
    <>
      <Box className="mt-3">
        <Card onClick={() => setPackageRender(data)}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={data.featuredImg}
              alt={data.name}
              className="relative"
            />
            <Box
              position="absolute"
              top={5}
              left={0}
              className="zokiTextColor zokiHeadings zokiBgBlack"
              boxShadow={5}
              style={{
                borderRadius: "2px",
              }}
              px={2}
              py={1}
              width={150}
            >
              {`Only ${data.price} $ !`}{" "}
            </Box>{" "}
            <Box
              position="relative"
              justifyContent="center"
              alignContent="center"
            >
              <CardContent>
                <Box position="absolute" top={-10} width="100%" left={6} mb={5}>
                  <Container maxWidth="lg">
                    <Grid container spacing={1}>
                      <Grid item xs={3} className="zokiBgColor">
                        <Typography
                          variant="inherit"
                          className="zokiTextBlack zokiTextSm ml-2"
                        >
                          <i className="fa-regular fa-clock"> </i>{" "}
                          {` ${data.days}D / ${data.nights}N `}{" "}
                        </Typography>{" "}
                      </Grid>{" "}
                      <Grid item xs={1} className="zokiBgColor">
                        <Typography
                          variant="inherit"
                          className="zokiTextSm zokiTextBlack"
                        >
                          |
                        </Typography>{" "}
                      </Grid>{" "}
                      <Grid item xs={3} className="zokiBgColor">
                        <Typography
                          variant="inherit"
                          className="zokiTextBlack zokiTextSm"
                        >
                          <i className="fa-regular fa-user"> </i>{" "}
                          {` ${data.noOfPersons} Person `}{" "}
                        </Typography>{" "}
                      </Grid>{" "}
                      <Grid item xs={1} className="zokiBgColor">
                        <Typography
                          variant="inherit"
                          className="zokiTextBlack zokiTextSm"
                        >
                          |
                        </Typography>{" "}
                      </Grid>{" "}
                      <Grid item xs={3} className="zokiBgColor">
                        <Typography
                          variant="inherit"
                          className="zokiTextBlack zokiTextSm"
                        >
                          <i className="fa-solid fa-location-dot"> </i>{" "}
                          {` ${data.destination} `}{" "}
                        </Typography>{" "}
                      </Grid>{" "}
                    </Grid>{" "}
                  </Container>{" "}
                </Box>{" "}
                <Box
                  justifyContent="left"
                  alignContent="left"
                  textAlign="left"
                  my={3}
                >
                  <Typography
                    variant="body1"
                    className="zokiHeadings capitalizedText"
                  >
                    {data.name}{" "}
                  </Typography>{" "}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="my-2 capitalizedText"
                  >
                    (25 reviews){" "}
                  </Typography>{" "}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="my-2 capitalizedText"
                  >
                    {data.description}{" "}
                  </Typography>{" "}
                </Box>{" "}
              </CardContent>{" "}
            </Box>{" "}
          </CardActionArea>{" "}
        </Card>{" "}
      </Box>{" "}
    </>
  );
}

export default PackageCard;
