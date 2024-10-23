import React, { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";
import MovieInfo from "./Movieinfo.component";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", ");
  return (
    <>
      {/* for mobile and tab screen */}
      <div>
        <div className="w-full lg:hidden">
          {movie?.imageSet?.verticalPoster?.w480 ? (
            <img
              src={movie.imageSet.verticalPoster.w480}
              alt="cover poster"
              className="m-4 rounded"
              style={{ width: "calc(100% - 2rem)" }}
            />
          ) : (
            <p>No poster available</p>
          )}
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>{movie.rating}% Fresh</h4>
              <h4>Available in Languages</h4>
              <h4>Genres: {genres}</h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Rent $149
            </button>
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              buy $249
            </button>
          </div>
        </div>

        {/* for larger screen size */}
        <div
          className="relative hidden w-full lg:block"
          style={{ height: "26rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34,34,34) 24.9%, rgb(34,34,34) 38.2%, rgba(34,34,34,0.4) 97.47%, rgb(34,34,34) 100%)",
            }}
          >
            <div className="absolute z-30 left-24 top-5 flex items-center gap-10">
              <div className="w-64 h-96">
                {movie?.imageSet?.verticalPoster?.w720 ? (
                  <img
                    src={movie.imageSet.verticalPoster.w720}
                    alt="poster"
                    className="w-full h-full rounded-lg"
                  />
                ) : (
                  <p style={{ color: "white" }}>No poster available</p>
                )}
              </div>
              <div>
                <MovieInfo movie={movie} genres={genres} />
              </div>
            </div>
            {movie?.imageSet?.horizontalBackdrop?.w1080 ? (
              <img
                src={movie.imageSet.horizontalBackdrop.w1080}
                alt="poster"
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <p style={{ color: "white" }}>No poster available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHero;