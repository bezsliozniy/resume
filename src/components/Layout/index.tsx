import { FC, ReactNode } from "react";
import Footer from "../UI/Footer";
import Header from "../UI/Header";
import { AppWrapper, Content } from "./index.styled";

type LayoutProps = {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <AppWrapper>
      <Content id="content">
        <Header />
        {children}
        <Footer />
      </Content>
    </AppWrapper>
  )
}

export default Layout;