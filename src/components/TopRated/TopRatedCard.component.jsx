import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 px-1 md:px-3">
        <img
          src={`https://image.tmdb.org/t/p/original${props.src}`}
          alt="Entertainment"
          className="w-96 h-96 rounded-lg"
          // Extras
          onError={(e) => {
            e.currentTarget.src =
              "https://www.tgsin.in/images/joomlart/demo/default.jpg";
          }}
          id={props.movieId}
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated",
        params: { language: "en-US", page: "1", region: "India" },
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

  // ************************ test code ***************************

  // {
  //   MovieList.map((movie) => {
  //     console.log(movie.Title);
  //   });
  // }

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {MovieList.map((movie, index) => (
          <EntertainmentCard
            src={movie.poster_path}
            movieId={movie.id}
            key={index}
          />
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;