import styled from "styled-components";
import { colors } from "../../../../styles/variables";

export const Container = styled.div<{width: string, variant: string}>`
  width: ${({width}) => width || '40px'};
  height: ${({width}) => width || '40px'};
  display: flex;
  justify-content: center;
  align-items: center;

  ${({variant}) => 
    variant === 'outlined' && `
      border: 2px solid ${colors.darkMint};
      border-radius: 50%;
    `
  }
`