import React, { useState } from "react";
import classNames from "classnames";
import { useSnackbar } from "notistack";
import { useHistory, useLocation,Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unsetToken, unsetUser, setLoading, unsetLoading } from "redux/actions";
import { logoutCustomer, getSpecificWallet } from "crud";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function CustomerNavbarLinks({ userId }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  // const notification = useSelector((state) => state.notification);
  const { enqueueSnackbar } = useSnackbar();
  const [openNotification, setOpenNotification] = useState(null);
  const [openProfile, setOpenProfile] = useState(null);
  const [balance, setBalance] = useState(0);
  // const [notifications, setNotifications] = useState(6);

  // const handleNotifications = (event) => {
  //   setNotifications();
  // };

  React.useEffect(async () => {
    if (userId) {
      try {
        const wallet = await getSpecificWallet(userId);
        // console.log(wallet.data.data.wallet.balance)
        setBalance(wallet.data.data.wallet.balance);
      } catch (error) {
        if (error.response.status === 401) {
                    <Navigate to="/401" replace={true} />
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
          enqueueSnackbar("Unable to fetch data.", {
            variant: "error",
          });
        }
      }
    }
  }, []);

  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };

  const handleCloseNotification = () => {
    setOpenNotification(null);
  };

  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };

  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  const viewUserProfileHandler = () => {
    dispatch(setLoading());
    const layout = location.pathname.split("/")[1];
    <Navigate to={`/${layout}/profile`} replace={true} />
        dispatch(unsetLoading());
    setOpenProfile(null);
  };

  const viewWalletHandler = () => {
    dispatch(setLoading());
    const layout = location.pathname.split("/")[1];
        <Navigate to={`/${layout}/wallet`} replace={true} />
    dispatch(unsetLoading());
    setOpenProfile(null);
  };

  const logouthandler = () => {
    dispatch(setLoading());
    logoutCustomer()
      .then((res) => {
        // console.log(res.data)
        dispatch(unsetToken());
        dispatch(unsetUser());
                <Navigate to="/login" replace={true} />
      })
      .catch((error) => {
        if (error.response.status === 401) {
                    <Navigate to="/401" replace={true} />
        } else {
          console.log(error.response.data);
          console.log(error.response.status);
          enqueueSnackbar("Unable to logout.", {
            variant: "error",
          });
        }
      });
  };

  // console.log(`notification`, notification);

  return (
    <div>
      <div className={classes.searchWrapper}>
        <p
          onClick={viewWalletHandler}
          className="p-0 m-0"
          style={{
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {`Balance: ${balance}$`}{" "}
        </p>{" "}
      </div>{" "}
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openNotification ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          className={classes.buttonLink}
        >
          <Notifications className={classes.icons} />{" "}
          <span className={classes.notifications}>
            {" "}
            {/* {notification ? notification : 0} */}5{" "}
          </span>{" "}
          <Hidden mdUp implementation="css">
            <p onClick={handleCloseNotification} className={classes.linkText}>
              Notification{" "}
            </p>{" "}
          </Hidden>{" "}
        </Button>{" "}
        <Poppers
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={
            classNames({
              [classes.popperClose]: !openNotification,
            }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Mike John responded to your email{" "}
                    </MenuItem>{" "}
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      You have 5 new tasks{" "}
                    </MenuItem>{" "}
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      You {"'"}
                      re now friend with Andrew{" "}
                    </MenuItem>{" "}
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Another Notification{" "}
                    </MenuItem>{" "}
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Another One{" "}
                    </MenuItem>{" "}
                  </MenuList>{" "}
                </ClickAwayListener>{" "}
              </Paper>{" "}
            </Grow>
          )}{" "}
        </Poppers>{" "}
      </div>{" "}
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />{" "}
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}> My Account </p>{" "}
          </Hidden>{" "}
        </Button>{" "}
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({
              [classes.popperClose]: !openProfile,
            }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={viewUserProfileHandler}
                      className={classes.dropdownItem}
                    >
                      My Profile{" "}
                    </MenuItem>{" "}
                    <Divider light />
                    <MenuItem
                      onClick={logouthandler}
                      className={classes.dropdownItem}
                    >
                      Logout{" "}
                    </MenuItem>{" "}
                  </MenuList>{" "}
                </ClickAwayListener>{" "}
              </Paper>{" "}
            </Grow>
          )}{" "}
        </Poppers>{" "}
      </div>{" "}
    </div>
  );
}
