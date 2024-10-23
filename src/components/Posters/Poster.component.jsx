import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    <>
      <Link to={`/movie/${props.id}/`}>
        <div className="flex flex-col items-center gap-2 px-1 md:px-3">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
              alt="poster"
              className="w-96 h-96 rounded-lg object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://www.tgsin.in/images/joomlart/demo/default.jpg";
              }}
            />
          </div>
          <h3
            className={`text-lg font-bold ${
              props.isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {props.title}
          </h3>
        </div>
      </Link>
    </>
  );
};

export default Poster;