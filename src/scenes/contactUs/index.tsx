import HText from "@/shared/HText"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import {useForm} from 'react-hook-form'

import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png' 

const ContactUs = () => {
    const inputStyles=`mb-5 w-full rounded-lg bg-primary-300 py-3 px-5 placeholder-white`
   const {t} = useTranslation()
   const {
    register,
    trigger,
    formState: {errors}
   } = useForm()

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const onSubmit = async(e:any)=>{
    const isValid = await trigger()
    if (!isValid) {
        e.preventDefault()
    }
   }

  return (
    <section className="mx-auto w-5/6 pt-24 pb-32 ">
        <div>
            <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
                <HText>
                    <span className="text-primary-500">{t("JoinNow")}</span> TO GET IN SHAPE
                </HText>
                <p className="my-3">
                    khjh jkhj  jhj jihui jhui  uivknivnkh injb jinj nji u h jnkjnbn j uijbjjihi nj njii nuiijfn kjnkm injn ink i uiv ihnmjnmnsiovhndvihknd h innijkn,vdhvh nnj njsd,hvk hvuvdksh  rhij ijk nkvfvkdhiskj  h  ifjksilfhifkdghhuivh  hu bjbdfjbhubv bvdkj bu 
                </p>
            </motion.div>

            {/* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
            className="mt-8 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
                <form target="_blank" action="https://formsubmit.co/420e5027fd38e38c32f4e8eb050060e4" method="POST" onSubmit={onSubmit}>
                    <input type="text" className={inputStyles} placeholder="NAME" {...register("name", {required: true, maxLength: 100})}/>
                    {errors.name && (
                        <p className="mt-1 text-primary-500">
                            {errors.name.type === "required" && "This field is required" }
                            {errors.name.type === "maxLength" && "Maximum length is 100 characters" }
                        </p>
                    )}
                    <input type="email" className={inputStyles} placeholder="EMAIL" {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,}$/i})}/>
                    {errors.email && (
                        <p className="mt-1 text-primary-500">
                            {errors.email.type === "required" && "This field is required" }
                            {errors.email.type === "pattern" && "Invalid email address" }
                        </p>
                    )}
                    <textarea rows={4} cols={50} className={inputStyles} placeholder="MESSAGE" {...register("message", {required: true, maxLength: 2000})}/>
                    {errors.message && (
                        <p className="mt-1 text-primary-500">
                            {errors.message.type === "required" && "This field is required" }
                            {errors.message.type === "maxLength" && "Maximum length is 2000 characters" }
                        </p>
                    )}

                    <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                        Submit
                    </button>
                </form>
            </motion.div>
            <motion.div 
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
                <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                    <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" />
                </div>
            </motion.div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs 