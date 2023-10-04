import { FC } from "react";
import { Container, Line } from "./index.styled";

type EducationSectionItem = {
  date?: string;
  university?: string;
  title?: string;
}
type EducationSectionItemProps = {
  items?: EducationSectionItem[]
}


const EducationSection: FC<EducationSectionItemProps> = ({items}) => {
  return (
    <div>
      {items.map((item) => 
        <Container>
          <Line />
          <div>
            <div>
              {item.university}
            </div>
            <div>
              {item.date}
            </div>
            <div>
              {item.title}
            </div>  
          </div>
        </Container>
      )}
    </div>
  )
}

export default EducationSection;