import { Avatar, Container, Details, Location, Name, Position } from "./index.styled";
import ava from '../../../../public/img/AVA.jpg'
import { prefix
 } from "../../../../utils/prefix";
const MainPageHead = () => {
  return (
    <>
      <Container>
        <div>
          <Avatar
          src={prefix === '' ? ava : prefix + '/img/AVA.jpg'}
          width={180} 
          height={180} 
          alt='avatar'/>
        </div>
        <Details>
          <Name>
            OLEKSIY BEZSLIOZNIY
          </Name>
          <div>
            <Position>
              Junior Front-end (React) | <span>800$</span>
              <br/>
            </Position>
            <Location>Remote/Office</Location>
          </div>
          <br />
          <div>
            <Location>
              <b> 
                • English Upper-Intermediate
              </b>
            </Location>
          </div>
        </Details>
      </Container>
    </>
  )
}

export default MainPageHead;