import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  loginCustomer,
  loginAgency,
  decodeTokenCustomer,
  decodeTokenAgency,
} from "crud";
import { setToken, setUser, setLoading, unsetLoading } from "redux/actions";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MuiAlert from "@material-ui/lab/Alert";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FlyWithZOKILogo from "assets/images/Navbar and footer/FlyWithZOKILogo.webp";
import { useHistory, Link,Navigate } from "react-router-dom";

function Alert(props) {
  return <MuiAlert variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {" "}
      {"Copyright © "} <Link color="inherit"> Zoki </Link>{" "}
      {new Date().getFullYear()} {"."}{" "}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [userRole, setUserRole] = useState("customer");
  const [email, setEmail] = useState("agency@zoki.com");
  const [password, setPassword] = useState("12345678");
  // const [remember, setRemember] = useState(false);
  const [loginStatus, setLoginStatus] = useState({
    status: "",
    msg: "",
  });

  const loginCustomerHandler = () => {
    loginCustomer({
      email,
      password,
    })
      .then((res) => {
        dispatch(setToken(res.data.data.accessToken));
        decodeTokenCustomer(res.data.data.accessToken)
          .then((res) => {
            console.log(res.data);
            setEmail("");
            setPassword("");
            setLoginStatus({
              status: "success",
              msg: "Login Success !",
            });
            dispatch(setUser(res.data.data));
            <Navigate to="/customer/dashboard" replace={true} />
          })
          .catch((error) => {
            console.log(error);
            setLoginStatus({
              status: "error",
              msg: "Invalid email or password.",
            });
            dispatch(unsetLoading());
          });
      })
      .catch((error) => {
        console.log(error);
        setLoginStatus({
          status: "error",
          msg: "Invalid email or password.",
        });
        dispatch(unsetLoading());
      });
  };

  const loginAgencyHandler = () => {
    loginAgency({
      email,
      password,
    }).then((res) => {
      dispatch(setToken(res.data.data.accessToken));
      decodeTokenAgency(res.data.data.accessToken)
        .then((res) => {
          setEmail("");
          setPassword("");
          setLoginStatus({
            status: "success",
            msg: "Login Success !",
          });
          dispatch(setUser(res.data.data));
          history.push("/agency/dashboard");
        })
        .catch((error) => {
          console.log(error);
          dispatch(unsetLoading());
          setLoginStatus({
            status: "error",
            msg: "Invalid email or password.",
          });
        });
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(setLoading());
    // userRole === "customer" ? loginCustomerHandler() : loginAgencyHandler()
    if (userRole === "customer") {
      loginCustomerHandler();
    } else {
      loginAgencyHandler();
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Box
          justifyContent="center"
          alignContent="center"
          textAlign="center"
          my={2}
        >
          <Link to="/">
            <img
              src={FlyWithZOKILogo}
              style={{
                width: "25%",
              }}
              alt="Fly WIth ZOKI Logo"
            />
          </Link>{" "}
        </Box>{" "}
        <Typography component="h1" variant="h5">
          Let & apos; s Fly with Zoki!
        </Typography>{" "}
        <form className={classes.form} onSubmit={submitFormHandler}>
          <FormControl className="w-100" component="fieldset">
            <RadioGroup
              className="d-flex justify-content-center"
              row
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <FormControlLabel
                value="customer"
                control={<Radio />}
                label="Customer"
              />
              <FormControlLabel
                value="agent"
                control={<Radio />}
                label="Agent"
              />
              <FormControlLabel
                value="agency"
                control={<Radio />}
                label="Agency"
              />
            </RadioGroup>{" "}
          </FormControl>{" "}
          {loginStatus.status && (
            <Alert className="w-100" severity={loginStatus.status}>
              {" "}
              {loginStatus.msg}{" "}
            </Alert>
          )}{" "}
          <Box my={2}>
            <TextField
              variant="outlined"
              required
              label="Email Address"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Box>{" "}
          <Box my={2}>
            <TextField
              variant="outlined"
              required
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
          </Box>{" "}
          <FormControlLabel
            control={<Checkbox value="remember" />}
            label="Remember me"
          />
          <Button
            type="submit"
            className={`btn px-4 p-2 zoki-btn w-100 ${classes.submit}`}
          >
            Sign In{" "}
          </Button>{" "}
          <Grid container>
            <Grid item xs>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={submitFormHandler}
              >
                Forgot password ?
              </div>{" "}
            </Grid>{" "}
            <Grid item>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => history.push("/signup")}
              >
                {"Don't have an account? Sign Up"}{" "}
              </div>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </form>{" "}
      </div>{" "}
      <Box mt={8}>
        <Copyright />
      </Box>{" "}
    </Container>
  );
}
