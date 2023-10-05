import styled from "styled-components"

export const AnimationContainer = styled.div<{inViewport}>`
  transform: translate(-100px);
  left: -100px;
  width: 100%;
  ${({inViewport}) => inViewport ? `
  -webkit-animation-delay: 0s;
    -webkit-animation: slide 0.5s forwards;
    animation-delay: 0s;
    animation: slide 0.5s forwards;
  ` : `
    opacity: 0;
  `}
`