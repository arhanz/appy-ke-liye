import React from "react";
import { useState, useEffect } from "react";
import Collapse from "@material-ui/core/Collapse";
import ListFlights from "./components/listAvailableFlightOffers";
import ViewFlight from "./components/viewFlight";
import TopNavBar from "views/landingPage/components/topNavBar";
import MainTopMenu from "views/landingPage/components/mainTopMenu";
import Header from "./components/header";
import Footer from "views/landingPage/components/footer";
import Container from "@mui/material/Container";

function FlightOffers() {
  const [flightRender, setFlightRender] = useState("all");

  return (
    <>
      <Container maxWidth="lg">
        <TopNavBar />
        <hr />
        <MainTopMenu />
      </Container>{" "}
      <Header
        text={flightRender !== "all" ? "Flight Details" : "Search Flights"}
      />{" "}
      {flightRender != "all" ? (
        <Collapse in={flightRender != "all"}>
          <ViewFlight data={flightRender} setFlightRender={setFlightRender} />{" "}
        </Collapse>
      ) : null}{" "}
      <Collapse in={flightRender === "all"}>
        <ListFlights setFlightRender={setFlightRender} />{" "}
      </Collapse>{" "}
      <Footer />
    </>
  );
}
export default FlightOffers;
