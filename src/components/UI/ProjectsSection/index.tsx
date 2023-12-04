import { FC } from "react";
import { Description, ExpSection, Item, Paragraph, Title } from "./index.styled";

type ProjectsSectionItem = {
  title?: string;
  description?: string;
}
type ProjectsSectionItemProps = {
  items?: ProjectsSectionItem[]
}


const ProjectsSection: FC<ProjectsSectionItemProps> = ({items}) => {
  return (
    <ExpSection>
      {items.map((item, index) =>
        <Item key={index}>
          <Paragraph>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </Paragraph>
        </Item>
      )}
    </ExpSection>
  )
}

export default ProjectsSection;