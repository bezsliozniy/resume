import { FC, ReactNode } from "react";
import { AppWrapper, Content } from "./index.styled";

type LayoutProps = {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <AppWrapper>
      <Content>
        {children}
      </Content>
    </AppWrapper>
  )
}

export default Layout;