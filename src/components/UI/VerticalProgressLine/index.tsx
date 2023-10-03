import { FC } from "react";
import { Line } from "./index.styled";

type VerticalProgressLineProps = {
  height?: number;
}

const VerticalProgressLine: FC<VerticalProgressLineProps> = ({height}) => {
  return (
    <Line height={height} />
  );
} 

export default VerticalProgressLine;