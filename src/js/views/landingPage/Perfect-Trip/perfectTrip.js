///////////////////////////////////////////////////////
////////// REACT IMPORTS ////////////
/////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { useHistory, Navigate } from "react-router-dom";

///////////////////////////////////////////////////////
////////// FILES IMPORTS //////////////
/////////////////////////////////////////////////////
import { getAvailablePackages } from "crud";
import PerfectTripCard from "./perfectTripCard";

///////////////////////////////////////////////////////
/////////// MUI IMPORTS /////////////////
/////////////////////////////////////////////////////
import {
  Box,
  Typography,
  Container,
  CircularProgress,
  Grid,
} from "@material-ui/core";

function Packages() {
  const history = useHistory();
  const [listPackages, setListPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = {
      search: {
        query: "",
      },
      sort: "name",
      page: 1,
      pageSize: 100000,
    };
    setLoading(true);
    getAvailablePackages(params)
      .then((res) => {
        setListPackages(res.data.data.travelPackages);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Box
        my={3}
        style={{
          backgroundColor: "#E5E4E2",
        }}
        justifyContent="center"
        alignContent="center"
        p={5}
      >
        <Box textAlign="left" my={3}>
          <Typography variant="h4" className="zokiHeadings boldText">
            <span className="zokiTextBlack"> Plan your perfect </span>{" "}
            <span className="zokiTextColor me-1"> trip </span>{" "}
          </Typography>{" "}
          <Typography variant="body1" className="mt-1">
            Search Flights, Hotels & Charters to ourmost popular destinations.{" "}
          </Typography>{" "}
        </Box>{" "}
        <Box justifyContent="center" alignContent="center">
          {" "}
        </Box>{" "}
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {" "}
            {loading ? (
              <CircularProgress className="my-4 ml-auto mr-auto" />
            ) : listPackages.length ? (
              listPackages.map((pkg, index) => {
                return <PerfectTripCard data={pkg} key={index} />;
              })
            ) : (
              <Typography
                variant="body1"
                style={{
                  color: "red",
                }}
                className="zokiHeadings my-4 ml-auto mr-auto"
              >
                No Packages Available at that time.{" "}
              </Typography>
            )}{" "}
          </Grid>{" "}
        </Container>{" "}
      </Box>{" "}
    </>
  );
}

export default Packages;
