import { Container } from "./index.styled";
import MainPageHead from "../MainPageHead";
import MainPageContacts from "../MainPageContacts";

const MainPageScreen = () => {
  return (
    <Container>
      <MainPageHead />
      <MainPageContacts />
    </Container>
  );
}

export default MainPageScreen;