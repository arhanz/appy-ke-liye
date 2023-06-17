///////////////////////////////////////////////////////
////////// REACT IMPORTS ////////////
/////////////////////////////////////////////////////
import * as React from "react";
import propTypes from "prop-types";

///////////////////////////////////////////////////////
///// COMPONENTS IMPORTS ////
/////////////////////////////////////////////////////
import FlightForm from "./flightForm";
import HotelForm from "./hotel/hotelForm";
import CarForm from "./carForm";
import CharterForm from "./charterForm";
import FlightHotelForm from "./flightHotelForm";
import { HeroSection } from "../utils/constant";

///////////////////////////////////////////////////////
/////////////// MUI IMPORTS /////////////
/////////////////////////////////////////////////////
import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
import {
  Grid,
  Box,
  Tabs,
  Tab,
  // lime,
  AppBar,
  useTheme,
  Container,
} from "@material-ui/core";
import { lime } from "@material-ui/core/colors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
          }}
        >
          <div> {children} </div>{" "}
        </Box>
      )}{" "}
    </div>
  );
}
TabPanel.propTypes = {
  children: propTypes.node,
  index: propTypes.number.isRequired,
  value: propTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function BookingQuickForm({ setImage }) {
  // Tabs
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box mb={-30} position="relative">
          <Container maxWidth="lg">
            <Box className="bg-black shadow-lg text-yellow-900 text-bold bg-gradient-to-r from-yellow-900 to-amber-700 p-1 Tabs">
              <AppBar
                position="static"
                style={{
                  backgroundColor: "#000",
                }}
                width="50%"
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: lime[50],
                    },
                    indicator: "false", // pass a string value
                  }}
                  textColor="inherit"
                  // variant="fullWidth"
                  label="full width Tabs example"
                >
                  <Tab
                    label="Flights"
                    {...a11yProps(0)}
                    onClick={() => setImage(HeroSection.FLIGHT)}
                  />{" "}
                  <Tab
                    label="Hotels"
                    {...a11yProps(1)}
                    onClick={() => setImage(HeroSection.HOTEL)}
                  />{" "}
                  <Tab
                    label="Flights & Hotels"
                    {...a11yProps(2)}
                    onClick={() => setImage(HeroSection.FLIGHT_HOTEL)}
                  />{" "}
                  <Tab
                    label="Charters"
                    {...a11yProps(3)}
                    onClick={() => setImage(HeroSection.CHARACTER)}
                  />{" "}
                </Tabs>{" "}
              </AppBar>{" "}
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
                style={{
                  backgroundColor: "#000",
                }}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <FlightForm />
                </TabPanel>{" "}
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <HotelForm />
                </TabPanel>{" "}
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <FlightHotelForm />
                </TabPanel>{" "}
                <TabPanel value={value} index={3} dir={theme.direction}>
                  <CharterForm />
                </TabPanel>{" "}
              </SwipeableViews>{" "}
            </Box>{" "}
          </Container>{" "}
        </Box>{" "}
      </Box>{" "}
    </>
  );
}

export default BookingQuickForm;
