import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { getMovieAndInfoById } from 'services/API';

import { BASE_POSTER_URL, FAKE_POSTER_URL } from 'constants/BaseURLs';
import { Box } from 'BaseStyles/Box';
import { NavItem } from 'components/SharedLayout/SharedLayout.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const handleToBack = () => {
    // console.log(location.state);
    navigate(location.state?.from || '/movies');
  };
  useEffect(() => {
    getMovieAndInfoById(movieId).then(data => {
      return setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <button onClick={handleToBack}>to back</button>
          <Box display="grid" gridTemplateColumns="320px 1fr" gridGap="12px">
            <img
              src={
                movie.poster_path === null || undefined
                  ? FAKE_POSTER_URL
                  : `${BASE_POSTER_URL + movie.poster_path}`
              }
              alt={movie.title}
            />
            <div>
              <h2>
                {`${movie.title}`}{' '}
                <span> ({movie.release_date.slice(0, 4)})</span>
              </h2>
              <p>User score: {(movie.vote_average * 10).toFixed(0)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(el => {
                  return <li key={el.name}>{el.name}</li>;
                })}
              </ul>
            </div>
          </Box>
          <div>
            <NavItem to={'cast'} state={location.state}>
              Cast
            </NavItem>
            <NavItem to={'reviews'} state={location.state}>
              Reviews
            </NavItem>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
