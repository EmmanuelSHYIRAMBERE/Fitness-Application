import { BenefitType, SelectedPage } from "@/shared/types"
import i18next from "i18next"
import AnchorLink from "react-anchor-link-smooth-scroll"

 
type Props = {
    benefit: BenefitType,
    selectedLanguage: string,
    setSelectedPage: (value: SelectedPage)=>void
}

const Benefit = ({benefit, selectedLanguage, setSelectedPage}: Props) => {

    function handleTranslation(key:string) {
      return i18next.t(key, {lng: `${selectedLanguage}`})
    }
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            {benefit.icon}
        </div>
        </div>
        <h4 className="font-bold">{benefit.title}</h4>
        <p className="my-3">{benefit.description}</p>
        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={()=> setSelectedPage(SelectedPage.ContactUs)} href={`${SelectedPage.ContactUs}`}>
            <p>{handleTranslation("LearnMore")}</p>
        </AnchorLink>
    </div>
  )
}

export default Benefit