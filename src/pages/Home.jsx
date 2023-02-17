import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/API';
import { Box } from 'BaseStyles/Box';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <main>
      <Box as="section">
        <h2>Trending today</h2>
        <Box as="ul" display="grid" gridGap="6px" mt="6px">
          {movies && <MovieGallery movies={movies} />}
        </Box>
      </Box>
    </main>
  );
};
