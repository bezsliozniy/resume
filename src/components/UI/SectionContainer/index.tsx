import { FC, ReactNode } from "react";
import { AnimationContainer } from "./index.styled";

type SectionContainerProps = {
  children: ReactNode;
}

const SectionContainer: FC<SectionContainerProps> = ({ children }) => {
  return (
    <AnimationContainer>
      {children}
    </AnimationContainer>
  )
};

export default SectionContainer;