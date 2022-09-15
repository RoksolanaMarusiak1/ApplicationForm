import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Stepper from "./Stepper/CustomStepper";

const STEPS = [
  {
    name: "Product and Amount",
    link: "/step1",
  },
  {
    name: "Company",
    link: "/step2",
  },
  {
    name: "Contact person",
    link: "/step3",
  },
  {
    name: "Beneficial owners",
    link: "/step4",
  },
  {
    name: "Factoring type",
    link: "/step5",
  },
  {
    name: "Third parties",
    link: "/step6",
  },
];

const Layout = () => {
  return (
    <div style={{ background: "#f5f5f5" , minHeight:"100vh" }}>
      <Header />
      <div className="layout-content-wrapper">
        <div className="layout-content-wrapper__stepper">
          <Stepper pages={STEPS} />
        </div>
        <div className="layout-content-wrapper__content">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
