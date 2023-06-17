import {
    useEffect,
    useState
} from "react";
import {
    useHistory,
Navigate
} from "react-router-dom";
import {
    useSnackbar
} from "notistack";
import {
    useDispatch
} from "react-redux";
import {
    setLoading,
    unsetLoading
} from "redux/actions";
import {
    getAllPackages
} from "crud";
import {
    makeStyles
} from "@material-ui/core/styles";
import Moment from "react-moment";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tr: {
        "&:hover": {
            backgroundColor: "#efefef",
            cursor: "pointer",
        },
    },
}));

export default function ListAllPackages({
    reload,
    setReload,
    setRender
}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        enqueueSnackbar
    } = useSnackbar();
    const [search, setSearch] = useState("");
    const [listPackages, setListPackages] = useState([]);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalPage, setTotalPage] = useState(1);
    const [totalRecord, setTotalRecord] = useState(0);
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchData();
    }, [reload]);

    const fetchData = () => {
        const params = {
            search: {
                query: search
            },
            sort: "name",
            page,
            pageSize: rowsPerPage,
        };
        // console.log(params)
        dispatch(setLoading());
        // setLoading(true)
        getAllPackages(params)
            .then((res) => {
                // console.log(res.data.data)
                setListPackages(res.data.data.travelPackages);
                setTotalPage(res.data.data.totalPages);
                setTotalRecord(res.data.data.totalRecords);
                dispatch(unsetLoading());
                // setLoading(false)
            })
            .catch((error) => {
                if (error.response.status === 401) {
                              <Navigate to="/401" replace={true} />
                } else {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    enqueueSnackbar("Unable to fetch data.", {
                        variant: "error"
                    });
                }
                dispatch(unsetLoading());
                // setLoading(false)
            });
    };

    const handleSearch = () => {
        fetchData();
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage + 1);
        setReload((prev) => prev + 1);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(1);
        setReload((prev) => prev + 1);
    };

    return ( <
        div >
        <
        div className = "d-flex w-100 mb-1 justify-content-between align-items-center" >
        <
        h5 className = "p-0 m-0" > All Packages < /h5> <
        div className = "d-flex justify-content-end" >
        <
        input className = "w-100 p-1"
        placeholder = "Search Here"
        value = {
            search
        }
        onChange = {
            (e) => setSearch(e.target.value)
        }
        /> <
        button onClick = {
            handleSearch
        }
        className = "btn mx-1 p-2"
        style = {
            {
                minWidth: 100,
                fontWeight: 500,
                width: "10%",
                color: "white",
                backgroundColor: "black",
            }
        } >
        Search <
        /button> <
        button onClick = {
            () => setRender("new")
        }
        className = "btn p-2"
        style = {
            {
                minWidth: 100,
                fontWeight: 500,
                width: "10%",
                color: "black",
                backgroundColor: "#CFBD45",
            }
        } >
        Add New <
        /button> <
        /div> <
        /div> <
        TableContainer component = {
            Paper
        } >
        <
        Table className = {
            classes.table
        }
        aria-label = "simple table" >
        <
        TableHead style = {
            {
                backgroundColor: "black"
            }
        } >
        <
        TableRow >
        <
        TableCell style = {
            {
                color: "white"
            }
        } > Name < /TableCell> <
        TableCell style = {
            {
                color: "white"
            }
        }
        align = "right" >
        Origin <
        /TableCell> <
        TableCell style = {
            {
                color: "white"
            }
        }
        align = "right" >
        Destination <
        /TableCell> <
        TableCell style = {
            {
                color: "white"
            }
        }
        align = "right" >
        Price <
        /TableCell> <
        TableCell style = {
            {
                color: "white"
            }
        }
        align = "right" >
        Status <
        /TableCell> <
        TableCell style = {
            {
                color: "white"
            }
        }
        align = "right" >
        Created At <
        /TableCell> <
        /TableRow> <
        /TableHead> <
        TableBody className = "position-relative" > {
            listPackages.length === 0 ? ( <
                TableRow >
                <
                TableCell colSpan = {
                    6
                }
                className = "text-center"
                component = "th"
                scope = "row" >
                No Record Found. <
                /TableCell> <
                /TableRow>
            ) : (
                listPackages.map((pkg) => ( <
                    TableRow className = {
                        classes.tr
                    }
                    onClick = {
                        () => setRender(pkg._id)
                    }
                    key = {
                        pkg._id
                    } >
                    <
                    TableCell component = "th"
                    scope = "row" >
                    <
                    ListItem className = "pl-0" >
                    <
                    ListItemAvatar >
                    <
                    Avatar alt = {
                        pkg.name
                    }
                    src = {
                        pkg.featuredImg
                    }
                    /> <
                    /ListItemAvatar> <
                    ListItemText primary = {
                        pkg.name
                    }
                    secondary = {
                        pkg.description
                    }
                    /> <
                    /ListItem> <
                    /TableCell> <
                    TableCell align = "right" >
                    <
                    Chip color = "secondary"
                    size = "small"
                    label = {
                        pkg.origin
                    }
                    /> <
                    /TableCell> <
                    TableCell align = "right" >
                    <
                    Chip className = "zokiTextBlack"
                    size = "small"
                    label = {
                        pkg.destination
                    }
                    /> <
                    /TableCell> <
                    TableCell align = "right" >
                    <
                    Chip size = "small"
                    label = {
                        pkg.price
                    }
                    /> <
                    /TableCell> <
                    TableCell align = "right" > {
                        pkg.status === "INACTIVE" ? ( <
                            Chip size = "small"
                            style = {
                                {
                                    backgroundColor: "red",
                                    color: "white"
                                }
                            }
                            label = {
                                pkg.status
                            }
                            />
                        ) : ( <
                            Chip size = "small"
                            style = {
                                {
                                    backgroundColor: "green",
                                    color: "white"
                                }
                            }
                            label = {
                                pkg.status
                            }
                            />
                        )
                    } <
                    /TableCell> <
                    TableCell align = "right" >
                    <
                    Chip size = "small"
                    label = { <
                        Moment format = "DD/MM/YYYY" > {
                            pkg.createdAt
                        } < /Moment>
                    }
                    /> <
                    /TableCell> <
                    /TableRow>
                ))
            )
        } <
        /TableBody> <
        /Table> <
        /TableContainer> <
        TablePagination rowsPerPageOptions = {
            [5, 10, 25]
        }
        component = "div"
        count = {
            totalRecord
        }
        rowsPerPage = {
            rowsPerPage
        }
        page = {
            page - 1
        }
        onRowsPerPageChange = {
            handleChangeRowsPerPage
        }
        onPageChange = {
            handleChangePage
        }
        /> <
        /div>
    );
}