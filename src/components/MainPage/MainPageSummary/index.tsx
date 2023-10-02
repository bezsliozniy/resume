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
        Hey there! My name is Oleksiy, but 
        you can call me Lex - it is simplier :). 
        I am an open to work web-developer from Ukraine with 
        over 1 year of freelance experience. I have been involved 
        in the development of more than ten web-applications, 
        some of which was developed entirely from scratch by myself.
      </Paragraph>
      <Paragraph>
        Besides work, I also enjoy sculpting with polymer 
        clay, sports, playing the guitar, and discussing 
        movies. I'm an open person, so feel free to ask 
        me anything you want to know. You can reach me 
        through the contact information provided above this 
        section
      </Paragraph>
    </Container>
  )
};

export default MainPageSummary;