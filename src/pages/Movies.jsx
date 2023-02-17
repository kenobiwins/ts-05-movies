import { useState, useEffect } from 'react';
import { getMovieBySearch } from 'services/API';
import { useSearchParams } from 'react-router-dom';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { Box } from 'BaseStyles/Box';
import { NOT_FOUND_IMAGE } from 'constants/BaseURLs';
import { STATUS } from 'constants/status.constants';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query === null) {
      return;
    }
    try {
      setQuery(query);
      getMovieBySearch({ query }).then(({ results }) => {
        if (results.length === 0) {
          setStatus(STATUS.rejected);
          throw new Error('results length 0');
        } else {
          setStatus(STATUS.resolved);
          setMovies(results);
          return;
        }
      });
    } catch (error) {
      console.log(error);
    }
    return;
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    setStatus(STATUS.pending);
    setMovies([]);
    setSearchParams(query !== '' ? { query } : {});
    setQuery('');
  };

  const handleInput = value => {
    setQuery(value);
  };

  return (
    <main>
      <section>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchQuery"
            onChange={e => handleInput(e.target.value)}
            value={query}
          />
          <button type="submit">Search</button>
        </form>

        <Box as="ul" display="grid" gridGap="6px" mt="6px">
          {movies.length > 0 && status === STATUS.resolved && (
            <MovieGallery movies={movies} />
          )}
          {status === STATUS.rejected && (
            <div>
              <img src={NOT_FOUND_IMAGE} alt="what?" />
              <p>
                We tried very hard but did not find results for your request
              </p>
            </div>
          )}
        </Box>
      </section>
    </main>
  );
};
