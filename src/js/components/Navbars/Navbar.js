import React from "react";
import { useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import AgencyAdminNavbarLinks from "./AgencyAdminNavbarLinks.js";
import AgencyAgentNavbarLinks from "./AgencyAgentNavbarLinks.js";
import CustomerNavbarLinks from "./CustomerNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const userRole = useSelector(
    ({
      user: {
        user: { systemRole }
      }
    }) => systemRole
  );
  const agencyId = useSelector(
    ({
      user: {
        user: { _agency }
      }
    }) => _agency
  );
  const userId = useSelector(
    ({
      user: {
        user: { sub }
      }
    }) => sub
  );
  // const routeName = useRouteName();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}></div>{" "}
        <Hidden smDown implementation="css">
          {" "}
          {userRole === "SUPER_ADMIN" ? (
            <AdminNavbarLinks userId={userId} />
          ) : userRole === "AGENT" ? (
            <AgencyAgentNavbarLinks userId={userId} />
          ) : userRole === "ADMIN" || userRole === "OWNER" ? (
            <AgencyAdminNavbarLinks agencyId={agencyId} />
          ) : (
            <CustomerNavbarLinks userId={userId} />
          )}{" "}
        </Hidden>{" "}
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>{" "}
        </Hidden>{" "}
      </Toolbar>{" "}
    </AppBar>
  );
}
