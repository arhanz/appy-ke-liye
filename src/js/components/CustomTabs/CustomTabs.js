import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import propTypes from "prop-types";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// core components
import Card from "../Card/Card";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";

import styles from "assets/jss/material-dashboard-react/components/customTabsStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  const { headerColor, plainTabs, tabs, title, rtlActive } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive,
  });
  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {" "}
        {title !== undefined ? (
          <div className={cardTitle}> {title} </div>
        ) : null}{" "}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone,
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((prop, key) => {
            var icon = {};
            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />,
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper,
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })}{" "}
        </Tabs>{" "}
      </CardHeader>{" "}
      <CardBody>
        {" "}
        {tabs.map((prop, key) => {
          if (key === value) {
            return <div key={key}> {prop.tabContent} </div>;
          }
          return null;
        })}{" "}
      </CardBody>{" "}
    </Card>
  );
}

CustomTabs.propTypes = {
  headerColor: propTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  title: propTypes.string,
  tabs: propTypes.arrayOf(
    propTypes.shape({
      tabName: propTypes.string.isRequired,
      tabIcon: propTypes.object,
      tabContent: propTypes.node.isRequired,
    })
  ),
  rtlActive: propTypes.bool,
  plainTabs: propTypes.bool,
};
