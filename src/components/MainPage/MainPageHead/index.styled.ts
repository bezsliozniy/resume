import Image from "next/image";
import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/variables";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`

export const Avatar = styled(Image)`
  width: 180px;
  height: auto;
  
  -webkit-animation: fadeIn 0.5s forwards;
  -webkit-animation-delay: 0.5ms;
  animation: fadeIn 0.5s forwards;
  opacity: 0;
  animation-delay: 0.5s;

  @media (max-width: ${breakpoints.md}) {
    width: 120px;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`

export const Name = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  -webkit-animation: fadeIn 0.5s forwards;
  -webkit-animation-delay: 1s;
  animation: fadeIn 0.5s forwards;
  opacity: 0;
  animation-delay: 1s;

  @media (max-width: ${breakpoints.md}) {
    font-size: 25px;
    margin-bottom: 5px;
  }
`
export const Location = styled.span`
-webkit-animation: fadeIn 0.5s forwards;
  -webkit-animation-delay: 1.4s;
  animation: fadeIn 0.5s forwards;
  opacity: 0;
  animation-delay: 1.4s;
  color: ${colors.mint}
`

export const Position = styled.div`
  font-size: 20px;

  -webkit-animation: fadeIn 0.5s forwards;
  -webkit-animation-delay: 1.2s;
  animation: fadeIn 0.5s forwards;
  opacity: 0;
  animation-delay: 1.2s;
  @media (max-width: ${breakpoints.sm}) {
    font-size: 16px;
  }
  span {
    color: ${colors.lightMint}
  }
`
