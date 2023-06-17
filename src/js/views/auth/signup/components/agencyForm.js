import React, {
    useState
} from "react";
import {
    makeStyles
} from "@material-ui/core/styles";
import {
    useDispatch
} from "react-redux";
import {
    useHistory,
Navigate
} from "react-router-dom";
import {
    signUpAgency
} from "crud";
import {
    setLoading,
    unsetLoading
} from "redux/actions";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Button from "components/CustomButtons/Button.js";
import Checkbox from "@material-ui/core/Checkbox";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert variant = "filled" { ...props
    }
    />;
}

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
};

const useStyles = makeStyles(styles);

export default function AgencyForm() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [businessName, setBusinessName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const [subscribe, setSubscribe] = useState(false);
    const [signUpStatus, setSignUpStatus] = useState({
        status: "",
        msg: ""
    });

    const clearHandler = () => {
        setBusinessName("");
        setFirstName("");
        setLastName("");
        setMobile("");
        setEmail("");
        setPassword("");
    };

    const createAgencyHandler = async (e) => {
        e.preventDefault();
        dispatch(setLoading());
        const payload = {
            firstName,
            lastName,
            businessName,
            contactInfo: {
                mobile,
                email,
            },

            password,
        };

        signUpAgency(payload)
            .then((res) => {
                let response = res.json();
                setSignUpStatus({
                    status: "success",
                    msg: "Congratulations! New Agency Created.",
                });
                dispatch(unsetLoading());
                clearHandler();
                return response;
                        <Navigate to="/login" replace={true} />
            })
            .catch((error) => {
                console.log(error);
                setSignUpStatus({
                    status: "error",
                    msg: error.response.data.error,
                });
                dispatch(unsetLoading());
            });
    };

    return ( <
        > {
            signUpStatus.status && ( <
                Alert className = "w-100 mb-4"
                severity = {
                    signUpStatus.status
                } > {
                    signUpStatus.msg
                } <
                /Alert>
            )
        } <
        form onSubmit = {
            createAgencyHandler
        }
        className = {
            `m-0 ${classes.form}`
        } >
        <
        Grid container spacing = {
            2
        } >
        <
        Grid item xs = {
            12
        }
        sm = {
            6
        } >
        <
        TextField variant = "outlined"
        required className = "w-full"
        id = "businessName"
        label = "Business Name"
        autoFocus onChange = {
            (e) => setBusinessName(e.target.value)
        }
        value = {
            businessName
        }
        /> <
        /Grid> <
        Grid item xs = {
            12
        }
        sm = {
            6
        } >
        <
        TextField variant = "outlined"
        required className = "w-full"
        id = "firstName"
        label = "First Name"
        onChange = {
            (e) => setFirstName(e.target.value)
        }
        value = {
            firstName
        }
        /> <
        /Grid> <
        Grid item xs = {
            12
        }
        sm = {
            6
        } >
        <
        TextField variant = "outlined"
        required className = "w-full"
        id = "lastName"
        label = "Last Name"
        onChange = {
            (e) => setLastName(e.target.value)
        }
        value = {
            lastName
        }
        /> <
        /Grid> <
        Grid item xs = {
            12
        }
        sm = {
            6
        } >
        <
        TextField variant = "outlined"
        required className = "w-full"
        id = "mobile"
        label = "Mobile No."
        onChange = {
            (e) => setMobile(e.target.value)
        }
        value = {
            mobile
        }
        /> <
        /Grid> <
        Grid item xs = {
            12
        }
        sm = {
            6
        } >
        <
        TextField variant = "outlined"
        required className = "w-full"
        id = "email"
        type = "email"
        label = "Email Address"
        onChange = {
            (e) => setEmail(e.target.value)
        }
        value = {
            email
        }
        /> <
        /Grid> <
        Grid item xs = {
            12
        }
        sm = {
            6
        } >
        <
        TextField variant = "outlined"
        required className = "w-full"
        label = "Password"
        type = "password"
        id = "password"
        onChange = {
            (e) => setPassword(e.target.value)
        }
        value = {
            password
        }
        /> <
        /Grid>

        <
        Grid item xs = {
            12
        } >
        <
        FormControlLabel control = { < Checkbox value = "allowExtraEmails"
            color = "secondary" / >
        }
        label = "I want to receive inspiration, marketing promotions and updates via email." /
        >
        <
        /Grid> <
        /Grid> <
        Button type = "submit"
        className = {
            `btn px-4 p-3 rounded-pill w-100 ${classes.submit}`
        }
        style = {
            {
                fontSize: 14,
                color: "#CFBD45",
                backgroundColor: "#18181b",
            }
        } >
        Sign Up <
        /Button> <
        Grid className = "mt-2"
        container >
        <
        Grid item >
        <
        div style = {
            {
                cursor: "pointer"
            }
        }
        onClick = {
            () => history.push("/login")
        } >
        {
            "Already have an account? Sign in"
        } <
        /div> <
        /Grid> <
        /Grid> <
        /form> <
        />
    );
}