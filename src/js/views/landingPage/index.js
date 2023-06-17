import React, { useState } from "react";
import TopNavBar from "./components/topNavBar";
import MainTopMenu from "./components/mainTopMenu";
import MainCaraousal from "./components/mainCarousal";
import AboutUs from "./components/aboutUs";
import Adventure from "./components/adventure";
import PerfectTrip from "./Perfect-Trip/perfectTrip";
import BookingQuickForm from "./components/bookingQuickForm";
import Testmonials from "./components/testmonials";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";
import Packages from "./Packages/packages";

import "./index.css";
import Hotel from "./components/images/Home Page/Hotels-Bg.webp";
import Character from "./components/images/Home Page/Charter-Bg.webp";
import Flight_Hotel from "./components/images/Home Page/Flights_Hotels-Bg.webp";
import Flight from "./components/images/Home Page/Flights-Bg.webp";
import { HeroSection } from "./utils/constant";

function LandingPage() {
  const [image, setImage] = useState(Flight);
  const [packageRender, setPackageRender] = useState("all");

  const setBackgroundImage = (tabName) => {
    setImage((prev) => {
      switch (tabName) {
        case HeroSection.FLIGHT: {
          prev = Flight;
          break;
        }
        case HeroSection.HOTEL: {
          prev = Hotel;
          break;
        }
        case HeroSection.FLIGHT_HOTEL: {
          prev = Flight_Hotel;
          break;
        }
        case HeroSection.CHARACTER: {
          prev = Character;
          break;
        }
      }
      return prev;
    });
  };

  return (
    <>
      <section className="container mx-auto">
        <TopNavBar />
        <hr />
        <MainTopMenu />
      </section>
      <section>
        <MainCaraousal image={image}>
          <BookingQuickForm setImage={setBackgroundImage} />{" "}
        </MainCaraousal>{" "}
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Packages setPackageRender={setPackageRender} />{" "}
      </section>
      <section>
        <Adventure />
      </section>
      <section>
        <PerfectTrip />
      </section>
      <section>
        <Testmonials />
      </section>
      <section>
        <ContactForm />
      </section>
      <section>
        <Footer />
      </section>{" "}
    </>
  );
}
export default LandingPage;
