import { FC, ReactNode } from "react";
import { Container, Icon, Label } from "./index.styled";

type IconLabelProps = {
  icon?: ReactNode;
  label?: string;
  fullWidth?: boolean;
}

const IconLabel: FC<IconLabelProps> = ({
  icon, label, fullWidth
}) => {
  return (
    <Container fullWidth={fullWidth}>
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