import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: ${colors.lightMint};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: ${colors.white};
  width: 100%;
  max-width: 1000px;
`