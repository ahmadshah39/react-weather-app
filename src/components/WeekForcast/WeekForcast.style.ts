import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${(props) => props.theme.text};
  overflow-x: auto;
  width: 100%;
  display: flex;
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-wrap: wrap;
  }
  .card {
    padding: 10px;
    background-color: ${(props) => props.theme.cardBG};
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .date {
    font-size: 12px;
  }
  .temprature-maxmin {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
`;
