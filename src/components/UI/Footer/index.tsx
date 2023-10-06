import { useEffect, useState } from "react";
import { Container } from "./index.styled";

const Footer = () => {
  const [headLoaded, setHeadLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHeadLoaded(true)
    }, 2000)
  }, [])

  return (
    <>
      {headLoaded && (<Container>
        <div>
          bezsliozniy
        </div>
        <div>
          good luck!
        </div>
      </Container>)
      }
    </>
  )
}

export default Footer;