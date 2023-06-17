///////////////////////////////////////////////////////////////
////////////   REACT IMPORTS   //////////////
/////////////////////////////////////////////////////////////
import * as React from "react";

///////////////////////////////////////////////////////////////
//////////////     MUI IMPORTS       ////////////
/////////////////////////////////////////////////////////////
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
    Typography
} from "@material-ui/core";

const topNavBar = () => {
    return ( <
        Box >
        <
        Grid container columns = {
            16
        } >
        <
        Grid item xs = {
            8
        } >
        <
        Typography className = "text-left text-gray-600 mt-3 mb-0 text-base" >
        Contact Us: {
            "  "
        } <
        a href = "tel:12345678"
        className = "zokiHeadings zokiTextBlack" >
        02081254786 {
            "  "
        } <
        /a>
        (Sunday - Friday 9: 00 am - 5: 00 pm) <
        /Typography> <
        /Grid> <
        Grid item xs = {
            8
        } >
        <
        Typography className = "text-right text-gray-600 mt-3 mb-0 text-base" >
        <
        i className = "fa-brands fa-twitter mr-2" > < /i> <
        i className = "fa-brands fa-instagram mr-2" > < /i> <
        i className = "fa-brands fa-linkedin-in mr-2" > < /i> <
        i className = "fa-brands fa-whatsapp mr-2" > < /i> <
        /Typography> <
        /Grid> <
        /Grid> <
        /Box>
    );
};

export default topNavBar;