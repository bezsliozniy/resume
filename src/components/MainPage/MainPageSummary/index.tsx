import Headline from "../../UI/Headline";
import {BsPencil} from "react-icons/bs"
import Icon from "../../UI/Icon";
import { Paragraph } from "./index.styled"
import SectionContainer from "../../UI/SectionContainer";

const MainPageSummary = () => {
  return (
    <div>
      <SectionContainer index={1}>
        <Headline 
        icon={
          <Icon 
          width="30px" 
          element={<BsPencil fontSize={16}/>} 
          variant='outlined' 
          />
        } 
        label="SUMMARY" />
        <Paragraph>
          Hey there! My name is Oleksiy, but you can call me Lex - it is simple. I am an open to work web-developer from Ukraine with over 1.5 years of commercial experience. I have been involved in the development of various web-applications, some of which was developed entirely from scratch by myself.
        </Paragraph>
        <Paragraph>
          I am a measured, self-disciplined developer who loves his work and values loyalty between the employee and the job. You can reach me through the contact information provided above this section
        </Paragraph>

      </SectionContainer>
    </div>
  )
};

export default MainPageSummary;