import { NextSeo as NextSeoBase } from "next-seo";

import { LanguageType } from "../../../../types";
import { useEffect, useState } from "react";
import { prefix } from "../../../../utils/prefix";
import icon from '/public/img/icon.png';


interface NextSeoProps {
  title: string;
  description: string;
  image?: string | null;
  language?: LanguageType;
  url?: string;
}

const NextSeo: React.FC<NextSeoProps> = ({
  title,
  description,
  image = null,
  language = LanguageType.en,
  url: baseUrl,
}) => {
  const [url, setUrl] = useState(baseUrl)

  useEffect(() => {
    if (typeof window !== 'undefined' && !baseUrl) {
      setUrl(window.location.href)
    }
  }, [baseUrl])

  return (
    <NextSeoBase
      title={title}
      description={description}
      openGraph={{
        title: title,
        description: description,
        images: [
          // {
          //   url: prefix === '' ? icon.src : prefix + '/img/icon.png',
          //   width: 968,
          //   height: 504
          // }
        ],
        type: 'website',
        locale: language,
        url,
        site_name: 'Bezsliozniy',
      }}
    />
  )
}

export default NextSeo;
