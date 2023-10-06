"use client"
import { FC, ReactNode } from "react";
import { AnimationContainer } from "./index.styled";
import {useInView} from 'react-intersection-observer';

type SectionContainerProps = {
  children: ReactNode;
  index?: number
}

const SectionContainer: FC<SectionContainerProps> = ({ children }) => {
  const {ref, inView} = useInView({
    threshold: 0.2,
    delay: 200,
    triggerOnce: true,
  })


  return (
    <AnimationContainer inViewport={inView} ref={ref}>
      {children}
    </AnimationContainer>
  )
};

export default SectionContainer;