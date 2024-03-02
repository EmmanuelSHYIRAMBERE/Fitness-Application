import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import { BenefitType } from "@/shared/types"
import { useTranslation } from "react-i18next";
import HText from "@/shared/HText"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const Benefits = () => {
    const { t } = useTranslation();

    const benefits: Array<BenefitType> = [
      {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: t("Benefit1Title"),
        description: t("Benefit1Texts")
      },
      {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: t("Benefit2Title"),
        description: t("Benefit2Texts")
      },
      {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: t("Benefit3Title"),
        description: t("Benefit3Texts")
      }
    ];

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div>
           
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
                <HText>{t("BenefitPageTitle")}</HText>
                <p className="my-5 text-sm">{t("BenefitPageTexts")}</p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div className="mt-5 items-center justify-between gap-8 md:flex">
                {benefits.map((benefit: BenefitType)=>(
                    <Benefit key={benefit.title} benefit={benefit}/>
                ))}
            </motion.div>

            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">

              {/* GRAPHIC */}
              <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />

              {/* DESCRIPTION */}
              <div>

                {/* TITLE */}
                <div className="relative">
                  <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 },}}>
                    <HText>
                      {t("BenefitPageSemititle")} {" "} <span className="text-primary-500">{t("Fit")}</span>
                    </HText>
                  </motion.div>
                  </div>
                </div>

                {/* DESCRIPT */}
                <motion.div  initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay:0.2, duration: 0.5 }} variants={{hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 },}}>
                  <p className="my-5">{t("BenefitTestimonyText1")}</p>
                  <p className="mb-5">{t("BenefitTestimonyText2")}</p>

                  </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                  <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                    <ActionButton>
                    {t("JoinNow")}
                    </ActionButton>
                  </div>
                </div>
              </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits