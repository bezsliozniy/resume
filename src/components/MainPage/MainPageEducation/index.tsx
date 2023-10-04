import { PiGraduationCapLight } from 'react-icons/pi'
import EducationSection from '../../UI/EducationSection';
import Headline from "../../UI/Headline";
import Icon from "../../UI/Icon";
import SectionContainer from "../../UI/SectionContainer";

const items = [
  {
    date: '2017 - 2021',
    university: 'Kyiv PedUniversity',
    title: 'Computer Science | Junior',
  },
  {
    date: 'Kyiv PMC',
    university: '2021 - 2023',
    title: 'Computer Science | Banchelor',
  }
]

const MainPageEducation = () => {
  return (
    <div>
      <SectionContainer>
        <Headline 
        icon={
          <Icon 
          width="30px" 
          element={<PiGraduationCapLight fontSize={16}/>} 
          variant='outlined' 
          />
        } 
        label="EDUCATION" />
        <EducationSection items={items} />
      </SectionContainer>
    </div>
  )
}

export default MainPageEducation;