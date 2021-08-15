import styled, { keyframes } from "styled-components";

const translate = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  background-color: #bdbdbd;
  div {
    height: 4px;
    width: 100%;
    background-color: #3b82f6;
    animation: ${translate} 0.5s linear infinite;
  }
`;
const LoadingBar = () => {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
};

export default LoadingBar;
