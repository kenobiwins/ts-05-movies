import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    width: 320px;
    padding: 0px 20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 16px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
