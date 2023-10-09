import { FC, ReactNode } from "react";
import { Container, Icon, Label } from "./index.styled";

type IconLabelProps = {
  icon?: ReactNode;
  label?: string;
  fullWidth?: boolean;
  color?: string;
  onClick?: () => void;
}

const IconLabel: FC<IconLabelProps> = ({
  icon, label, fullWidth, color, onClick
}) => {

  return (
    <Container fullWidth={fullWidth} color={color} onClick={onClick}>
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