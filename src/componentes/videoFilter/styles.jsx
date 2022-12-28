import styled from "styled-components";

export const Container = styled.nav`
  margin-left: 50px;
  color: white;
  margin-right: 10%;
  margin-left: -10%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    background-color: #121214;
    margin-left: 10%;
    margin-top: 10px;
    width: 100%;
  }

  .list {
    background-color: #000000;
    display: flex;
    margin-bottom: 20px;
    margin-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    img {
      width: 200px;
    }
    p {
      align-items: center;
      margin: 10px;
    }
    @media screen and (max-width: 1200px) {
      width: 300px;
    }

    @media screen and (max-width: 320px) {
      margin-left: 5px;
    }
    @media screen and (max-width: 310px) {
      margin-left: 0px;
      width: 280px;
    }
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  padding: 20px;
  padding-top: 20px;

  button {
    margin-left: 10px;
    background-color: #474545;
    color: white;
    width: 80px;
    font-size: 16px;
    border-radius: 10px;
    border: none;
  }

  button:hover {
    background-color: #232222;
  }
`;
