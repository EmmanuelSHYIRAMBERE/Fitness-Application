
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "@/scenes/Link";
import { SelectedPage } from "@/shared/types";
type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {

    const flexBetween = "flex items-center justify-between"
    const isAboveMedium = useMediaQuery("(min-width: 1060px)")

  return <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>

                    {/* Left side */}
                    <img src={Logo} alt="logo" />

                    {/* Right side */}
                    {isAboveMedium ? 
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link  page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link  page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link  page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link  page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <button>Become a Member</button>
                        </div>
                    </div>
                    : <div className="rounded-full bg-secondary-500 p-import React from 'react'
                 "></div>
                    }
                </div>
            </div>
    </div>
  </nav>
}

export default Navbar