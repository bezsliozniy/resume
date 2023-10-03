import { Container } from "./index.styled";
import MainPageHead from "../MainPageHead";
import MainPageContacts from "../MainPageContacts";
import MainPageSummary from "../MainPageSummary";
import MainPageExperience from "../MainPageExperience";

const MainPageScreen = () => {
  return (
    <Container>
      <MainPageHead />
      <MainPageContacts />
      <MainPageSummary />
      <MainPageExperience />
    </Container>
  );
}

export default MainPageScreen;