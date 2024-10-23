import { createContext, useState } from "react";

export const MovieContext = createContext(); // Ensure export is correct

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState({
    id: 0,
    originalTitle: "",
    overview: "",
    imageSet: "",
    rating: ""
  });

  const [loading, setLoading] = useState(true);

  return (
    <MovieContext.Provider value={{ movie, setMovie, loading, setLoading }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;