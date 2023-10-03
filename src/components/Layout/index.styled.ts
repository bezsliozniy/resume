import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables";

export const AppWrapper = styled.div`
  min-height: 100vh;
  background-image: url('/img/bg2.png');
  background-size: cover;
  overflow: hidden;
  /* background-color: ${colors.lightMint}; */
  color: ${colors.darkMint};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #fff;
  overflow: auto;
  height: 100vh; 
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  padding: 5px 90px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.lightMint};
  }
  &::-webkit-scrollbar-track {
      background-color: ${colors.white};
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 3px 30px;
  } 

  @media (max-width: ${breakpoints.sm}) { 
    padding: 3px 10px;
  }

`;