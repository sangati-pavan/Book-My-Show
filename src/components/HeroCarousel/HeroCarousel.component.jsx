import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
// import { NextArrow, PrevArrow } from "./Arrows.component";
import axios from "axios";

const HeroCarousel = () => {
  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTZiYmI4ZjhlNDZhYmVmMDAxYTI1MTBiOTA4NjVmMSIsIm5iZiI6MTcyNzY3MTc5Mi40NzEwNTEsInN1YiI6IjY2ZWU3ZWJiYjM0OGJlYTRlYjNhZjliNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KW_YKIz8h7nbiMkwcVtks-cakN3GHXD2_ak8EaOWLZk",
        },
      };
      try {
        const response = await axios.request(options);
        // console.log(response.data.results);
        setMovieList(response.data.results);
      } catch (err) {
        setMovieList(err.message);
      }
    };
    getMovieList();
  }, []);

  // just to check whether the api call is working or not
  // {
  //   MovieList.map((movie)=>{
  //     console.log(movie);
  //   })
  // }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  let settingsLarge = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="bg-slate-800 lg:hidden">
        <HeroSlider {...settings}>
          {MovieList.map((movie, index) => {
            return (
              <div className="w-full h-72 md:h-80" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt="heor banner"
                  className="w-full h-full rounded-md object-cover"
                  // Extras
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://www.tgsin.in/images/joomlart/demo/default.jpg";
                  }}
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block w-70 bg-slate-800">
        <HeroSlider {...settingsLarge}>
          {MovieList.map((movie, index) => {
            return (
              <div className="w-full h-96" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt="heor banner"
                  className="w-full h-full rounded-md object-cover"
                  // Extras
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://www.tgsin.in/images/joomlart/demo/default.jpg";
                  }}
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;