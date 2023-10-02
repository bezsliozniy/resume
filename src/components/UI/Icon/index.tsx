import { FC, ReactNode } from "react";
import { Container } from "./index.styled";

type IconProps = {
  element?: ReactNode;
  width?: string;
  variant?: 'outlined' | 'standard'
}

const Icon: FC<IconProps> = ({element, width, variant = 'standard'}) => {
  return (
    <Container width={width} variant={variant}>
      {element}
    </Container>
  )
}

export default Icon;