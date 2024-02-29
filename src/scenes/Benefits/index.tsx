import { motion } from "framer-motion"
import { BenefitType, SelectedPage } from "@/shared/types"
import HText from "@/shared/HText"
import i18next from "i18next"
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import Benefit from "./Benefit"

const container  = {
    hidden: {},
    visible: {
        transition: { straggerChildren: 0.2}
    }
}

type Props = {
    selectedLanguage: string
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({selectedLanguage, setSelectedPage}: Props) => {

    function handleTranslation(key:string) {
        return i18next.t(key, {lng: `${selectedLanguage}`})
    }

    const Benefit1Title = handleTranslation("Benefit1Title")
    const Benefit1Texts = handleTranslation("Benefit1Texts")
    const Benefit2Title = handleTranslation("Benefit2Title")
    const Benefit2Texts = handleTranslation("Benefit2Texts")
    const Benefit3Title = handleTranslation("Benefit3Title")
    const Benefit3Texts = handleTranslation("Benefit3Texts")

    const benefits: Array<BenefitType> = [
      {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: Benefit1Title,
        description: Benefit1Texts
      },
      {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: Benefit2Title,
        description: Benefit2Texts
      },
      {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: Benefit3Title,
        description: Benefit3Texts
      }
    ];

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>
           
           {/* HEADER */}
            <motion.div 
            className="md:my-5 md:w-3/5" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
                <HText>{handleTranslation("BenefitPageTitle")}</HText>
                <p className="my-5 text-sm">{handleTranslation("BenefitPageTexts")}</p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div className="mt-5 items-center justify-between gap-8 md:flex" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} variants={container}>
                {benefits.map((benefit: BenefitType)=>(
                    <Benefit key={benefit.title} benefit={benefit} setSelectedPage={setSelectedPage} selectedLanguage={selectedLanguage} />
                ))}
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Benefits