import Headline from "../../UI/Headline";
import {BsPencil} from "react-icons/bs"
import Icon from "../../UI/Icon";
import { Container, Paragraph } from "./index.styled"

const MainPageSummary = () => {
  return (
    <Container>
      <Headline 
      icon={
        <Icon 
        width="30px" 
        element={<BsPencil fontSize={16}/>} 
        variant='outlined' 
        />
      } 
      label="Summary" />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias consequuntur aspernatur velit cumque quaerat laborum commodi ab, beatae excepturi odio at ipsum esse deleniti tenetur aut perspiciatis! Nam, quaerat.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eum ducimus molestias, laudantium ratione at quidem, quae, dolorum dolor cum esse officia a! Cupiditate, qui! Libero nostrum porro at ipsam.
      </Paragraph>
    </Container>
  )
};

export default MainPageSummary;