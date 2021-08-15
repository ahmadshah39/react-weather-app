import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px 15px;
  .nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .nav a{
    width:48px;
    height:48px;
    padding:10px;
    border-radius:50%;
    background-color: #ffffff;
  }
  .nav a:hover, .nav a:focus{
    background-color:#fff;
  }
  
`;
