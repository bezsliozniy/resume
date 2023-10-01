import { FC, ReactNode } from "react";
import { Container } from "./index.styled";

type IconProps = {
  element?: ReactNode;
  width?: string;
}

const Icon: FC<IconProps> = ({element, width}) => {
  return (
    <Container width={width}>
      {element}
    </Container>
  )
}

export default Icon;