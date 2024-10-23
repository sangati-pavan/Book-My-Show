import React, { useState, useEffect } from "react";
import axios from "axios";

// layouts
import DefaultLayout from "../layouts/Default.layout";

// components
import TopRatedCard from "../components/TopRated/TopRatedCard.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import PosterSlide from "../components/PosterSlider/PosterSlider.component";

const Homepage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);

  // popular movies
  useEffect(() => {
    const getPopularMovieList = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        params: { language: "en-US", page: "1", region: "IN" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTZiYmI4ZjhlNDZhYmVmMDAxYTI1MTBiOTA4NjVmMSIsIm5iZiI6MTcyNzY3MTc5Mi40NzEwNTEsInN1YiI6IjY2ZWU3ZWJiYjM0OGJlYTRlYjNhZjliNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KW_YKIz8h7nbiMkwcVtks-cakN3GHXD2_ak8EaOWLZk",
        },
      };
      try {
        const response = await axios.request(options);
        // console.log(response.data);
        setPopularMovies(response.data.results);
      } catch (err) {
        setPopularMovies(err.message);
      }
    };
    getPopularMovieList();
  }, []);

  // upcoming movies
  useEffect(() => {
    const getUpcomingMovies = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/upcoming",
        params: { language: "en-US", page: "1", region: "IN" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTZiYmI4ZjhlNDZhYmVmMDAxYTI1MTBiOTA4NjVmMSIsIm5iZiI6MTcyNzY3MTc5Mi40NzEwNTEsInN1YiI6IjY2ZWU3ZWJiYjM0OGJlYTRlYjNhZjliNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KW_YKIz8h7nbiMkwcVtks-cakN3GHXD2_ak8EaOWLZk",
        },
      };
      try {
        const response = await axios.request(options);
        // console.log(response.data.results);
        setUpcomingMovies(response.data.results);
      } catch (err) {
        setUpcomingMovies(err.message);
      }
    };
    getUpcomingMovies();
  }, []);

  // latest movies
  useEffect(() => {
    const getLatestMovies = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'false',
          language: 'en-US',
          page: '1',
          primary_release_year: '2023',
          region: 'India',
          sort_by: 'popularity.desc'
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTZiYmI4ZjhlNDZhYmVmMDAxYTI1MTBiOTA4NjVmMSIsIm5iZiI6MTcyNzY3MTc5Mi40NzEwNTEsInN1YiI6IjY2ZWU3ZWJiYjM0OGJlYTRlYjNhZjliNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KW_YKIz8h7nbiMkwcVtks-cakN3GHXD2_ak8EaOWLZk'
        }
      };
      try {
        const response = await axios.request(options);
        // console.log(response.data.results);
        setLatestMovies(response.data.results);
      } catch (err) {
        setLatestMovies(err.message);
      }
    };
    getLatestMovies();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Top-Rated Movies
        </h1>
        <TopRatedCard />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlide
          title="Popular Movies"
          subject="List of Popular Movies"
          posters={popularMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premium-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://images.indianexpress.com/2023/06/1200px-Rupay-Logo.pngj"
              alt="rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlide
            title="Upcoming Movies"
            subject="Upcoming Movies every friday"
            posters={upcomingMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="animatedMovies container mx-auto px-4 md:px-12 my-8">
        <PosterSlide
          title="Latest Movies"
          subject="Movies for your kids"
          posters={latestMovies}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayout(Homepage);