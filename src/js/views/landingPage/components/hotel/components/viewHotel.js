import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// @material-ui/core components
import TextField from "@material-ui/core/TextField";
// core components
import { enqueueSnackbar } from 'notistack'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SignUpModel from "./signupModel";

export default function ViewHotel({ data, setHotelRender, authenticated }) {
  const [signup, setSignup] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [adult, setAdult] = useState("");
  const [children, setChildren] = useState("");
  const [infant, setInfant] = useState("");
  const [payload, setPayload] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (parseInt(adult) < 1) {
      enqueueSnackbar("Adult must be greater than or equal to 1", {
        variant: "info",
      });
      return;
    }
    const payload = {
      _hotel: data._id,
      bookingDetail: {
        checkinDate: checkIn,
        checkoutDate: checkOut,
        adults: adult,
        children: children,
        infants: infant,
      },
    };
    setPayload(payload);
    setSignup(true);
  };

  return (
    <form className="container" onSubmit={submitHandler}>
      <h3 className="text-center zokiHeadings"> {data.name} </h3>{" "}
      <div className="d-flex flex-column w-100">
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className="mt-4 w-100"
                format="MM/dd/yyyy"
                value={checkIn}
                onChange={(date) => setCheckIn(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                placeholder="Check-In"
                InputProps={{
                  style: {
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: "3px",
                  },
                }}
                minDate={new Date()}
                required
              />
            </MuiPickersUtilsProvider>{" "}
          </GridItem>{" "}
          <GridItem xs={12} sm={12} md={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className="mt-4 w-100"
                format="MM/dd/yyyy"
                value={checkOut}
                onChange={(date) => setCheckOut(date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                InputProps={{
                  style: {
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: "3px",
                  },
                }}
                placeholder="Check-Out"
                minDate={new Date()}
                required
              />
            </MuiPickersUtilsProvider>{" "}
          </GridItem>{" "}
        </GridContainer>{" "}
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <TextField
              className="mt-4 w-100"
              value={adult}
              onChange={(e) => setAdult(e.target.value)}
              type="number"
              required
              placeholder="Adults"
              InputProps={{
                style: {
                  backgroundColor: "white",
                  padding: 3,
                  borderRadius: "3px",
                },
              }}
            />{" "}
          </GridItem>{" "}
          <GridItem xs={12} sm={12} md={4}>
            <TextField
              className="mt-4 w-100"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              type="number"
              required
              placeholder="Childrens"
              InputProps={{
                style: {
                  backgroundColor: "white",
                  padding: 3,
                  borderRadius: "3px",
                },
              }}
            />{" "}
          </GridItem>{" "}
          <GridItem xs={12} sm={12} md={4}>
            <TextField
              className="mt-4 w-100"
              value={infant}
              onChange={(e) => setInfant(e.target.value)}
              type="number"
              required
              placeholder="Infants"
              InputProps={{
                style: {
                  backgroundColor: "white",
                  padding: 3,
                  borderRadius: "3px",
                },
              }}
            />{" "}
          </GridItem>{" "}
        </GridContainer>{" "}
        <div className="d-flex mt-3 w-100 justify-content-around">
          <Button
            style={{
              width: "32%",
            }}
            round
            onClick={() => setHotelRender("all")}
          >
            Go Back{" "}
          </Button>{" "}
          <Button
            style={{
              width: "32%",
            }}
            type="submit"
            color="success"
            round
          >
            Book Now{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
      <SignUpModel
        bookingDetails={payload}
        signup={signup}
        setSignup={setSignup}
      />{" "}
    </form>
  );
}
