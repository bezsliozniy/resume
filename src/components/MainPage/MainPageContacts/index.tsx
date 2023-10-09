import IconLabel from "../../UI/IconLabel";
import { AiOutlineMail, AiOutlineHome } from 'react-icons/ai'
import { LiaTelegramPlane } from 'react-icons/lia'
import { PiGraduationCapLight } from 'react-icons/pi'
import { Contacts } from "./index.styled";


const MainPageContacts = () => {
  const items = [
    {
      label: "+380974456648",
      icon: <LiaTelegramPlane />,
      onClick: () => {window.open('https://t.me/bezsliozniy')}
    },
    {
      label: "bezsliozniy@gmail.com",
      icon: <AiOutlineMail />,
      onClick: () => {window.open("mailto:bezsliozniy@gmail.com")}
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
  
  return (
    <Contacts>
      {items.map((item, index) => (
        <IconLabel fullWidth icon={item.icon} label={item.label} key={index} onClick={item.onClick}/>
      ))}
    </Contacts>
  )
}

export default MainPageContacts;