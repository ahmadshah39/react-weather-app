import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.cardBG};
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 720px;
  margin: 50px auto;
  border-radius: 10px;
  color: ${(props) => props.theme.text};
  @media (min-width: 768px) {
    padding: 40px;
  }
  .top-bar {
    display: flex;
    justify-content: space-between;
  }
  h4 {
    color: ${(props) => props.theme.text};
  }
  .temperature {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;
    @media (min-width: 476px) {
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }
  .temperature-info {
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
  }
  .temperature-temp {
    font-size: 34px;
    line-height: 1.2;
  }
  .temperature-icon .weather-img {
    width: 100px;
    height: 100px;
    @media (min-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }
  .temperature-icon img {
    width: 100px;
    @media (min-width: 768px) {
      width: 100%;
    }
  }
  .taglist {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
  .tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
  }
  .tags .tag-text {
    font-size: 12px;
  }
  .tags img {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
  .enter-loc {
    color: ${(props) => props.theme.text};
    text-align: center;
  }
`;
