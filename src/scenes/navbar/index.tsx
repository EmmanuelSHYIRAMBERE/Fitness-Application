import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import ActionButton from "@/shared/ActionButton";
import Logo from "@/assets/Logo.png"
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";



const Navbar = () => {
    const { t, i18n } = useTranslation();

    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")


 

  const handleLanguageChange = (selectedLang:string) => {
    setSelectedLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);
  };
    
    

  return <>
   <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full bg-primary-100`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>

                    {/* Left side */}
                    <img src={Logo} alt="logo" />

                    {/* Right side */}
                    {isAboveMediumScreens ? 
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                        
                        <a href="/">{t("Home")}</a>
                        <a href="/benefits">{t("Benefits")}</a>
                        <a href="/ourclasses">Our Classes</a>
                        <a href="/contactus">Contact Us</a>
                            <select value={selectedLanguage} onChange={(event)=> handleLanguageChange(event.target.value)}>
                              <option value="en">English</option>
                              <option value="kiny">Kinyarwanda</option>
                              <option value="fren">French</option>
                            </select>
                        </div>
                        <div className={`${flexBetween} gap-8 my-2`}>
                            <p>{t("SignIn")}</p>
                            <ActionButton>
                              {t("BecomeMember")}
                            </ActionButton>
                        </div>
                    </div>
                    : <button className="rounded-full bg-secondary-500 p-2 my-2" onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                      <Bars3Icon className="h-6 w-6 text-white" />
                    </button>
                    }
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}

        {(!isAboveMediumScreens && isMenuToggled) && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            {/* CLOSE ICON */}

            <div className="flex justify-end p-12">
              <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                  <XMarkIcon  className="h-6 w-6 text-gray-400"  />
              </button>
            </div>

            {/* MENU ITEMS */}

                        <div className="ml-[33%] flex flex-col gap-5 text-2xl">

                            <a href="/">{t("Home")}</a>
                        <a href="/benefits">{t("Benefits")}</a>
                        <a href="/ourclasses">Our Classes</a>
                        <a href="/contactus">Contact Us</a>

                            <select value={selectedLanguage} onChange={(event)=> handleLanguageChange(event.target.value)}  className="mr-20 text-sm">
                              <option value="en">English</option>
                              <option value="kiny">Kinyarwanda</option>
                              <option value="fren">French</option>
                            </select>
                        </div>

                        
          </div>
        )}
  </nav>

        </>
}

export default Navbar
