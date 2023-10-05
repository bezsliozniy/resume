import { Container } from "./index.styled";
import MainPageHead from "../MainPageHead";
import MainPageContacts from "../MainPageContacts";
import MainPageSummary from "../MainPageSummary";
import MainPageExperience from "../MainPageExperience";
import MainPageEducation from "../MainPageEducation";
import MainPageHardSkills from "../MainPageHardSkills";
import MainPageSoftSkills from "../MainPageSoftSkills";

const MainPageScreen = () => {
  return (
    <Container>
      <MainPageHead />
      <MainPageContacts />
      <MainPageSummary />
      <MainPageExperience />
      <MainPageEducation />
      <MainPageHardSkills />
      <MainPageSoftSkills />
    </Container>
  );
}

export default MainPageScreen;