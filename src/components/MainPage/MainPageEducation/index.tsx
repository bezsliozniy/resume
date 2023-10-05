import { PiGraduationCapLight } from 'react-icons/pi'
import EducationSection from '../../UI/EducationSection';
import Headline from "../../UI/Headline";
import Icon from "../../UI/Icon";
import SectionContainer from "../../UI/SectionContainer";

const items = [
  {
    date: '2017 - 2021',
    university: 'Zhytomir agrotechnical college',
    title: 'Computer Science | Junior',
  },
  {
    date: '2021 - 2023',
    university: 'Pollissya National University',
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