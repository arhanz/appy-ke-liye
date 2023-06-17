import { useState, useEffect, useRef } from "react";
import { Navigate, useHistory } from "react-router-dom";
import { getAvailablePackages } from "crud";
import CircularProgress from "@material-ui/core/CircularProgress";
import Pagination from "@material-ui/lab/Pagination";
import PackageCard from "./packageCard";

function PackagesSearchResults({ setPackageRender, setNewRender }) {
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
    searchHandler();
  }, []);

  const searchHandler = (e) => {
    if (e) e.preventDefault();
    msg.current = "";
    setLoading(true);
    let params = {
      search: {
        query: search,
      },
      sort: "name",
      page,
      pageSize: 10,
    };
    getAvailablePackages(params)
      .then((res) => {
        console.log(res.data.data);
        setOffers(res.data.data.travelPackages);
        setPage(res.data.data.currentPage);
        setTotalPages(res.data.data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          <Navigate to="/401" replace={true} />;
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
        }
        msg.current = "Error. Please try again.";
        setLoading(false);
      });
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    searchHandler();
  };

  return (
    <>
      <form className="container mt-4" onSubmit={searchHandler}>
        <div
          className="row mt-3 mb-1"
          style={{
            fontSize: 12,
          }}
        >
          <div className="col-lg-12 px-1">
            <div className="w-100">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="tab-input form-control p-2 shadow-right text-secondary w-100"
                placeholder="Search Here"
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="col-lg-12 px-1 my-3 text-center">
          <button
            type="submit"
            className="btn btn-primary w-25 rounded-pill px-4 border-0"
            style={{
              backgroundColor: "#B6A63C",
              color: "black",
            }}
          >
            <p className="mb-0"> Search </p>{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
      <div className="d-flex flex-column w-100">
        {" "}
        {loading ? (
          <CircularProgress className="my-4 mr-auto ml-auto" />
        ) : offers.length ? (
          <>
            <div className="container pt-3">
              {" "}
              {offers.map((o, i) => {
                return (
                  <PackageCard
                    setPackageRender={setPackageRender}
                    data={o}
                    key={i}
                  />
                );
              })}{" "}
            </div>{" "}
            <div className="d-flex w-100 justify-content-center">
              <Pagination
                color="secondary"
                count={totalPages}
                page={page}
                onChange={handlePageChange}
              />{" "}
            </div>{" "}
          </>
        ) : null}{" "}
        <h4 ref={msg} className="my-4 ml-auto mr-auto">
          {" "}
        </h4>{" "}
      </div>{" "}
    </>
  );
}

export default PackagesSearchResults;
