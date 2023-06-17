import { useState, useEffect, useRef } from "react";
import { useHistory, Navigate } from "react-router-dom";
import { getAvailableHotels } from "crud";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";
import HotelCard from "./hotelCard";
import { Box, TextField, Button } from "@material-ui/core";

function HotelsSearchResults({ setHotelRender }) {
  const history = useHistory();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adult, setAdult] = useState("");
  const [children, setChildren] = useState("");
  const [infant, setInfant] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);

  const msg = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    searchHandler();
  }, []);

  const searchHandler = (e) => {
    if (e) e.preventDefault();
    msg.current.innerText = "";
    setLoading(true);
    let params = {
      search: {
        query: search,
      },
      sort: "name",
      page,
      pageSize: 10,
    };
    getAvailableHotels(params)
      .then((res) => {
        setOffers(res.data.data.hotels);
        setPage(res.data.data.currentPage);
        setTotalPages(res.data.data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 401) {
                    <Navigate to="/401" replace={true} />
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
        }
        msg.current.innerText = "Error. Please try again.";
        setLoading(false);
      });
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    searchHandler();
  };

  return (
    <>
      <form className="container mt-2" onSubmit={searchHandler}>
        <Box position="relative">
          <TextField
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Here"
            fullWidth
            InputProps={{
              style: {
                backgroundColor: "white",
                padding: "5px",
              },
            }}
          />{" "}
          <Box position="absolute" width={200} bottom={3} right={4}>
            <Button
              variant="contained"
              className="capitalizedText zokiBgBlack text-white"
              fullWidth
              type="submit"
            >
              Search{" "}
            </Button>{" "}
          </Box>{" "}
        </Box>{" "}
      </form>{" "}
      <hr />
      <div className="d-flex flex-column w-100">
        {" "}
        {loading ? (
          <CircularProgress className="my-4 mr-auto ml-auto" />
        ) : offers.length ? (
          <>
            <div className="container">
              {" "}
              {offers.map((o, i) => {
                return (
                  <HotelCard setHotelRender={setHotelRender} data={o} key={i} />
                );
              })}{" "}
            </div>{" "}
            <div className="d-flex w-100 justify-content-center zokiTextBlack zokiBgColor p-3">
              <Pagination
                color="secondary"
                count={totalPages}
                page={page}
                onChange={handlePageChange}
              />{" "}
            </div>{" "}
          </>
        ) : (
          <h4 className="my-4 ml-auto mr-auto"> No Record Found </h4>
        )}{" "}
        <h4 ref={msg} className="my-4 ml-auto mr-auto">
          {" "}
        </h4>{" "}
      </div>{" "}
    </>
  );
}

export default HotelsSearchResults;
