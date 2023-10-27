import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll"
import "/i18n"
import { useTranslation } from 'react-i18next'
import {BsInstagram, BsTwitter, BsYoutube, BsTiktok, BsLinkedin,BsSpotify} from 'react-icons/bs'

const NavBar = () => {
  const { t } = useTranslation()  

  const navigation = [
    { name: t('navigation.home').toUpperCase(), href: '/' },
    { name: t('navigation.about').toUpperCase(), href: '/podcast' },
    { name: t('navigation.news').toUpperCase(), href: '/recursos' },
    { name: t('navigation.contact').toUpperCase(), href: '/contacto' },
  ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
        <nav className="flex items-center justify-between p-4 lg:px-12" aria-label="Global">
          <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-0 text-white font-bold text-[40px] leading-[48px] " >
          <img src="/images/logo01.png" alt="Logo" className="h-15 w-40" />
          </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} className="text-sm font-semibold leading-6 text-white cursor-pointer" >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-0 text-je-black font-bold text-[40px] leading-[48px] " style={{ fontFamily: 'Space Grotesk' }}>
                JE
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className=" -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}

export default NavBar
