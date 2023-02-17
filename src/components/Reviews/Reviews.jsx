import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieAndInfoById } from 'services/API';
import { NOT_FOUND_IMAGE } from 'constants/BaseURLs';
import { STATUS } from 'constants/status.constants';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      setStatus(STATUS.pending);
      getMovieAndInfoById(movieId, '/reviews').then(({ results }) => {
        if (results.length === 0) {
          setStatus(STATUS.rejected);
          throw new Error("We don't have any reviews for this movie.");
        } else {
          setStatus(STATUS.resolved);
          return setReviews(
            results.map(({ id, author, content }) => {
              return { id, author, content };
            })
          );
        }
      });
    } catch (Error) {
      console.log(Error);
    }
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 &&
        status === 'resolved' &&
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content} </p>
            </li>
          );
        })}
      {status === 'rejected' && (
        <div>
          <p>We don't have any reviews for this movie.</p>
          <img src={NOT_FOUND_IMAGE} alt="what?" />
        </div>
      )}
    </ul>
  );
};
