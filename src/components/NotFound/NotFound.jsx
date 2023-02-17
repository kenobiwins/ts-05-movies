import { NOT_FOUND } from 'constants/BaseURLs';

export const NotFound = () => {
  return (
    <div>
      <img width="100%" height="100vh" src={NOT_FOUND} alt="not found" />
    </div>
  );
};
