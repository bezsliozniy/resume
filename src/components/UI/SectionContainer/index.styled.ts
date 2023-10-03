import styled from "styled-components"

export const AnimationContainer = styled.div`
  transform: translate(-100px);
  left: -100px;
  width: 100%;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 2s;
  animation: slide 0.5s forwards;
  opacity: 0;
  animation-delay: 2s;
`