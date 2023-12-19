import { FC, useEffect, useRef, useState } from "react";
import VerticalProgressLine from "../VerticalProgressLine";
import { Dot, ExpSection, Paragraph } from "./index.styled";

type ExperienceSectionItem = {
  date?: string;
  type?: string;
  title?: string;
  projects?: string;
}
type ExperienceSectionItemProps = {
  items?: ExperienceSectionItem[]
}


const ExperienceSection: FC<ExperienceSectionItemProps> = ({items}) => {
  const ref = useRef<HTMLDivElement>()
  const [height, setHeight] = useState(0);
  
  useEffect(()=>{
    if(ref.current)
      setHeight(ref.current.clientHeight)
  }, [ref?.current?.clientHeight])

  return (
    <ExpSection>
      <VerticalProgressLine height={height} />
      <div ref={ref}>
        {items.map((item, index) =>
          <>
            <Dot y={item} first={index === 0} index={index} key={index}/>
            <Paragraph key={index}>
              <div>{item.date}</div>
              <div>{item.type}</div>
              <div>{item.title}</div>
              {/* <div>{item.projects}</div> */}
            </Paragraph>
          </>
        )}
      </div>
    </ExpSection>
  )
}

export default ExperienceSection;