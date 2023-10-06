import { Container } from "./index.styled";
import MainPageHead from "../MainPageHead";
import MainPageContacts from "../MainPageContacts";
import MainPageSummary from "../MainPageSummary";
import MainPageExperience from "../MainPageExperience";
import MainPageEducation from "../MainPageEducation";
import MainPageHardSkills from "../MainPageHardSkills";
import MainPageSoftSkills from "../MainPageSoftSkills";
import { useEffect, useState } from "react";

const MainPageScreen = () => {
  const [headLoaded, setHeadLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHeadLoaded(true)
    }, 2000)
  }, [])

  return (
    <Container>
      <MainPageHead />
      <MainPageContacts />
      {headLoaded && (<>
        <MainPageSummary />
        <MainPageExperience />
        <MainPageEducation />
        <MainPageHardSkills />
        <MainPageSoftSkills />
      </>)}
    </Container>
  );
}

export default MainPageScreen;