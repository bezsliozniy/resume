import { FC, ReactNode } from "react";
import Header from "../UI/Header";
import { AppWrapper, Content } from "./index.styled";

type LayoutProps = {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <AppWrapper>
      <Content>
        <Header />
        {children}
      </Content>
    </AppWrapper>
  )
}

export default Layout;