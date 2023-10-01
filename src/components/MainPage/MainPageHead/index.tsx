import { Avatar, Container, Details, Location, Name, Position } from "./index.styled";
import ava from '../../../../public/img/ava.jpg'

const MainPageHead = () => {
  return (
    <>
        <Container>
          <div>
            <Avatar src={ava} alt='avatar'/>
          </div>
          <Details>
            <Name>
              OLEKSIY BEZSLIOZNIY
            </Name>
            <div>
              <Position>
                Junior Frontend | <span>600$</span>
                <br/>
              </Position>
              <Location>Remote/Office</Location>
            </div>
          </Details>
        </Container>
    </>
  )
}

export default MainPageHead;