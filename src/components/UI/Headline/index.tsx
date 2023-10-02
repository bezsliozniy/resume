import { FC, ReactNode } from "react";
import { Container, Label } from "./index.styled";

type HeadlineProps = {
  icon?: ReactNode;
  label?: string;
}

const Headline: FC<HeadlineProps> = ({
  icon, label
}) => {
  return (
    <Container>
      {icon}
      <Label>
        {label}
      </Label>
    </Container>
  )
};

export default Headline;