import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`;
export const ErrorMessage = styled.p`
  color: var(--white-color);
`;
