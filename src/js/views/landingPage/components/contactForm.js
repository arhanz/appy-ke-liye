///////////////////////////////////////////////////////
////////// REACT IMPORTS ////////////
/////////////////////////////////////////////////////
import * as React from "react";

///////////////////////////////////////////////////////
////////// IMAGES IMPORTS //////////
/////////////////////////////////////////////////////
import ContactBg from "./images/contact.webp";

///////////////////////////////////////////////////////
/////////// MUI IMPORTS /////////////////
/////////////////////////////////////////////////////
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {
  Box,
  InputLabel,
  Select,
  MenuItem,
  Container,
  FormControl,
} from "@material-ui/core";

function ContactForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box
        id="zoki-contact"
        style={{
          backgroundImage: `url(${ContactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        my={5}
      >
        <Container maxWidth="lg" className="zokiTextBlack">
          <Box
            style={{
              color: "#344767",
            }}
          >
            <Grid
              container
              spacing={2}
              columns={{
                xs: 4,
                sm: 8,
                md: 16,
              }}
            >
              <Grid item xs={4} sm={8} md={8}>
                <Box className="shadow-lg rounded p-3 text-center">
                  <Typography variant="h5" className="zokiHeadings">
                    We & apos; d Love To{" "}
                    <span className="zokiTextColor"> Help </span>{" "}
                  </Typography>{" "}
                  <Typography variant="body2" className="text-center mx-5 my-2">
                    Let us help you find the right internet marketing
                    solution.Let us help you find the right internet marketing
                    solution.{" "}
                  </Typography>{" "}
                  <Grid
                    container
                    spacing={2}
                    columns={{
                      xs: 4,
                      sm: 8,
                      md: 16,
                    }}
                  >
                    <Grid item xs={4} sm={8} md={8}>
                      <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                      />
                    </Grid>{" "}
                    <Grid item xs={4} sm={8} md={8}>
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                      />
                    </Grid>{" "}
                  </Grid>{" "}
                  <Grid
                    container
                    spacing={2}
                    columns={{
                      xs: 4,
                      sm: 8,
                      md: 16,
                    }}
                  >
                    <Grid item xs={4} sm={8} md={8}>
                      <TextField
                        id="outlined-basic"
                        label="Mobile Number"
                        variant="outlined"
                      />
                    </Grid>{" "}
                    <Grid item xs={4} sm={8} md={8}>
                      <TextField
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                      />
                    </Grid>{" "}
                  </Grid>{" "}
                  <Box my={3}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select Your Booking Type{" "}
                      </InputLabel>{" "}
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em> None </em>{" "}
                        </MenuItem>{" "}
                        <MenuItem value={10}> Flight </MenuItem>{" "}
                        <MenuItem value={20}> Hotel </MenuItem>{" "}
                        <MenuItem value={30}> Charter </MenuItem>{" "}
                      </Select>{" "}
                    </FormControl>{" "}
                  </Box>{" "}
                  <TextField
                    id="outlined-multiline-static"
                    label="Let Us Know About You"
                    multiline
                    rows={4}
                    fullWidth
                    defaultValue="Hi! I'm..."
                  />
                  <Button
                    variant="contained"
                    className="rounded-pill my-3 capitalizedText zokiBgBlack"
                    fullWidth
                    type="submit"
                  >
                    Submit{" "}
                  </Button>{" "}
                </Box>{" "}
              </Grid>{" "}
              <Grid item xs={4} sm={8} md={8}>
                <Box className="py-5">
                  <Typography variant="h3" className="zokiHeadings">
                    Experience The World Like Never Before{" "}
                  </Typography>{" "}
                  <Typography variant="body2" className="text-gray-500 my-3">
                    At our online booking site, we understand the importance of
                    traveling and exploring new places.That 's why we strive to
                    provide you with the most convenient and efficient way to
                    plan and book your next trip.From finding the best deals on
                    flights and hotels to providing you with a wide range of
                    travel options, we 've got you covered. Our user-friendly
                    website and mobile app make it easy for you to book your
                    next vacation, business trip, or weekend getaway.Our
                    dedicated customer service team is also available 24 / 7 to
                    assist you with any questions or concerns you may have.So,
                    whether you 're planning a solo adventure, a romantic
                    getaway, or a family vacation, we 're here to help you
                    experience the world like never before.Let us take care of
                    the planning, so you can focus on making memories that will
                    last a lifetime.Contact us today and start planning your
                    next adventure!
                  </Typography>{" "}
                  <Button
                    variant="contained"
                    style={{
                      background: "#18181b",
                    }}
                    className="text-white rounded-pill px-5 m-2"
                  >
                    Contact Us{" "}
                  </Button>{" "}
                  <Button
                    variant="contained"
                    style={{
                      background: "#998b33",
                    }}
                    className="text-white rounded-pill px-3 m-2"
                  >
                    Talk To A Specialist{" "}
                  </Button>{" "}
                </Box>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Box>{" "}
        </Container>{" "}
      </Box>{" "}
    </>
  );
}

export default ContactForm;
