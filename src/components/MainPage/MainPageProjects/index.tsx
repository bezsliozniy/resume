import Headline from "../../UI/Headline";
import { AiOutlinePlus } from "react-icons/ai";
import Icon from "../../UI/Icon";
import SectionContainer from "../../UI/SectionContainer";
import ProjectsSection from "../../UI/ProjectsSection";

const MainPageProjects = () => {
  const items = [
    {
      title: "Valkiria",
      description: "The website of a charitable organization. I developed it under the guidance of Nazar Martyniuk, a Middle React developer. MUI and Firebase were utilized in the development process.",
    },
    {
      title: "Evo Trade",
      description: "A project for collecting statistical data on cryptocurrencies and trading. During the development, I gained experience working with charts and handling large amounts of data.",
    },
    {
      title: "Bee Market",
      description: "A large online store for construction goods. I gained significant experience working with third-party APIs and managing large volumes of data.",
    },
    {
      title: "Domenant",
      description: 'A landing page for a company specializing in cargo transportation.',
    },
    {
      title: "Selector Website",
      description: "A website for selling tickets to events. I learned to work with a large amount of code, performed extensive refactoring after the previous developer. During the development, I directly communicated with a foreign client, which improved my English proficiency to a conversational level.",
    },
    {
      title: "Totalizator",
      description: "My graduation project, designed for the automatic distribution of tasks among employees, based on a proprietary mathematical model. I built both the backend and frontend from scratch and developed the mathematical model for it."
    },
    {
      title: "Selector Adminpanel",
      description: "An admin panel for the aforementioned website. During the development, I familiarized myself with styled-components.",
    },
    {
      title: "HolyNun",
      description: "A landing page for the online presence of an actress on OnlyFans.",
    },
    {
      title: 'Leonis Consult',
      description: "A landing page for a legal company that facilitates the process of obtaining foreign visas. Implemented using Prismic."
    },
    {
      title: 'Leonis GO',
      description: "A website for international civilian transportation."
    },
    {
      title: "NDA Project",
      description: "The second website, created for cryptocurrency trading on an exchange. During the development, the team adhered to Feature-Sliced Design. Regular code reviews were conducted, significantly enhancing many of my skills.",
    },
    {
      title: "The C Project",
      description: "A startup where I worked as a full-stack developer. After a month of work, I started conducting meetings, training some recruiters, and organizing the workflow.",
    },
    {
      title: "God Online",
      description: "Landing page for charity foundation. I used the Open AI`s GPT API to implement a chatbot.",
    },
  ]
  
  return (
    <div>
      <SectionContainer index={2}>
        <Headline 
        icon={
          <Icon 
          width="30px" 
          element={<AiOutlinePlus fontSize={16}/>} 
          variant='outlined' 
          />
        } 
        label="PROJECTS" />
          <ProjectsSection items={items}/>
      </SectionContainer>
    </div>

  )
};

export default MainPageProjects;