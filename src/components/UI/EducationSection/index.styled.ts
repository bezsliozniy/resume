import styled from "styled-components";
import { colors } from "../../../../styles/variables";

export const Container = styled.div`
  display: flex;
  padding-top: 15px;
`

export const Line = styled.div`
  margin-left: 12px;
  margin-right: 21px;
  width: 6px;
  border: 2px solid ${colors.lightMint};
  border-radius: 4px 0px 0px 4px;
  border-right: none;
`