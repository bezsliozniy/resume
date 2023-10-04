import { Container } from "./index.styled";
import MainPageHead from "../MainPageHead";
import MainPageContacts from "../MainPageContacts";
import MainPageSummary from "../MainPageSummary";
import MainPageExperience from "../MainPageExperience";
import MainPageEducation from "../MainPageEducation";

const MainPageScreen = () => {
  return (
    <Container>
      <MainPageHead />
      <MainPageContacts />
      <MainPageSummary />
      <MainPageExperience />
      <MainPageEducation />
    </Container>
  );
}

export default MainPageScreen;