import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables";

export const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: ${colors.lightMint};
  color: ${colors.darkMint};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: ${colors.white};
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  padding: 5px 90px;
  @media (max-width: ${breakpoints.md}) {
    padding: 3px 30px;
  } 

  @media (max-width: ${breakpoints.sm}) { 
    padding: 3px 10px;
  }

`;