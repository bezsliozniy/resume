import Headline from "../../UI/Headline";
import {AiOutlineCode} from "react-icons/ai"
import Icon from "../../UI/Icon";
import SectionContainer from "../../UI/SectionContainer";
import ExperienceSection from "../../UI/ExperienceSection";

const MainPageExperience = () => {
  const items = [
    {
      date: "Summer 2020",
      type: "Non-Commercial",
      title: "Trainee .Net FullStack Developer | ANKO corp.",
      projects: "Projects: -",
    },
    {
      date: "Sep 2022 - Nov 2023",
      type: "Commercial",
      title: "Junior Front-End Developer | Freelance with Nazar Martyniuk",
      projects: "Projects: 2 Crypto exchange, 1 admin panel, 1 online-shop, 5 landings",
    }
  ]
  
  return (
    <div>
      <SectionContainer index={2}>
        <Headline 
        icon={
          <Icon 
          width="30px" 
          element={<AiOutlineCode fontSize={16}/>} 
          variant='outlined' 
          />
        } 
        label="WORK EXPERIENCE" />
          <ExperienceSection items={items}/>
      </SectionContainer>
    </div>

  )
};

export default MainPageExperience;