import React, { useEffect, useState } from "react";
import { useHistory, Navigate } from "react-router-dom";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "../../../components/Typography/Danger";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardIcon from "../../../components/Card/CardIcon.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import { useSnackbar } from "notistack";

import LocationOn from "@material-ui/icons/LocationOn";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

/// IMPORTING STUFF /////
import { useSelector, useDispatch } from "react-redux";
import { getSpecificCustomer, getSpecificWallet, getAllBookings } from "crud";

import styles from "../../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Hotel from "@material-ui/icons/Hotel";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  ///// STATES FOR DISPLAYING NAME /////
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  /// STATES FOR DISPLAYING VALUE (FLIGHTS && TRAVEL_PACKAGES && HOTEL) /////
  const [listBookings, setListBookings] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  ///// STATES FOR DISPLAYING ACCOUNT BALANCE /////
  const [balance, setBalance] = useState(0);

  ///// DISPLAYING DATA AFTER THE COMPONENT RENDERED PERFECTLY /////
  useEffect(() => {
    fetchData();
  }, []);

  ///// DEFINING USER BY USERID /////
  const userId = useSelector(
    ({
      user: {
        user: { sub },
      },
    }) => sub
  );

  //// INCREASE NOTIFICATION ON CLICK /////
  // const [counToPlus, setCountToPlus] = useState(0)

  ///// DISPLAYING BOOKINGS LIST WHEN COMPONENT RENDER COMPLETLY /////
  useEffect(() => {
    const bookingType = localStorage.getItem("bookingType");
    const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
    if (bookingDetails && bookingType) {
                <Navigate to="/customer/booking" replace={true} />
    }

    ///// USER DATA /////
    getSpecificCustomer(userId)
      .then((res) => {
        loadValuesHandler(res.data.data.customer);
      })
      .catch((error) => {
        if (error.response.status === 401) {
                    <Navigate to="/401" replace={true} />
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
          enqueueSnackbar("Unable to fetch data.", {
            variant: "error",
          });
        }
      });
  }, []);

  //// USER ACCOUNT BALANCE /////
  getSpecificWallet(userId)
    .then((res) => {
      setBalance(res?.data?.data?.wallet?.balance);
    })
    .catch((error) => {
      if (error?.response?.status === 401) {
                  <Navigate to="/401" replace={true} />
      } else {
        console.log(error?.response?.data);
        console.log(error?.response?.status);
        enqueueSnackbar("Unable to fetch data.", {
          variant: "error",
        });
      }
    });

  //// FETCHING USER INFO /////
  const loadValuesHandler = (user) => {
    setFirstName(user.firstName ? user.firstName : "");
    setMiddleName(user.middleName ? user.middleName : "");
    setLastName(user.lastName ? user.lastName : "");
  };

  ///// DISPLAYING NUMBER OF BOOKINGS ////
  const fetchData = () => {
    const params = {
      search: {
        query: search,
      },
      sort: "_id",
      page,
      pageSize: 10000,
    };
    getAllBookings(params)
      .then((res) => {
        console.log(res.data.data);
        setListBookings(res.data.data.bookings);
        setTotalPage(res.data.data.totalPages);
        setTotalRecord(res.data.data.totalRecords);
      })
      .catch((error) => {
        if (error.response.status === 401) {
                    <Navigate to="/401" replace={true} />
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
          enqueueSnackbar("Unable to fetch data.", {
            variant: "error",
          });
        }
      });
  };

  ///// FORMATTING THE NUMBER THAT /////
  ///// IF THE VALUE LENGTH IS IN THOUSANDS /////
  ///// THE VALUE WILL HAVE A K OR MILLION /////
  ///// WITH IT /////
  const formatNumber = (num) => {
    if (num >= 1000 && num < 1000000) {
      return (num / 1000).toFixed(1) + "k";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "m";
    } else {
      return num;
    }
  };

  return (
    <div>
      <h3
        style={{
          textTransform: "capitalize",
        }}
      >
        Welcome {firstName} {middleName} {lastName}!
      </h3>{" "}
      <hr />
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <i className="fa-solid fa-plane-departure"> </i>{" "}
              </CardIcon>{" "}
              <p className={classes.cardCategory}> Flights </p>{" "}
              <h3 className={classes.cardTitle}>
                {" "}
                {listBookings
                  .filter((bkg) => bkg.lob === "AIR")
                  .map((bkg) => (
                    <span
                      className={classes.tr}
                      onClick={() => {
                        setType(bkg.lob);
                        setRender(bkg._id);
                      }}
                      key={bkg._id}
                    >
                      {bkg.lob}{" "}
                    </span>
                  )).length && listBookings.length === 0
                  ? `No Flights Booked`
                  : formatNumber(listBookings.length)}{" "}
              </h3>{" "}
            </CardHeader>{" "}
            <CardFooter stats>
              <div className={classes.stats}> All Tme Book Ticket </div>{" "}
            </CardFooter>{" "}
          </Card>{" "}
        </GridItem>{" "}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Hotel />
              </CardIcon>{" "}
              <p className={classes.cardCategory}> Hotels </p>{" "}
              <h3 className={classes.cardTitle}>
                {" "}
                {listBookings
                  .filter((bkg) => bkg.lob === "HOTEL")
                  .map((bkg) => (
                    <span
                      className={classes.tr}
                      onClick={() => {
                        setType(bkg.lob);
                        setRender(bkg._id);
                      }}
                      key={bkg._id}
                    >
                      {bkg.lob}{" "}
                    </span>
                  )).length && listBookings.length === 0
                  ? `No Hotels Booked`
                  : formatNumber(listBookings.length)}{" "}
              </h3>{" "}
            </CardHeader>{" "}
            <CardFooter stats>
              <div className={classes.stats}> All Time Available Hotels </div>{" "}
            </CardFooter>{" "}
          </Card>{" "}
        </GridItem>{" "}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <LocalOfferIcon />
              </CardIcon>{" "}
              <p className={classes.cardCategory}> Packages </p>{" "}
              <h3 className={classes.cardTitle}>
                {" "}
                {listBookings
                  .filter((bkg) => bkg.lob === "TRAVEL_PACKAGE")
                  .map((bkg) => (
                    <span
                      className={classes.tr}
                      onClick={() => {
                        setType(bkg.lob);
                        setRender(bkg._id);
                      }}
                      key={bkg._id}
                    >
                      {bkg.lob}{" "}
                    </span>
                  )).length && listBookings.length === 0
                  ? `No Hotels Booked`
                  : formatNumber(listBookings.length)}{" "}
              </h3>{" "}
            </CardHeader>{" "}
            <CardFooter stats>
              <div className={classes.stats}> All Time Available Packages </div>{" "}
            </CardFooter>{" "}
          </Card>{" "}
        </GridItem>{" "}
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <i className="fas fa-dollar-sign"> </i>{" "}
              </CardIcon>{" "}
              <p className={classes.cardCategory}> Your Balance </p>{" "}
              <h3 className={classes.cardTitle}>
                {" "}
                {balance.length === 0
                  ? `No Balance In Account`
                  : formatNumber(balance)}{" "}
              </h3>{" "}
            </CardHeader>{" "}
            <CardFooter stats>
              <div className={classes.stats}> All Time Balance </div>{" "}
            </CardFooter>{" "}
          </Card>{" "}
        </GridItem>{" "}
      </GridContainer>{" "}
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />{" "}
            </CardHeader>{" "}
            <CardBody>
              <h4 className={classes.cardTitle}> Daily Sales </h4>{" "}
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%{" "}
                </span>{" "}
                increase in today sales.{" "}
              </p>{" "}
            </CardBody>{" "}
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago{" "}
              </div>{" "}
            </CardFooter>{" "}
          </Card>{" "}
        </GridItem>{" "}
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />{" "}
            </CardHeader>{" "}
            <CardBody>
              <h4 className={classes.cardTitle}> Email Subscriptions </h4>{" "}
              <p className={classes.cardCategory}>
                {" "}
                Last Campaign Performance{" "}
              </p>{" "}
            </CardBody>{" "}
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago{" "}
              </div>{" "}
            </CardFooter>{" "}
          </Card>{" "}
        </GridItem>{" "}
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />{" "}
            </CardHeader>{" "}
            <CardBody>
              <h4 className={classes.cardTitle}> Completed Tasks </h4>{" "}
              <p className={classes.cardCategory}>
                {" "}
                Last Campaign Performance{" "}
              </p>{" "}
            </CardBody>{" "}
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago{" "}
              </div>{" "}
            </CardFooter>{" "}
          </Card>{" "}
        </GridItem>{" "}
      </GridContainer>{" "}
    </div>
  );
}
