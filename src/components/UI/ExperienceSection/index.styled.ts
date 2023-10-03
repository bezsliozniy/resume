import styled from "styled-components";
import { colors } from "../../../../styles/variables";

export const Paragraph = styled.div`
  position: relative;
  font-size: 17px;
  max-width: 400px;
  margin-left: 26px;
  padding-top: 15px;

  :not(:first-child) {
    margin: 5px 0px 0px;
  }
`

export const ExpSection = styled.div`
  display: flex;
`

export const Dot = styled.div<{first, y, index}>`
  opacity: 0;
  -webkit-animation: fadeIn 0.5s forwards;
  -webkit-animation-delay: ${({index}) => (index+1)*1.58}s;
  animation: fadeIn 0.5s forwards;
  animation-delay: ${({index}) => (index+1)*1.58}s;

  position: absolute;
  margin-top: 20px;
  margin-left: -7px;
  width: 12px;
  height: 12px;
  border-radius: 5px;
  background-color: ${colors.darkMint};
`