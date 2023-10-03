import styled, { keyframes } from "styled-components";
import { colors } from "../../../../styles/variables";

export const Line = styled.div<{height}>`
  margin-left: 12px;
  margin-top: 23px;
  width: 2px;
  height: 0px;
  background-color: ${colors.lightMint};
  position: relative;
  -webkit-animation: ${({height}) => verticalProgress(height - 31)} 4s forwards;
  -webkit-animation-delay: 2s;
  animation: ${({height}) => verticalProgress(height - 31)} 4s forwards;
  animation-delay: 2s;
`

const verticalProgress = (y) => keyframes`
  0% {
      height : 0px;
  }
  100% {
      height : ${y}px;
  }
`;
