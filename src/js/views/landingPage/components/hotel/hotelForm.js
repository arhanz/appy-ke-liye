import { useState, useEffect } from "react";
import Collapse from "@material-ui/core/Collapse";
import ListHotels from "./components/listAvailableHotelOffers";
import ViewHotel from "./components/viewHotel";
import TopNavBar from "views/landingPage/components/topNavBar";
import MainTopMenu from "views/landingPage/components/mainTopMenu";
import Header from "./components/header";
import Footer from "views/landingPage/components/footer";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@material-ui/core";

function HotelOffers() {
  const [hotelRender, setHotelRender] = useState("all");

  return (
    <>
      <Box justifyContent="center" alignContent="center" textAlign="center">
        <Typography variant="h5" className="text-white zokiHeadings">
          {" "}
          {hotelRender !== "all" ? "Hotel Details" : "Search Hotels"}{" "}
        </Typography>{" "}
      </Box>{" "}
      {hotelRender != "all" ? (
        <Collapse in={hotelRender != "all"}>
          <ViewHotel data={hotelRender} setHotelRender={setHotelRender} />{" "}
        </Collapse>
      ) : null}{" "}
      <Collapse in={hotelRender === "all"}>
        <ListHotels setHotelRender={setHotelRender} />{" "}
      </Collapse>{" "}
    </>
  );
}
export default HotelOffers;
