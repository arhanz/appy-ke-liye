import React from "react";
import propTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-dashboard-react/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Danger(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.dangerText}>
      {" "}
      {children}{" "}
    </div>
  );
}
