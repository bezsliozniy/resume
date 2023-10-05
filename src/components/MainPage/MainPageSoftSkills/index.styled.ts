import styled from "styled-components";
import { breakpoints } from "../../../../styles/variables";

export const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-; */
  height: fit-content;
  gap: 7px;

  opacity: 0;
  -webkit-animation: fadeIn 0.5s forwards;
  -webkit-animation-delay: 0.5ms;
  animation: fadeIn 0.5s forwards;
  animation-delay: 0.5s;

  margin-top: 15px;
  
  > div {
    width: 24%;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      padding: 2px;
      width: fit-content;
      font-size: 14px;
      min-width: 130px;
    }
  }

  svg {
    height: 20px;
    width: 20px;
  }
`