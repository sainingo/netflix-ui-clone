import {apiKey} from './ApiKey'

const request = {
    popularMovie: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    topRateMovie: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    trendingMovie: `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`,
    upcomingMovie: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
};

export default request;