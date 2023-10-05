import { FC, ReactNode } from "react";
import { Container, Icon, Label } from "./index.styled";

type IconLabelProps = {
  icon?: ReactNode;
  label?: string;
  fullWidth?: boolean;
  color?: string;
}

const IconLabel: FC<IconLabelProps> = ({
  icon, label, fullWidth, color
}) => {

  return (
    <Container fullWidth={fullWidth} color={color}>
      <Icon>
        {icon}
      </Icon>
      <Label>
        {label}
      </Label>
    </Container>
  )
}

export default IconLabel;