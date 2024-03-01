import { BenefitType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { useTranslation } from "react-i18next"

const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1},
}
 
type Props = {
    benefit: BenefitType,
}

const Benefit = ({benefit,}: Props) => {
  const {t} = useTranslation()

 
  return (
    <motion.div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center" variants={childVariant}>
        <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            {benefit.icon}
        </div>
        </div>
        <h4 className="font-bold">{benefit.title}</h4>
        <p className="my-3">{benefit.description}</p>
        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" href={`${SelectedPage.ContactUs}`}>
            <p>{t("LearnMore")}</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit