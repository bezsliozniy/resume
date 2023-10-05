import Icon from "../../UI/Icon";
import IconLabel from "../../UI/IconLabel";
import SectionContainer from "../../UI/SectionContainer";
import { Skills } from "./index.styled";
import {AiOutlineLaptop} from "react-icons/ai";
import Headline from "../../UI/Headline";
import { colors } from "../../../../styles/variables";

const items = [
  'Communicative', 'Always Punctual', 'Flexible', 'Teamplayer',
  'Creative', 'Loyal', 'Purposeful' 
   
]

const MainPageSoftSkills = () => {
  return (
    <SectionContainer>
      <Headline
        icon={
          <Icon 
          width="30px" 
          element={<AiOutlineLaptop fontSize={16}/>} 
          variant='outlined' 
          />
        } 
        label="SOFT SKILLS" />
      <Skills>
        {items.map((item, index) => (
          <div key={index}>
            <IconLabel color={colors.darkMint} fullWidth label={item}/>
          </div>
        ))}
      </Skills>
    </SectionContainer>
  )
}

export default MainPageSoftSkills;