import Icon from "../../UI/Icon";
import IconLabel from "../../UI/IconLabel";
import SectionContainer from "../../UI/SectionContainer";
import { Skills } from "./index.styled";
import {AiOutlineLaptop} from "react-icons/ai";
import Headline from "../../UI/Headline";

const items = [
  ['React'], 
  ['Next.js'], 
  ['Typescript', 'C#'],
  ['react-intl'],
  ['RTK', 'Axios'], 
  ['SASS', 'styled-components'], 
  ['MUI', 'bootstrap'],
  ['Prismic'], 
  ['recharts'], 
  ['MySQL', 'MongoDB'],
]

const colors = [
  '#183d3d',
  '#832d2d',
  '#0c0b49',
  '#432c81',
  '#25831c',
  '#ad370c',
  '#0d6144',
  '#183d3a',
  '#0f7186',
  '#720f86',
]

const MainPageHardSkills = () => {
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
        label="HARD SKILLS" />
      <Skills>
        {items.map((itemByType, typeIndex) => itemByType.map((item, index) => (
          <div key={index}>
            <IconLabel color={colors[typeIndex]} fullWidth label={item}/>
          </div>
        )))}
      </Skills>
    </SectionContainer>
  )
}

export default MainPageHardSkills;