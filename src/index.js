import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./js/router/index";
import { store, persistor } from "redux-store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CustomTheme from "./js/HOC/customTheme";

import "./js/assets/jss/material-dashboard-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
// import "react-image-gallery/styles/css/image-gallery.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <CustomTheme>
          <Router />
        </CustomTheme>
      </BrowserRouter>
    </PersistGate>
  </ReduxProvider>,
  document.getElementById("root")
);
