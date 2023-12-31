import React from "react";
import { useState, useEffect } from "react";
import { useHistory, Navigate } from "react-router-dom";
import { getAllAirports } from "crud";
import AsyncSelect from "react-select/async";
import { Button } from "@material-ui/core";

function FlightHotelForm() {
  const history = useHistory();
  const [type, setType] = useState("one");
  const [from, setFrom] = useState("");
  const [inputFrom, setInputFrom] = useState("");
  const [to, setTo] = useState("");
  const [inputTo, setInputTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adult, setAdult] = useState("");
  const [youth, setYouth] = useState("");
  const [children, setChildren] = useState("");
  const [infant, setInfant] = useState("");
  const [airline, setAirline] = useState("");
  const [travelClass, setTravelClass] = useState("");
  const [fareType, setFareType] = useState("");
  const [currency, setCurrency] = useState("");
  const [direct, setDirect] = useState(false);
  const [flexible, setFlexible] = useState("");
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    setAdult(1);
  }, []);
  const handleAirportList = (inputValue) => {
    const params = {
      search: {
        query: inputValue,
      },
      page: 1,
      pageSize: 10,
    };
    return getAllAirports(params)
      .then((res) => {
        let temp = [];
        res.data.data.airports.forEach((a) =>
          temp.push({
            label: a.name,
            value: a.iataCode,
          })
        );
        return temp;
      })
      .catch((error) => {
        if (error.response.status === 401) {
                    <Navigate to="/401" replace={true} />
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
        }
      });
  };

  const searchHandler = (e) => {
    e.preventDefault();
    let params = {
      origin: from?.value,
      destination: to?.value,
      departureDate,
      nonStop: direct,
      // eslint-disable-next-line no-undef
      travelClass: Joi.string().valid(...ALLOWED_AIR_TRAVEL_CLASSES),
      adults: adult,
      children: children,
      infants: infant,
    };
    if (type === "return") {
      params["returnDate"] = returnDate;
    }

    history.push({
      pathname: "/search-flights",
      state: {
        params,
        from,
        to,
      },
    });
  };

  return (
    <>
      <form onSubmit={searchHandler}>
        <div
          className="row"
          style={{
            fontSize: 12,
          }}
        >
          <div className="col-lg-4 px-1">
            <div className="w-100 position-relative">
              <p className="mb-1"> Departure </p>{" "}
              <AsyncSelect
                placeholder="Where from"
                cacheOptions
                className="tab-input border-0 shadow-right text-secondary w-100"
                // defaultOptions
                value={from}
                getOptionLabel={(e) => e.label}
                getOptionValue={(e) => e.value}
                onInputChange={(val) => setInputFrom(val)}
                onChange={(val) => setFrom(val)}
                loadOptions={handleAirportList}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-lg-4 px-1">
            <div className="w-100 position-relative">
              <p className="mb-1"> Destination </p>{" "}
              <AsyncSelect
                placeholder="Where to"
                cacheOptions
                className="tab-input border-0 shadow-right text-secondary w-100"
                // defaultOptions
                value={to}
                getOptionLabel={(e) => e.label}
                getOptionValue={(e) => e.value}
                onInputChange={(val) => setInputTo(val)}
                onChange={(val) => setTo(val)}
                loadOptions={handleAirportList}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-lg-2 px-1">
            <div className="w-100">
              <p className="mb-1"> Departure Date </p>{" "}
              <input
                type="date"
                label="Dep zoki"
                min={new Date().toISOString().split("T")[0]}
                required
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="tab-input form-control p-2 shadow-right text-secondary w-100"
                placeholder="New York (Any)"
              />
            </div>{" "}
          </div>{" "}
          <div className="col-lg-2 px-1">
            <div className="w-100">
              <p className="mb-1"> Return Date </p>{" "}
              <input
                type="date"
                label="Return"
                min={new Date().toISOString().split("T")[0]}
                required
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="tab-input form-control p-2 shadow-right text-secondary w-100"
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          className="row mt-3 mb-1"
          style={{
            fontSize: 12,
          }}
        >
          <div className="col-lg-4 px-1">
            <div className="w-100">
              <p className="mb-1"> Rooms </p>{" "}
              <select
                required
                value={adult}
                onChange={(e) => setAdult(e.target.value)}
                className="tab-input form-control p-2 shadow-right text-secondary w-100"
              >
                <option value="" disabled hidden>
                  No.of Adult(s){" "}
                </option>{" "}
                <option> 1 </option> <option> 2 </option> <option> 3 </option>{" "}
                <option> 4 </option> <option> 5 </option> <option> 6 </option>{" "}
                <option> 7 </option> <option> 8 </option> <option> 9 </option>{" "}
              </select>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-lg-4 px-1">
            <div className="w-100">
              <p className="mb-1"> Adults </p>{" "}
              <select
                required
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="tab-input form-control p-2 shadow-right text-secondary w-100"
              >
                <option> 1 </option> <option> 2 </option> <option> 3 </option>{" "}
                <option> 4 </option> <option> 5 </option> <option> 6 </option>{" "}
                <option> 7 </option> <option> 8 </option> <option> 9 </option>{" "}
              </select>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-lg-4 px-1">
            <div className="w-100">
              <p className="mb-1"> Children </p>{" "}
              <select
                required
                value={infant}
                onChange={(e) => setInfant(e.target.value)}
                className="tab-input form-control p-2 shadow-right text-secondary w-100"
              >
                <option> 0 </option> <option> 1 </option> <option> 2 </option>{" "}
                <option> 3 </option> <option> 4 </option> <option> 5 </option>{" "}
                <option> 6 </option> <option> 7 </option> <option> 8 </option>{" "}
                <option> 9 </option>{" "}
              </select>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          className="mt-3"
          style={{
            textAlign: "end",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            style={{
              background: "#998b33",
              textTransform: "capitalize",
            }}
          >
            <p className="mb-0 text-white">
              Search Flights <i className="fa fa-arrow-right ms-2 text-sm" />
            </p>{" "}
          </Button>{" "}
        </div>{" "}
      </form>{" "}
    </>
  );
}

export default FlightHotelForm;
