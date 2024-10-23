import React, { useEffect, useState, useContext } from "react";
import { MovieContext } from "../context/Movie.context";
// import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import MovieHero from "../components/MovieHero/MovieHero.component";
import MovieLayout from "../layouts/Movie.layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const Moviepage = (req, res) => {
  const { id } = useParams();
  const { movie, setMovie, setLoading } = useContext(MovieContext);
  const [bmsExclusive, setBmsExclusive] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      // try {
      //   const imdbId = id;
      //   const url = `http://www.omdbapi.com/?apikey=1bc5b78a&i=${imdbId}&plot=full`
      //   const response = await axios.get(url);
      //   console.log(response.data);
      //   setMovieDetails(response.data);
      // } catch (err) {
      //   setMovieDetails(err.message);
      // }
      const options = {
        method: "GET",
        url: `https://streaming-availability.p.rapidapi.com/shows/${id}`,
        params: {
          country: "in",
          series_granularity: "episode",
          output_language: "en",
        },
        headers: {
          "x-rapidapi-key":
            "4fdca931e9msh699cca90e676263p10b3e2jsn37312706015e",
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        // console.log(response.data);
        // setMovieDetails(response.data);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [id, setMovie, setLoading]);

  useEffect(() => {
    const getSimilarMovies = async () => {
      // if (!movieDetails || !movieDetails.genres) return;
      if (!movie || !movie.genres) return;

      // let movieGenres = movieDetails.genres.map((item) => item.id);
      let movieGenres = movie.genres.map((item) => item.id);

      let newMovieGenres = movieGenres.join(",");
      const options = {
        method: "GET",
        url: "https://streaming-availability.p.rapidapi.com/shows/search/filters",
        params: {
          country: "in",
          series_granularity: "show",
          genres: newMovieGenres,
          order_direction: "asc",
          order_by: "original_title",
          genres_relation: "and",
          output_language: "en",
          show_type: "movie",
        },
        headers: {
          "x-rapidapi-key":
            "4fdca931e9msh699cca90e676263p10b3e2jsn37312706015e",
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        // console.log(response.data.shows);
        setSimilarMovies(response.data.shows);
      } catch (error) {
        console.error(error);
      }
    };
    getSimilarMovies();
  }, [movie]);

  useEffect(() => {
    const requestMovie = async () => {
      const options = {
        method: "GET",
        url: "https://streaming-availability.p.rapidapi.com/shows/search/filters",
        params: {
          country: "ca",
          series_granularity: "show",
          genres: "action",
          order_direction: "asc",
          order_by: "original_title",
          show_original_language: "en",
          keyword: "zombie",
          genres_relation: "and",
          output_language: "en",
          catalogs: "netflix",
          show_type: "movie",
        },
        headers: {
          "x-rapidapi-key":
            "4fdca931e9msh699cca90e676263p10b3e2jsn37312706015e",
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setBmsExclusive(response.data.shows);
      } catch (error) {}
    };
    requestMovie();
  }, [setBmsExclusive]);

  // const settingsCast = {};
  const settings = {
    infinite: false,
    speed: 500,
    slideToShow: 4,
    slideToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 3,
          slideToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slideToShow: 2,
          slideToScroll: 2,
          initialSlide: 3
        },
      },
      {
        breakpoint: 480,
        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          initialSlide: 2
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3 text-2xl">
            About the movie
          </h1>
          <p>{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        {/* recommended Movies Sliders */}
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={similarMovies}
            isDark={false}
          />
        </div>
        <div className="my-8">
          <hr />
        </div>

        {/* bms exclusive Slider */}
        <PosterSlider
          config={settings}
          title="BMS EXCLUSIVE Movies"
          posters={bmsExclusive}
          isDark={false}
        />
      </div>
    </>
  );
};

export default MovieLayout(Moviepage);