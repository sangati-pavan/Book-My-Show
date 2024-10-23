import React, { useState } from "react";

const MovieInfo = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(999);
  };

  return (
    <>
      {/* <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} /> */}
      <div className="w-full h-full flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold ">
          {props.movie.originalTitle}
        </h1>
        <div className="text-white flex flex-col gap-2">
          <h4>{props.movie.rating}% Fresh</h4>
          <h4>Available in Languages</h4>
          <h4>Genres: {props.genres}</h4>
        </div>
        <div className="flex items-center gap-3 md:px-4 md:w-70 text-xl px-4">
          <button className="bg-red-500 py-3 px-3 text-white font-semibold rounded-lg">
            Rent $149
          </button>
          <button className="bg-red-500 py-3 px-3 text-white font-semibold rounded-lg">
            buy $249
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;