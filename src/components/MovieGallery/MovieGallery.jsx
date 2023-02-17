import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieGalleryItem } from './MovieGallery.styled';

export const MovieGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <MovieGalleryItem to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MovieGalleryItem>
          </li>
        );
      })}
    </>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
