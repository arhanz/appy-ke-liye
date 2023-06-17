import React, {
    useEffect,
    useState
} from "react";
import {
    useHistory,
Navigate
} from "react-router-dom";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import {
    makeStyles
} from "@material-ui/core/styles";
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
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {
    useSnackbar
} from "notistack";

///// IMPORTING STUFF /////
import {
    useSelector,
    useDispatch
} from "react-redux";
import {
    setLoading,
    unsetLoading
} from "redux/actions";
import {
    getSpecificUser,
    getAllBookings,
    getSpecificWallet
} from "crud";

import {
    bugs,
    website,
    server
} from "variables/general.js";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import {
    Hotel
} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function Dashboard() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const {
        enqueueSnackbar
    } = useSnackbar();

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

    ///// USER ID /////
    const userId = useSelector(
        ({
            user: {
                user: {
                    sub
                },
            },
        }) => sub
    );

    ///// DISPLAYING DATA AFTER THE COMPONENT RENDERED PERFECTLY /////
    useEffect(() => {
        fetchData();
    }, []);

    ///// DISPLAYING BOOKINGS LIST WHEN COMPONENT RENDER COMPLETLY /////
    useEffect(() => {
        const bookingType = localStorage.getItem("bookingType");
        const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
        if (bookingDetails && bookingType) {
                      <Navigate to="/customer/booking" replace={true} />
        }

        ////// USER DATA /////
        dispatch(setLoading());
        getSpecificUser(userId)
            .then((res) => {
                loadValuesHandler(res.data.data.user);
                dispatch(unsetLoading());
            })
            .catch((error) => {
                console.log(error);
                if (error?.response?.status === 401) {
                              <Navigate to="/401" replace={true} />
                } else {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    enqueueSnackbar("Unable to fetch data.", {
                        variant: "error",
                    });
                    dispatch(unsetLoading());
                }
            });
    }, []);

    ///// DISPLAYING USER ACCOUNT BALANCE WHEN COMPONENT RENDER COMPLETLY /////
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
                    variant: "error"
                });
            }
        });

    ///// DISPLAYING NUMBER OF BOOKINGS ////
    const fetchData = () => {
        const params = {
            search: {
                query: search
            },
            sort: "_id",
            page,
            pageSize: 10000,
        };
        getAllBookings(params)
            .then((res) => {
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
                        variant: "error"
                    });
                }
            });
    };

    //// FETCHING USER DATA /////
    const loadValuesHandler = (user) => {
        setFirstName(user.firstName ? user.firstName : "");
        setMiddleName(user.middleName ? user.middleName : "");
        setLastName(user.lastName ? user.lastName : "");
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

    return ( <
        div >
        <
        h3 className = "capitalize" >
        Welcome {
            firstName
        } {
            middleName
        } {
            lastName
        }!
        <
        /h3> <
        GridContainer >
        <
        GridItem xs = {
            12
        }
        sm = {
            6
        }
        md = {
            3
        } >
        <
        Card >
        <
        CardHeader color = "success"
        stats icon >
        <
        CardIcon color = "success" >
        <
        i className = "fa-solid fa-plane-departure" > < /i> <
        /CardIcon> <
        p className = {
            classes.cardCategory
        } > Sold Tickets < /p> <
        h3 className = {
            classes.cardTitle
        } > {
            listBookings
            .filter((bkg) => bkg.lob === "AIR")
            .filter((bkg) => bkg.status === "CONFIRMED")
            .map((bkg) => ( <
                span className = {
                    classes.tr
                }
                onClick = {
                    () => {
                        setType(bkg.lob);
                        setRender(bkg._id);
                    }
                }
                key = {
                    bkg._id
                } >
                {
                    bkg.lob
                } <
                /span>
            )).length && listBookings.length === 0 ?
            `No Tickets Are Sold` :
                formatNumber(listBookings.length)
        } <
        /h3> <
        /CardHeader> <
        CardFooter stats >
        <
        div className = {
            classes.stats
        } > All TIme Sold Tickets < /div> <
        /CardFooter> <
        /Card> <
        /GridItem> <
        GridItem xs = {
            12
        }
        sm = {
            6
        }
        md = {
            3
        } >
        <
        Card >
        <
        CardHeader color = "info"
        stats icon >
        <
        CardIcon color = "info" >
        <
        Hotel / >
        <
        /CardIcon> <
        p className = {
            classes.cardCategory
        } > Sold Hotels < /p> <
        h3 className = {
            classes.cardTitle
        } > {
            listBookings
            .filter((bkg) => bkg.lob === "HOTEL")
            .filter((bkg) => bkg.status === "CONFIRMED")
            .map((bkg) => ( <
                span className = {
                    classes.tr
                }
                onClick = {
                    () => {
                        setType(bkg.lob);
                        setRender(bkg._id);
                    }
                }
                key = {
                    bkg._id
                } >
                {
                    bkg.lob
                } <
                /span>
            )).length && listBookings.length === 0 ?
            `No Hotels Are Sold` :
                formatNumber(listBookings.length)
        } <
        /h3> <
        /CardHeader> <
        CardFooter stats >
        <
        div className = {
            classes.stats
        } > All Time Sold Hotels < /div> <
        /CardFooter> <
        /Card> <
        /GridItem> <
        GridItem xs = {
            12
        }
        sm = {
            6
        }
        md = {
            3
        } >
        <
        Card >
        <
        CardHeader color = "danger"
        stats icon >
        <
        CardIcon color = "danger" >
        <
        LocalOffer / >
        <
        /CardIcon> <
        p className = {
            classes.cardCategory
        } > Sold Packages < /p> <
        h3 className = {
            classes.cardTitle
        } > {
            listBookings
            .filter((bkg) => bkg.lob === "TRAVEL_PACKAGE")
            .filter((bkg) => bkg.status === "CONFIRMED")
            .map((bkg) => ( <
                span className = {
                    classes.tr
                }
                onClick = {
                    () => {
                        setType(bkg.lob);
                        setRender(bkg._id);
                    }
                }
                key = {
                    bkg._id
                } >
                {
                    bkg.lob
                } <
                /span>
            )).length && listBookings.length === 0 ?
            `No Packages Are Sold` :
                formatNumber(listBookings.length)
        } <
        /h3> <
        /CardHeader> <
        CardFooter stats >
        <
        div className = {
            classes.stats
        } > All Time Sold Packages < /div> <
        /CardFooter> <
        /Card> <
        /GridItem> <
        GridItem xs = {
            12
        }
        sm = {
            6
        }
        md = {
            3
        } >
        <
        Card >
        <
        CardHeader color = "warning"
        stats icon >
        <
        CardIcon color = "warning" >
        <
        i className = "fa-solid fa-dollar-sign" > < /i> <
        /CardIcon> <
        p className = {
            classes.cardCategory
        } > All Time TopUp < /p> <
        h3 className = {
            classes.cardTitle
        } > {
            balance.length === 0 ?
            `No Balance In Account` :
                formatNumber(balance)
        } <
        /h3> <
        /CardHeader> <
        CardFooter stats >
        <
        div className = {
            classes.stats
        } > All Time Balance < /div> <
        /CardFooter> <
        /Card> <
        /GridItem> <
        /GridContainer> <
        GridContainer >
        <
        GridItem xs = {
            12
        }
        sm = {
            12
        }
        md = {
            4
        } >
        <
        Card chart >
        <
        CardHeader color = "success" >
        <
        ChartistGraph className = "ct-chart"
        data = {
            dailySalesChart.data
        }
        type = "Line"
        options = {
            dailySalesChart.options
        }
        listener = {
            dailySalesChart.animation
        }
        /> <
        /CardHeader> <
        CardBody >
        <
        h4 className = {
            classes.cardTitle
        } > Daily Sales < /h4> <
        p className = {
            classes.cardCategory
        } >
        <
        span className = {
            classes.successText
        } >
        <
        ArrowUpward className = {
            classes.upArrowCardCategory
        }
        /> 55% <
        /span>{" "}
        increase in today sales. <
        /p> <
        /CardBody> <
        CardFooter chart >
        <
        div className = {
            classes.stats
        } >
        <
        AccessTime / > updated 4 minutes ago <
        /div> <
        /CardFooter> <
        /Card> <
        /GridItem> <
        GridItem xs = {
            12
        }
        sm = {
            12
        }
        md = {
            4
        } >
        <
        Card chart >
        <
        CardHeader color = "warning" >
        <
        ChartistGraph className = "ct-chart"
        data = {
            emailsSubscriptionChart.data
        }
        type = "Bar"
        options = {
            emailsSubscriptionChart.options
        }
        responsiveOptions = {
            emailsSubscriptionChart.responsiveOptions
        }
        listener = {
            emailsSubscriptionChart.animation
        }
        /> <
        /CardHeader> <
        CardBody >
        <
        h4 className = {
            classes.cardTitle
        } > Email Subscriptions < /h4> <
        p className = {
            classes.cardCategory
        } > Last Campaign Performance < /p> <
        /CardBody> <
        CardFooter chart >
        <
        div className = {
            classes.stats
        } >
        <
        AccessTime / > campaign sent 2 days ago <
        /div> <
        /CardFooter> <
        /Card> <
        /GridItem> <
        GridItem xs = {
            12
        }
        sm = {
            12
        }
        md = {
            4
        } >
        <
        Card chart >
        <
        CardHeader color = "danger" >
        <
        ChartistGraph className = "ct-chart"
        data = {
            completedTasksChart.data
        }
        type = "Line"
        options = {
            completedTasksChart.options
        }
        listener = {
            completedTasksChart.animation
        }
        /> <
        /CardHeader> <
        CardBody >
        <
        h4 className = {
            classes.cardTitle
        } > Completed Tasks < /h4> <
        p className = {
            classes.cardCategory
        } > Last Campaign Performance < /p> <
        /CardBody> <
        CardFooter chart >
        <
        div className = {
            classes.stats
        } >
        <
        AccessTime / > campaign sent 2 days ago <
        /div> <
        /CardFooter> <
        /Card> <
        /GridItem> <
        /GridContainer> <
        GridContainer >
        <
        GridItem xs = {
            12
        }
        sm = {
            12
        }
        md = {
            6
        } >
        <
        CustomTabs title = "Tasks:"
        headercolor = "secondary"
        tabs = {
            [{
                    tabName: "Bugs",
                    tabIcon: BugReport,
                    tabContent: ( <
                        Tasks checkedIndexes = {
                            [0, 3]
                        }
                        tasksIndexes = {
                            [0, 1, 2, 3]
                        }
                        tasks = {
                            bugs
                        }
                        />
                    ),
                },
                {
                    tabName: "Website",
                    tabIcon: Code,
                    tabContent: ( <
                        Tasks checkedIndexes = {
                            [0]
                        }
                        tasksIndexes = {
                            [0, 1]
                        }
                        tasks = {
                            website
                        }
                        />
                    ),
                },
                {
                    tabName: "Server",
                    tabIcon: Cloud,
                    tabContent: ( <
                        Tasks checkedIndexes = {
                            [1]
                        }
                        tasksIndexes = {
                            [0, 1, 2]
                        }
                        tasks = {
                            server
                        }
                        />
                    ),
                },
            ]
        }
        /> <
        /GridItem> <
        GridItem xs = {
            12
        }
        sm = {
            12
        }
        md = {
            6
        } >
        <
        Card >
        <
        CardHeader color = "warning" >
        <
        h4 className = {
            classes.cardTitleWhite
        } > Employees Stats < /h4> <
        p className = {
            classes.cardCategoryWhite
        } >
        New employees on 15 th September, 2016 <
        /p> <
        /CardHeader> <
        CardBody >
        <
        Table tableHeaderColor = "warning"
        tableHead = {
            ["ID", "Name", "Salary", "Country"]
        }
        tableData = {
            [
                ["1", "Dakota Rice", "$36,738", "Niger"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                ["4", "Philip Chaney", "$38,735", "Korea, South"],
            ]
        }
        /> <
        /CardBody> <
        /Card> <
        /GridItem> <
        /GridContainer> <
        /div>
    );
}