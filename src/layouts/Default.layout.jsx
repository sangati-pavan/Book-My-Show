import React from "react";
import Navbar from "../components/Navbars/Navbar.components";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <h1>
          this is default layout 
        </h1>
      </div>
    );
  };

export default DefaultLayout;