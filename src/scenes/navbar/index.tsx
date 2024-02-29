import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import i18next from "i18next";
import { useState } from "react";

import ActionButton from "@/shared/ActionButton";
import Link from "@/scenes/Link";
import Logo from "@/assets/Logo.png"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
    selectedLanguage: string;
    setSelectedLanguage: (value: string) => void

}

const Navbar = ({isTopOfPage,selectedPage, setSelectedPage,selectedLanguage, setSelectedLanguage}: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
    
    function handleTranslation(key:string) {
      return i18next.t(key, {lng: `${selectedLanguage}`})
    }

    

  return <nav>
    <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>

                    {/* Left side */}
                    <img src={Logo} alt="logo" />

                    {/* Right side */}
                    {isAboveMediumScreens ? 
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link  page={handleTranslation("Home")} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link  page={handleTranslation("Benefits")} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link  page={handleTranslation("OurClasses")}  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link  page={handleTranslation("ContactUs")}  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <select value={selectedLanguage} onChange={(event)=> setSelectedLanguage(event.target.value)}>
                              <option value="en">English</option>
                              <option value="kiny">Kinyarwanda</option>
                              <option value="fren">French</option>
                            </select>
                        </div>
                        <div className={`${flexBetween} gap-8 my-2`}>
                            <p>{handleTranslation("SignIn")}</p>
                            <ActionButton setSelectedPage={setSelectedPage}>
                              {handleTranslation("BecomeMember")}
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
                            <Link  page={handleTranslation("Home")} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link  page={handleTranslation("Benefits")} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link  page={handleTranslation("OurClasses")}  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link  page={handleTranslation("ContactUs")}  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <select value={selectedLanguage} onChange={(event)=> setSelectedLanguage(event.target.value)}  className="mr-20 text-sm">
                              <option value="en">English</option>
                              <option value="kiny">Kinyarwanda</option>
                              <option value="fren">French</option>
                            </select>
                        </div>

                        
          </div>
        )}
  </nav>
}

export default Navbar