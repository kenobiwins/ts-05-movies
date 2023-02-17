import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieGalleryItem = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;
