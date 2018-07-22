import fetch from 'node-fetch'
import axios from 'axios'

const MOVIES_API_URL = 'https://yts.am/api/v2/list_movies.json?';
const MOVIE_DETAIL_API_URL = 'https://yts.am/api/v2/movie_details.json';
const SUGGESTION_API_URL = 'https://yts.am/api/v2/movie_suggestions.json';

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIES_API_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
}

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAIL_API_URL, {
    params: {
      movie_id: id
    }
  });

  return movie;
}

export const getSuggestion = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(SUGGESTION_API_URL, {
    params: {
      movie_id: id
    }
  });

  return movies;
}