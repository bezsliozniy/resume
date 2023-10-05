import IconLabel from "../../UI/IconLabel";
import { AiOutlinePhone, AiOutlineMail, AiOutlineHome } from 'react-icons/ai'
import { PiGraduationCapLight } from 'react-icons/pi'
import { Contacts } from "./index.styled";

const items = [
  {
    label: "+380974456648",
    icon: <AiOutlinePhone />,
  },
  {
    label: "bezsliozniy@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    label: "Ukraine",
    icon: <AiOutlineHome />,
  },
  {
    label: "ZHATK, PNU",
    icon: <PiGraduationCapLight />,
  },
] 

const MainPageContacts = () => {
  return (
    <Contacts>
      {items.map((item, index) => (
        <IconLabel fullWidth icon={item.icon} label={item.label} key={index}/>
      ))}
    </Contacts>
  )
}

export default MainPageContacts;