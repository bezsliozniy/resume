import styled from "styled-components";
import { breakpoints } from "../../../../styles/variables";

export const Contacts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: fit-content;
  
  > div {
    margin-bottom: 10px;
  }

  >:nth-child(1), >:nth-child(2) {
    @media (min-width: 570px) {
      width: 49%;
    }    
  }
  >:nth-child(3), >:nth-child(4) {
    @media (min-width: ${breakpoints.sm}) {
      width: 49%;
    }
  }

  svg {
    height: 20px;
    width: 20px;
  }
`