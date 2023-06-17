import Home from "@material-ui/icons/Home";
import LocationOn from "@material-ui/icons/LocationOn";
import WalletIcon from "@material-ui/icons/AccountBalanceWallet";
import Dashboard from "views/customer/dashboard";
import Booking from "views/customer/bookings";
import Wallet from "views/customer/wallet";
import Profile from "views/customer/profile";
import Hotels from "views/customer/hotels";
import Packages from "views/customer/packages";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import HotelIcon from "@material-ui/icons/Hotel";

const customerRoutes = [{
        path: "/dashboard",
        name: "Dashboard",
        icon: Home,
        component: Dashboard,
        layout: "/customer",
    },
    {
        path: "/booking",
        name: "Booking",
        icon: LocationOn,
        component: Booking,
        layout: "/customer",
    },
    {
        path: "/hotels",
        name: "Hotels",
        icon: HotelIcon,
        component: Hotels,
        layout: "/customer",
    },
    {
        path: "/packages",
        name: "Packages",
        icon: LocalOfferIcon,
        component: Packages,
        layout: "/customer",
    },
    {
        path: "/wallet",
        name: "Wallet",
        icon: WalletIcon,
        component: Wallet,
        layout: "/customer",
    },
    {
        path: "/profile",
        component: Profile,
        layout: "/customer",
    },
];

export default customerRoutes;