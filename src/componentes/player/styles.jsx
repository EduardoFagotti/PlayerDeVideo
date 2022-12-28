import styled from "styled-components";

export const Container = styled.nav`
  width: 100vw;
  height: 100vh;
  background-color: #121214;
  align-items: center;
  text-align: center;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }

  .video {
    width: 75%;
    margin-left: 10px;
    margin-right: 10%;

    /* margin-left: 5%; */

    @media screen and (max-width: 1200px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
  .list {
    color: white;
  }
`;
