import React from "react";
import MovieNavbar from "../components/Navbars/MovieNavbar.component";

const MovieLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
        <h1>this is the movie layout</h1>
      </div>
    );
  };

export default MovieLayout;