import styled from "styled-components";
import { colors } from "../../../../styles/variables";

export const Container = styled.div<{fullWidth?: boolean}>`
  position: relative;
  width: ${({fullWidth}) => fullWidth && '100%'};
  display: flex;
  gap: 10px;
  border: 1px solid ${colors.darkMint};
  border-radius: 10px;
  padding: 3px 0px;
  align-items: center;
`

export const Label = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
` 

export const Icon = styled.div`
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`