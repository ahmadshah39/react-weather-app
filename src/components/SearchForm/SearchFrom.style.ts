import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  form {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .search-input {
    width: 100%;
    height: 40px;
    border-radius: 50px;
    border: none;
    font-size: 16px;
    color: #5d5d5d;
    padding: 10px 20px;
    background-color: #ffffff;
    outline: none;
  }
  .search-input:focus,
  .search-input:focus-visible,
  .search-input:focus-within,
  input:-internal-autofill-selected
  {
    background-color: #ffffff;
  }
  .search-submit {
    position: absolute;
    right: 10px;
    border:none;
    width:28px;
    height:28px;
    background-color:transparent;
    border-radius:50%;
  }
`;
