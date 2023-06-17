///////////////////////////////////////////////////////
////////// REACT IMPORTS ////////////
/////////////////////////////////////////////////////
import React from "react";

///////////////////////////////////////////////////////
/////////// MUI IMPORTS /////////////////
/////////////////////////////////////////////////////
import { Box, Typography, Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

///////////////////////////////////////////////////////
//////// IMAGES IMPORTS ////////////
/////////////////////////////////////////////////////
import CustomerOne from "./images/NewsLetter and Testimonials/CustomerOne.webp";
import CustomerTwo from "./images/NewsLetter and Testimonials/CustomerTwo.webp";
import CustomerThree from "./images/NewsLetter and Testimonials/CustomerThree.webp";
import CustomerFour from "./images/NewsLetter and Testimonials/CustomerFour.webp";
import CustomerFive from "./images/NewsLetter and Testimonials/CustomerFive.webp";
import CustomerSix from "./images/NewsLetter and Testimonials/CustomerSix.webp";
import Container from "@mui/material/Container";

const useStyles = makeStyles((theme) => ({
  textField: {
    backgroundColor: "rgba(250, 250, 250, 0.4)",
    marginRight: theme.spacing(1),
  },
  card: {
    width: "20%",
    height: "20%",
  },
  image: {
    borderRadius: "100%",
  },
}));

const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testmonials = () => {
  const classes = useStyles();
  return (
    <Box m={0} p={0} position="relative">
      <Container maxWidth="lg" className="text-white">
        {" "}
        {/* News Letter */}{" "}
        <Box
          mt={5}
          className="NewsLetterBg"
          p={3}
          mb={-20}
          position="absolute"
          width="85%"
          ml={[1, 1, 5]}
        >
          <Box my={3}>
            <Typography variant="body1"> ――――TRAVEL BY ACTIVITY </Typography>{" "}
          </Box>{" "}
          <Typography variant="h3" className="zokiHeadings">
            Holiday Special, 25 % Off{" "}
          </Typography>{" "}
          <Typography variant="body1" className="my-3">
            Sign Up now to receive hot special offers and information, about the
            best <br />
            tour, packages updates and much more.{" "}
          </Typography>{" "}
          <Box position="relative">
            <TextField
              className={classes.textField}
              variant="filled"
              label="Search Your Package Now!!"
              fullWidth
            />
            <Box
              position="absolute"
              width={[100, 100, 200, 200]}
              bottom={10}
              right={5}
            >
              <Button
                variant="contained"
                className="capitalizedText zokiBgBlack text-white"
                fullWidth
              >
                Click me{" "}
              </Button>{" "}
            </Box>{" "}
          </Box>{" "}
        </Box>{" "}
      </Container>{" "}
      {/* Testimonials  */}{" "}
      <Box pt={[45, 45, 25, 25]} mt={[1, 1, 5, 5]}>
        <Box className="TestimonialsBg" pt={20}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="text-white"
              >
                <Box mt={5}>
                  <Typography variant="h3" className="zokiHeadings">
                    We & apos; re reviewed the biggest names in the industry:
                  </Typography>{" "}
                  <Typography variant="body1" className="zokiHeadings">
                    {" "}
                    ――――
                  </Typography>{" "}
                </Box>{" "}
                <Box my={1}>
                  <Typography variant="h6">
                    <i className="fa-solid fa-star text-white"> </i>{" "}
                    <i className="fa-solid fa-star text-white"> </i>{" "}
                    <i className="fa-solid fa-star text-white"> </i>{" "}
                    <i className="fa-solid fa-star text-white"> </i>{" "}
                    <i className="fa-solid fa-star text-white"> </i>{" "}
                  </Typography>{" "}
                  <Typography variant="h5" className="zokiHeadings">
                    4.9 / 5.0 as reviewed by 157{" "}
                  </Typography>{" "}
                </Box>{" "}
              </Grid>{" "}
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box id="carouselExampleIndicators" className="carousel slide">
                  <Box
                    justifyContent="center"
                    alignContent="center"
                    textAlign="center"
                    my={[2, 2, 3, 3]}
                  >
                    <Button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <Typography
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></Typography>{" "}
                      <Typography className="visually-hidden">
                        Previous{" "}
                      </Typography>{" "}
                    </Button>{" "}
                    <Button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <Typography
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></Typography>{" "}
                      <Typography className="visually-hidden">
                        {" "}
                        Next{" "}
                      </Typography>{" "}
                    </Button>{" "}
                  </Box>{" "}
                  <Box className="carousel-inner">
                    <Box className="carousel-item active">
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <Box
                            className="bg-white"
                            px={2}
                            py={2}
                            style={{
                              borderRadius: "10px",
                            }}
                          >
                            <Typography variant="body2" color="secondary">
                              I had a great experience using this online booking
                              system.It was easy to navigate and find exactly
                              what I was looking for.I was able to book my trip
                              quickly and efficiently.Highly recommend!
                            </Typography>{" "}
                            <Box width={60} mt={1}>
                              <img
                                src={CustomerOne}
                                alt="Customer one"
                                className={classes.image}
                              />{" "}
                            </Box>{" "}
                            <Box my={2}>
                              <Typography
                                variant="body1"
                                color="secondary"
                                className="capitalizedText zokiHeadings"
                              >
                                Katil Haseena{" "}
                              </Typography>{" "}
                            </Box>{" "}
                          </Box>{" "}
                        </Grid>{" "}
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <Box
                            className="bg-white"
                            px={2}
                            py={2}
                            style={{
                              borderRadius: "10px",
                            }}
                          >
                            <Typography variant="body2" color="secondary">
                              I was really impressed with the customer service I
                              received when I had a question about my
                              booking.The representative I spoke with was very
                              helpful and resolved my issue in no time.Great
                              job!
                            </Typography>{" "}
                            <Box width={60} mt={1}>
                              <img
                                src={CustomerTwo}
                                alt="Customer one"
                                className={classes.image}
                              />{" "}
                            </Box>{" "}
                            <Box my={2}>
                              <Typography
                                variant="body1"
                                color="secondary"
                                className="capitalizedText zokiHeadings"
                              >
                                Katil Haseena{" "}
                              </Typography>{" "}
                            </Box>{" "}
                          </Box>{" "}
                        </Grid>{" "}
                      </Grid>{" "}
                    </Box>{" "}
                    <Box className="carousel-item">
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <Box
                            className="bg-white"
                            px={2}
                            py={2}
                            style={{
                              borderRadius: "10px",
                            }}
                          >
                            <Typography variant="body2" color="secondary">
                              I love the convenience of being able to book my
                              travel arrangements online.This booking system
                              made it easy to compare prices and find the best
                              deals.I 'll definitely be using it again in the
                              future.{" "}
                            </Typography>{" "}
                            <Box width={60} mt={1}>
                              <img
                                src={CustomerThree}
                                alt="Customer one"
                                className={classes.image}
                              />{" "}
                            </Box>{" "}
                            <Box my={2}>
                              <Typography
                                variant="body1"
                                color="secondary"
                                className="capitalizedText zokiHeadings"
                              >
                                Katil Haseena{" "}
                              </Typography>{" "}
                            </Box>{" "}
                          </Box>{" "}
                        </Grid>{" "}
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <Box
                            className="bg-white"
                            px={2}
                            py={2}
                            style={{
                              borderRadius: "10px",
                            }}
                          >
                            <Typography variant="body2" color="secondary">
                              I have been using this online booking system for
                              years and it never disappoints.I can always count
                              on it to have the most affordable prices and the
                              best options for my travel needs.{" "}
                            </Typography>{" "}
                            <Box width={60} mt={1}>
                              <img
                                src={CustomerFour}
                                alt="Customer one"
                                className={classes.image}
                              />{" "}
                            </Box>{" "}
                            <Box my={2}>
                              <Typography
                                variant="body1"
                                color="secondary"
                                className="capitalizedText zokiHeadings"
                              >
                                Katil Haseena{" "}
                              </Typography>{" "}
                            </Box>{" "}
                          </Box>{" "}
                        </Grid>{" "}
                      </Grid>{" "}
                    </Box>{" "}
                    <Box className="carousel-item">
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <Box
                            className="bg-white"
                            px={2}
                            py={2}
                            style={{
                              borderRadius: "10px",
                            }}
                          >
                            <Typography variant="body2" color="secondary">
                              I travel frequently for work and this online
                              booking system has made my life so much easier.It
                              saves me a lot of time and hassle.Thanks for
                              providing such a great service!
                            </Typography>{" "}
                            <Box width={60} mt={1}>
                              <img
                                src={CustomerFive}
                                alt="Customer one"
                                className={classes.image}
                              />{" "}
                            </Box>{" "}
                            <Box my={2}>
                              <Typography
                                variant="body1"
                                color="secondary"
                                className="capitalizedText zokiHeadings"
                              >
                                Katil Haseena{" "}
                              </Typography>{" "}
                            </Box>{" "}
                          </Box>{" "}
                        </Grid>{" "}
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <Box
                            className="bg-white"
                            px={2}
                            py={2}
                            style={{
                              borderRadius: "10px",
                            }}
                          >
                            <Typography variant="body2" color="secondary">
                              I had a great experience with this online booking
                              system.It was very user - friendly and easy to
                              navigate.I was able to find and book my trip in no
                              time.I will definitely be using it again in the
                              future.{" "}
                            </Typography>{" "}
                            <Box width={60} mt={1}>
                              <img
                                src={CustomerSix}
                                alt="Customer one"
                                className={classes.image}
                              />{" "}
                            </Box>{" "}
                            <Box my={2}>
                              <Typography
                                variant="body1"
                                color="secondary"
                                className="capitalizedText zokiHeadings"
                              >
                                Katil Haseena{" "}
                              </Typography>{" "}
                            </Box>{" "}
                          </Box>{" "}
                        </Grid>{" "}
                      </Grid>{" "}
                    </Box>{" "}
                  </Box>{" "}
                </Box>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Container>{" "}
        </Box>{" "}
      </Box>{" "}
    </Box>
  );
};

export default Testmonials;
