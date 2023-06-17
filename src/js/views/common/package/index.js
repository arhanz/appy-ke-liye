import React from "react";
import { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import ListPackages from "./components/listAvailablePackageOffers";
import ViewPackage from "./components/viewPackage";
import TopNavBar from "views/landingPage/components/topNavBar";
import MainTopMenu from "views/landingPage/components/mainTopMenu";
import Header from "./components/header";
import Footer from "views/landingPage/components/footer";
import Container from "@mui/material/Container";

function PackageOffers() {
  const [packageRender, setPackageRender] = useState("all");
  return (
    <>
      <Container maxWidth="lg">
        <TopNavBar />
        <hr />
        <MainTopMenu />
      </Container>{" "}
      <Header
        text={
          packageRender !== "all" ? "Package Details" : "Search Travel Packages"
        }
      />{" "}
      {packageRender != "all" ? (
        <Collapse in={packageRender != "all"}>
          <ViewPackage
            data={packageRender}
            setPackageRender={setPackageRender}
          />{" "}
        </Collapse>
      ) : null}{" "}
      <Collapse in={packageRender === "all"}>
        <ListPackages setPackageRender={setPackageRender} />{" "}
      </Collapse>{" "}
      <Footer />
    </>
  );
}
export default PackageOffers;
