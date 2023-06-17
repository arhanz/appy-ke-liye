///////////////////////////////////////////////////////
////////// REACT IMPORTS ////////////
/////////////////////////////////////////////////////
import React from "react";

///////////////////////////////////////////////////////
/////////// MUI IMPORTS /////////////////
/////////////////////////////////////////////////////
import { Box, Typography } from "@material-ui/core";

///////////////////////////////////////////////////////
////////// IMAGES IMPORTS //////////
/////////////////////////////////////////////////////
import WaveUp from "./images/wave_up.webp";

function MainCaraousal({ children, image }) {
  return (
    <div
      className="text-white"
      style={{
        minHeight: "70vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
        }}
      />
      <Box px={[1, 1, 5, 5]} py={5}>
        <Typography variant="h3" className="zokiHeadings" align="center">
          <span className="zokiTextColor"> Travel </span>{" "}
          <span> Around The World </span>{" "}
        </Typography>{" "}
        <Box p={2}>
          <Typography variant="body2" align="center">
            Fly With Zoki gives you an incredibly easy and stress - free way to
            plan and book your family vacation.The online platform is incredibly
            user - friendly and has a wide range of options for hotels, flights
            and activities.The customer service team is always available to
            answer any questions throughout our process.With the help of Fly
            With Zoki, you will be able to plan an amazing and memorable
            vacation that will be within your budget.try it out!
          </Typography>{" "}
        </Box>{" "}
      </Box>{" "}
      {children}{" "}
      <img
        src={WaveUp}
        alt="wave up"
        style={{
          width: "100%",
        }}
      />{" "}
    </div>
  );
}

export default MainCaraousal;
