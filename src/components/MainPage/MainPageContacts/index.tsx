import IconLabel from "../../UI/IconLabel";
import { AiOutlinePhone, AiOutlineMail, AiOutlineHome } from 'react-icons/ai'
import { PiGraduationCapLight } from 'react-icons/pi'
import { Contacts } from "./index.styled";

const items = [
  {
    label: "+3800000000",
    icon: <AiOutlinePhone />,
  },
  {
    label: "mytwump@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    label: "Ukraine",
    icon: <AiOutlineHome />,
  },
  {
    label: "TTSTTS",
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