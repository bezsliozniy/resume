import MainPageScreen from "../src/components/MainPage/MainPageScreen";
import NextSeo from "../src/components/UI/NextSeo";

const MainPage = () => {
  return (
  <>
    <NextSeo
      title='Bezsliozniy'
      description='Hey there! My name is Lex, and this is my resume. Peace!'
    />
    <MainPageScreen />
  </>
  );
}

export default MainPage;