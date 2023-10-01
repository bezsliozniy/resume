import styled from "styled-components";

export const Container = styled.div<{width: string}>`
  width: ${({width}) => width || '40px'};
  height: ${({width}) => width || '40px'};
`