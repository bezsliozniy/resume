import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: -100px;
  width: 100%;
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 0.5ms;
  animation: slide 0.5s forwards;
  opacity: 0;
  animation-delay: 0.5s;
`

export const Headline = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`

export const Label = styled.div`
  margin-left: 10px;
`

export const Paragraph = styled.p`
  font-size: 17px;
  text-indent: 40px;
  margin: 10px 0px 0px;
`