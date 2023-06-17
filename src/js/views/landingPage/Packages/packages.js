///////////////////////////////////////////////////////
////////// REACT IMPORTS ////////////
/////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { useHistory, Navigate } from "react-router-dom";

///////////////////////////////////////////////////////
////////// FILES IMPORTS //////////////
/////////////////////////////////////////////////////
import { getAvailablePackages } from "crud";
import Card from "./packageCard";
import ViewPackage from "./viewPackage";

///////////////////////////////////////////////////////
/////////// MUI IMPORTS /////////////////
/////////////////////////////////////////////////////
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  CircularProgress,
} from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";

function Packages() {
  const history = useHistory();
  const [listPackages, setListPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [packageRender, setPackageRender] = useState("all");

  useEffect(() => {
    const params = {
      search: {
        query: "",
      },
      sort: "name",
      page: 1,
      pageSize: 3,
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
        textAlign="center"
        justifyContent="center"
        alignContent="center"
        py={5}
      >
        <Typography variant="body2" className="zokiTextBlack">
          {" "}
          ―――EXPLORE GREAT PLACES{" "}
        </Typography>{" "}
        <Box my={1}>
          <Typography
            variant="h4"
            className="zokiHeadings zokiTextBlack boldText"
          >
            Popular Packages{" "}
          </Typography>{" "}
        </Box>{" "}
        <Container maxWidth="lg">
          {" "}
          {packageRender != "all" ? (
            <Collapse in={packageRender != "all"}>
              <ViewPackage
                data={packageRender}
                setPackageRender={setPackageRender}
              />{" "}
            </Collapse>
          ) : null}{" "}
          <Collapse in={packageRender === "all"}>
            <Grid container spacing={3}>
              {" "}
              {loading ? (
                <CircularProgress className="my-4 ml-auto mr-auto" />
              ) : listPackages.length ? (
                listPackages.map((pkg, index) => {
                  return (
                    <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                      <Card data={pkg} setPackageRender={setPackageRender} />{" "}
                    </Grid>
                  );
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
          </Collapse>{" "}
        </Container>{" "}
        {listPackages.length ? (
          <Button
            variant="contained"
            onClick={() => history.push("/search-packages")}
            className="zokiBgBlack capitalizedText boldText zokiTextColor zokiHeadings mt-2"
          >
            View All Packages{" "}
          </Button>
        ) : null}{" "}
      </Box>{" "}
    </>
  );
}

export default Packages;
