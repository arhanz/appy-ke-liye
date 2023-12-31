import React, { useState } from "react";
// @material-ui/core components
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// @material-ui/core components
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SignUpModel from "./signupModel";
import propTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ViewPackage({ data, setPackageRender }) {
  const classes = useStyles();
  const theme = useTheme();
  const [signup, setSignup] = useState(false);
  const [description, setDescription] = useState(data.description);
  const [origin, setOrigin] = useState(data.origin);
  const [destination, setDestination] = useState(data.destination);
  const [persons, setPersons] = useState(data.noOfPersons);
  const [days, setDays] = useState(data.days);
  const [nights, setNights] = useState(data.nights);
  const [price, setPrice] = useState(data.price);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [tags, setTags] = useState(data.tags);
  const [tagsList, setTagsList] = useState(data.tags);
  const [activities, setActivities] = useState(data.activities);
  const [activitiesList, setActivitiesList] = useState(data.activities);
  const [payload, setPayload] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      _travelPackage: data._id,
      bookingDetail: {
        checkinDate: checkIn,
        checkoutDate: checkOut,
      },
    };
    setPayload(payload);
    setSignup(true);
  };

  return (
    <form className="container mt-4" onSubmit={submitHandler}>
      <h3 className="text-center my-4"> {data.name} </h3>{" "}
      <div className="d-flex flex-column p-4 w-100">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <TextField
              className="mt-4 w-100"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              disabled
            />
          </GridItem>{" "}
        </GridContainer>{" "}
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <TextField
              className="mt-4 w-100"
              label="Origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
              disabled
            />
          </GridItem>{" "}
          <GridItem xs={12} sm={12} md={6}>
            <TextField
              className="mt-4 w-100"
              label="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              disabled
            />
          </GridItem>{" "}
        </GridContainer>{" "}
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              className="mt-4 w-100"
              label="No. of Person"
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
              required
              disabled
            />
          </GridItem>{" "}
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              className="mt-4 w-100"
              label="Days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              required
              disabled
            />
          </GridItem>{" "}
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              className="mt-4 w-100"
              label="Nights"
              value={nights}
              onChange={(e) => setNights(e.target.value)}
              required
              disabled
            />
          </GridItem>{" "}
          <GridItem xs={12} sm={12} md={3}>
            <TextField
              className="mt-4 w-100"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              disabled
            />
          </GridItem>{" "}
        </GridContainer>{" "}
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <FormControl className="mt-4 w-100">
              <InputLabel id="activities-label"> Activities </InputLabel>{" "}
              <Select
                labelId="activities-label"
                id="activities"
                multiple
                value={activities}
                onChange={(e) => setActivities(e.target.value)}
                input={<Input id="select-activities" />}
                disabled
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {" "}
                    {selected.map((value, i) => (
                      <Chip
                        color="secondary"
                        key={i}
                        label={value}
                        className={classes.chip}
                      />
                    ))}{" "}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {activitiesList?.map((a, i) => (
                  <MenuItem
                    key={i}
                    value={a}
                    style={getStyles(a, activities, theme)}
                  >
                    {a}{" "}
                  </MenuItem>
                ))}{" "}
              </Select>{" "}
            </FormControl>{" "}
          </GridItem>{" "}
          <GridItem xs={12} sm={12} md={6}>
            <FormControl className="mt-4 w-100">
              <InputLabel id="tags-label"> Tags </InputLabel>{" "}
              <Select
                labelId="tags-label"
                id="tags"
                multiple
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                input={<Input id="select-tags" />}
                disabled
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {" "}
                    {selected.map((value, i) => (
                      <Chip
                        color="secondary"
                        key={i}
                        label={value}
                        className={classes.chip}
                      />
                    ))}{" "}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {tagsList.map((t, i) => (
                  <MenuItem key={i} value={t} style={getStyles(t, tags, theme)}>
                    {" "}
                    {t}{" "}
                  </MenuItem>
                ))}{" "}
              </Select>{" "}
            </FormControl>{" "}
          </GridItem>{" "}
        </GridContainer>{" "}
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className="mt-4 w-100"
                format="MM/dd/yyyy"
                label="Check In"
                value={checkIn}
                onChange={(date) => setCheckIn(date)}
                KeyboardButtonProps={{
                  label: "change date",
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
                label="Check Out"
                value={checkOut}
                onChange={(date) => setCheckOut(date)}
                KeyboardButtonProps={{
                  label: "change date",
                }}
                minDate={new Date()}
                required
              />
            </MuiPickersUtilsProvider>{" "}
          </GridItem>{" "}
        </GridContainer>{" "}
        <div className="d-flex mt-3 w-100 justify-content-around">
          <Button
            style={{
              width: "32%",
            }}
            round
            onClick={() => setPackageRender("all")}
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

ViewPackage.propTypes = {
  setReload: propTypes.array,
  setNewRender: propTypes.array,
  setRender: propTypes.array,
  setPackageRender: propTypes.array,
  name: propTypes.string,
  data: propTypes.shape({
    _id: propTypes.string,
    imgGallery: propTypes.arrayOf(propTypes.string),
    name: propTypes.string,
    description: propTypes.string,
    origin: propTypes.string,
    destination: propTypes.string,
    noOfPersons: propTypes.number,
    days: propTypes.number,
    nights: propTypes.number,
    price: propTypes.number,
    tags: propTypes.array,
    activities: propTypes.array,
  }),
};
