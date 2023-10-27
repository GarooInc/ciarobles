import React from "react"
import { Link } from "react-scroll"
import "/i18n"
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()  

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.about'), href: '/podcast' },
    { name: t('navigation.news'), href: '/recursos' },
    { name: t('navigation.contact'), href: '/contacto' },
  ]

    return (
        <div className=" w-full pt-12 md:pt-8 md:px-4 flex-col md:flex-row flex items-start md:justify-start">
            <div className="md:w-full max-w-screen-xl mx-4 flex flex-col md:gap-8 p-2 md:p-4">
                <div className="flex flex-col justify-start w-full gap-2">
                    <p className="text-cr-gray">{t('footer.news')}</p>
                    <p className="text-cr-gray">{t('footer.policy')}</p>
                    <p className="text-cr-gray">© 2023 Garoo Inc</p>
                </div>
            </div>
            <div className="flex pt-10 justify-center md:pt-0 md:justify-end w-full gap-4">
                <a className="text-cr-gray">Instagram</a>
                <a className="text-cr-gray">Linkedin</a>
                <a className="text-cr-gray">X</a>
                <a className="text-cr-gray">Facebook</a>
            </div>
        </div>
    )

}

export default Footer