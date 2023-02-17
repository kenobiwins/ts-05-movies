import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
const API_KEY = 'f516fdc3d4918369a6ad5ae834597c19';

export const getMovies = async (params = {}) => {
  const { data } = await moviesApi.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
      ...params,
    },
  });
  return data;
};

export const getMovieBySearch = async (params = {}) => {
  const { data } = await moviesApi.get('search/movie', {
    params: { api_key: API_KEY, ...params },
  });
  return data;
};

export const getMovieAndInfoById = async (id, type = '', params = {}) => {
  const { data } = await moviesApi.get(`movie/${id}${type}`, {
    params: {
      api_key: API_KEY,
      ...params,
    },
  });
  return data;
};
