import React from "react";
import { useState, useEffect } from "react";
import { useHistory, Navigate } from "react-router-dom";
import { getAllAirports } from "crud";
import AsyncSelect from "react-select/async";
import { Button } from "@material-ui/core";

function FlightForm() {
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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
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
        console.log(res.data.data.airports);
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
      <form onSubmit={searchHandler} className="zokiTextColor">
        <div
          className="row"
          style={{
            fontSize: 16,
          }}
        >
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row">
              <p className="col-3 m-0 p-0"> Ticket Type: </p>{" "}
              <div className="col-3 m-0 p-0">
                <input
                  required
                  onChange={(e) => setType(e.target.value)}
                  label="One Way Ticket Type"
                  type="radio"
                  value="one"
                  name="ticket-type"
                  className="mr-2"
                  defaultChecked={type == "one"}
                />
                One Way{" "}
              </div>{" "}
              <div className="col-3 m-0 p-0">
                <input
                  label="Returning Info"
                  required
                  onChange={(e) => setType(e.target.value)}
                  type="radio"
                  value="return"
                  name="ticket-type"
                  className="mr-2"
                />
                Return{" "}
              </div>{" "}
              <div className="col-3 m-0 p-0">
                <input
                  required
                  label="Multi-City Ticket Type"
                  onChange={(e) => setType(e.target.value)}
                  type="radio"
                  value="multi"
                  name="ticket-type"
                  className="mr-2"
                />
                Multi City{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          className="row mt-3 mb-1"
          style={{
            fontSize: 12,
          }}
        >
          <div className="col-lg-4 col-md-12 col-sm-12 px-1">
            <div className="w-full position-relative">
              <p className="mb-1"> Departure </p>{" "}
              <AsyncSelect
                placeholder="From Where"
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
              <input
                tabIndex={-1}
                label="From Where"
                autoComplete="off"
                className="position-absolute"
                style={{
                  opacity: 0,
                  height: 0,
                }}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              />
            </div>{" "}
          </div>{" "}
          <div className="col-lg-4 col-md-12 col-sm-12 px-1">
            <div className="w-100 position-relative">
              <p className="mb-1"> Destination </p>{" "}
              <AsyncSelect
                placeholder="To Where"
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
              <input
                tabIndex={-1}
                label="To Where"
                autoComplete="off"
                className="position-absolute"
                style={{
                  opacity: 0,
                  height: 0,
                }}
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              />
            </div>{" "}
          </div>{" "}
          {type === "one" || type === "multi" ? (
            <div className="col-lg-4 col-md-12 col-sm-12 px-1">
              <div className="w-100">
                <p className="mb-1"> Departure Date </p>{" "}
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  required
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="tab-input form-control p-2 shadow-right text-secondary w-100"
                  placeholder="New York (Any)"
                />
              </div>{" "}
            </div>
          ) : (
            <>
              <div className="col-lg-2 px-1">
                <div className="w-100">
                  <p className="mb-1"> Departure Date </p>{" "}
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    required
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="tab-input form-control p-2 shadow-right text-secondary w-100"
                  />
                </div>{" "}
              </div>{" "}
              <div className="col-lg-2 px-1">
                <div className="w-100">
                  <p className="mb-1"> Return Date </p>{" "}
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    required
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="tab-input form-control p-2 shadow-right text-secondary w-100"
                  />
                </div>{" "}
              </div>{" "}
            </>
          )}{" "}
        </div>{" "}
        {type === "multi" ? (
          <div
            className="row mt-3 mb-1"
            style={{
              fontSize: 12,
            }}
          >
            <div className="col-lg-4 col-md-12 col-sm-12 px-1">
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
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  className="position-absolute"
                  style={{
                    opacity: 0,
                    height: 0,
                  }}
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                />
              </div>{" "}
            </div>{" "}
            <div className="col-lg-4 col-md-12 col-sm-12 px-1">
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
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  className="position-absolute"
                  style={{
                    opacity: 0,
                    height: 0,
                  }}
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required
                />
              </div>{" "}
            </div>{" "}
            <div className="col-lg-4 col-md-12 col-sm-12 px-1">
              <div className="w-100">
                <p className="mb-1"> Departure Date </p>{" "}
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  required
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="tab-input form-control p-2 shadow-right text-secondary w-100"
                  placeholder="New York (Any)"
                />
              </div>{" "}
            </div>{" "}
          </div>
        ) : (
          ""
        )}{" "}
        <div
          className="row mt-3 mb-1"
          style={{
            fontSize: 12,
          }}
        >
          <div className="col-lg-4 col-md-12 col-sm-12 px-1">
            <div className="w-100">
              <p className="mb-1"> Adult(15 + ) </p>{" "}
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
          <div className="col-lg-4 col-md-12 col-sm-12 px-1">
            <div className="w-100">
              <p className="mb-1"> Children(2 - 11) </p>{" "}
              <select
                required
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="tab-input form-control p-2 shadow-right text-secondary w-100"
              >
                <option value="" disabled hidden>
                  No.of Children{" "}
                </option>{" "}
                <option defaultValue> 0 </option> <option> 1 </option>{" "}
                <option> 2 </option> <option> 3 </option> <option> 4 </option>{" "}
                <option> 5 </option> <option> 6 </option> <option> 7 </option>{" "}
                <option> 8 </option> <option> 9 </option>{" "}
              </select>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-lg-4 col-md-12 col-sm-12 px-1">
            <div className="w-100">
              <p className="mb-1"> Infant(2 - ) </p>{" "}
              <select
                required
                value={infant}
                onChange={(e) => setInfant(e.target.value)}
                className="tab-input form-control p-2 shadow-right text-secondary w-100"
              >
                <option value="" disabled hidden>
                  No.of Infant(s){" "}
                </option>{" "}
                <option defaultValue> 0 </option> <option> 1 </option>{" "}
                <option> 2 </option> <option> 3 </option> <option> 4 </option>{" "}
                <option> 5 </option> <option> 6 </option> <option> 7 </option>{" "}
                <option> 8 </option> <option> 9 </option>{" "}
              </select>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          className="row col-lg-12 m-0 mt-4 p-0"
          style={{
            fontSize: 16,
          }}
        >
          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="form-check">
              <input
                value={direct}
                label="Direct Flights Only"
                onChange={(e) => setDirect(e.target.defaultChecked)}
                className="form-check-input form-check-box"
                type="checkbox"
                id="directFlightsOnly"
              />
              <label className="form-check-label form-check-label">
                Direct Flights Only{" "}
              </label>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className="col-lg-6 col-md-12 col-sm-12 mb-3 p-0"
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
        </div>{" "}
      </form>{" "}
    </>
  );
}

export default FlightForm;
