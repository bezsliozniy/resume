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
  @media (max-width: ${breakpoints.md}) {
    font-size: 25px;
    margin-bottom: 5px;
  }
`
export const Location = styled.span`
  color: ${colors.mint}
`

export const Position = styled.div`
  font-size: 20px;
  @media (max-width: ${breakpoints.sm}) {
    font-size: 16px;
  }
  span {
    color: ${colors.lightMint}
  }
`
