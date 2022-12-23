import styled from "styled-components";

export const Container = styled.nav`
  width: 100vw;
  height: 100vh;
  background-color: #121214;
  align-items: center;
  text-align: center;

  .video {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;

    @media screen and (max-width: 1200px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
`;
