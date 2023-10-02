import styled from "styled-components";
import { breakpoints } from "../../../../styles/variables";

export const Contacts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: fit-content;

  opacity: 0;
  -webkit-animation: fadeIn 0.5s forwards;
  -webkit-animation-delay: 0.5ms;
  animation: fadeIn 0.5s forwards;
  animation-delay: 0.5s;
  
  > div {
    margin-bottom: 10px;
  }

  >:nth-child(1), >:nth-child(2) {
    -webkit-animation: fadeIn 0.5s forwards;
    -webkit-animation-delay: 1.6s;
    animation: fadeIn 0.5s forwards;
    opacity: 0;
    animation-delay: 1.6s;
    
    @media (min-width: 570px) {
      width: 49%;
    }    
  }
  >:nth-child(3), >:nth-child(4) {
    -webkit-animation: fadeIn 0.5s forwards;
    -webkit-animation-delay: 1.8s;
    animation: fadeIn 0.5s forwards;
    opacity: 0;
    animation-delay: 1.8s;

    @media (min-width: ${breakpoints.sm}) {
      width: 49%;
    }
  }

  svg {
    height: 20px;
    width: 20px;
  }
`