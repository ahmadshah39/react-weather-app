import styled from "styled-components";
export const BodyWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${(props) => props.theme.bodyBg};
`;
export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  position: relative;
  max-width: 100%;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  /* @media (min-width: 1400px) {
    max-width: 1320px;
  } */
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.text};
  margin: 30px 0;
  text-align: center;
  font-size: 36px;
  font-weight: 400;
`;
