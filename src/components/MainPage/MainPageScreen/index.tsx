import { Container } from "./index.styled";
import MainPageHead from "../MainPageHead";
import MainPageContacts from "../MainPageContacts";
import MainPageSummary from "../MainPageSummary";

const MainPageScreen = () => {
  return (
    <Container>
      <MainPageHead />
      <MainPageContacts />
      <MainPageSummary />
    </Container>
  );
}

export default MainPageScreen;