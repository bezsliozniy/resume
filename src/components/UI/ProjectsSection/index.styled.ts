import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/variables";

export const Title = styled.h3`
  margin: 0;
  font-weight: 600;
  color: ${colors.black};
`;

export const Description = styled.div`
`;

export const Paragraph = styled.div`
  /* position: relative; */
  font-size: 17px;
  /* max-width: 400px; */
  /* margin-left:38px;
  padding-top: 15px; */
  width: 100%;

  margin-top: 20px;

  :not(:first-child) {
    margin: 5px 0px 0px;
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: none;
  }
`

export const Item = styled.div`
  width: 48%;
  
  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

export const ExpSection = styled.div`
  /* padding-top: 20px; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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