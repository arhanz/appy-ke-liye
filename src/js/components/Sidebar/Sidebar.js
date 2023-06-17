/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import propTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import AgencyAdminNavbarLinks from "components/Navbars/AgencyAdminNavbarLinks.js";
import AgencyAgentNavbarLinks from "components/Navbars/AgencyAgentNavbarLinks.js";
import CustomerNavbarLinks from "components/Navbars/CustomerNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  let location = useLocation();
  const userRole = useSelector(
    ({
      user: {
        user: { systemRole },
      },
    }) => systemRole
  );
  const agencyId = useSelector(
    ({
      user: {
        user: { _agency },
      },
    }) => _agency
  );
  const userId = useSelector(
    ({
      user: {
        user: { sub },
      },
    }) => sub
  );
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname === routeName;
  }
  const { color, logo, image, logoText, routes } = props;
  var links = (
    <List className={classes.list}>
      {" "}
      {routes.map((prop, key) => {
        if (prop.name === undefined) {
          return null;
        }
        var activePro = " ";
        var listItemClasses;
        // if (prop.path === "/upgrade-to-pro") {
        //   activePro = classes.activePro + " ";
        //   listItemClasses = classNames({
        //     [" " + classes[color]]: true,
        //   });
        // } else {
        listItemClasses = classNames({
          [" " + classes[color]]: activeRoute(prop.layout + prop.path),
        });
        // }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
        });
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {" "}
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive,
                  })}
                >
                  {prop.icon}{" "}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive,
                  })}
                />
              )}{" "}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive,
                })}
                disableTypography={true}
              />{" "}
            </ListItem>{" "}
          </NavLink>
        );
      })}{" "}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <Link
        to="/"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive,
        })}
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />{" "}
        </div>{" "}
        {logoText}{" "}
      </Link>{" "}
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}{" "}
          <div className={classes.sidebarWrapper}>
            {" "}
            {userRole === "SUPER_ADMIN" ? (
              <AdminNavbarLinks agencyId={agencyId} />
            ) : userRole === "AGENT" ? (
              <AgencyAgentNavbarLinks userId={userId} />
            ) : userRole === "ADMIN" || userRole === "OWNER" ? (
              <AgencyAdminNavbarLinks agencyId={agencyId} />
            ) : (
              <CustomerNavbarLinks userId={userId} />
            )}{" "}
            {links}{" "}
          </div>{" "}
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{
                backgroundImage: "url(" + image + ")",
              }}
            />
          ) : null}{" "}
        </Drawer>{" "}
      </Hidden>{" "}
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          {brand} <div className={classes.sidebarWrapper}> {links} </div>{" "}
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{
                backgroundImage: "url(" + image + ")",
              }}
            />
          ) : null}{" "}
        </Drawer>{" "}
      </Hidden>{" "}
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: propTypes.bool,
  handleDrawerToggle: propTypes.func,
  bgColor: propTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: propTypes.string,
  image: propTypes.string,
  logoText: propTypes.string,
  routes: propTypes.arrayOf(propTypes.object),
  open: propTypes.bool,
};
