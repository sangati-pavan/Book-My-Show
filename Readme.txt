Project Title - Book_My_Show Application

A full-stack Book My Show clone using MERN (MongoDB, Express, React, Node). Features movie browsing, booking, user authentication, and responsive UI. Includes frontend, backend, and deployment.

Pages :

    1. Home (uses default hoc)
    2. Movies (uses movie hoc)
    3. Play a Movie (uses default hoc)

HOCs/Layouts :

    1. Default (includes navbar and footer)
    2. Movie

Components :

    1. cast
    2. Entertainment (includes cards)
    3. banner section (or) hero carousel (with arrow buttons)
    4. movie (includes hero section and movie info section)
    5. navigation bar (includes normal navbar and movie navbar)
    6. payment modal (using razerpay)
    7. play filters
    8. posters
    9. poster sliders

Extra :

    1. react-slick
    2. headlessui
    3. axios
    4. react-icons

APIs :

    1. omdbapi.com
        https://www.omdbapi.com/?apikey=1bc5b78a&s=kill&type=movie

    2. sampleapis.com
        https://api.sampleapis.com/movies/animation

    3. Advance Movie Api (by Rapid APIs)

        import axios from 'axios';

            const options = {
            method: 'GET',
            url: 'https://advance-movie-api.p.rapidapi.com/api/v1/streamitfree/genres/Documentary/1',
            headers: {
                'x-rapidapi-key': 'your-key',
                'x-rapidapi-host': 'your-host-name',
                'X-RapidAPI-Proxy-Secret': 'your-proxy-secret'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
