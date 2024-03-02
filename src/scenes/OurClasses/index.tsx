import { motion } from "framer-motion"

import HText from "@/shared/HText"
import { ClassType } from "@/shared/types"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import Class from "./Class"

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "hjh hkdha        kdfshjdskj            hfjdhjdhsj  dhf nh  hfdkhjdk k ljfdkh dhjd ihd hj jkhjkdh   h jdfhjkh jkdjf hdjh mnvbj bmbvjdjbdbjb jhsjd",
    image: image1
  },
  {
    name: "Yoga Classes",
    description: "hjh hkdha        kdfshjdskj            hfjdhjdhsj  dhf nh  hfdkhjdk k ljfdkh dhjd ihd hj jkhjkdh   h jdfhjkh jkdjf hdjh mnvbj bmbvjdjbdbjb jhsjd",
    image: image2
  },
  {
    name: "Ab Core Classes",
    description: "hjh hkdha        kdfshjdskj            hfjdhjdhsj  dhf nh  hfdkhjdk k ljfdkh dhjd ihd hj jkhjkdh   h jdfhjkh jkdjf hdjh mnvbj bmbvjdjbdbjb jhsjd",
    image: image3
  },
  {
    name: "Adventure  Classes",
    description: "hjh hkdha        kdfshjdskj            hfjdhjdhsj  dhf nh  hfdkhjdk k ljfdkh dhjd ihd hj jkhjkdh   h jdfhjkh jkdjf hdjh mnvbj bmbvjdjbdbjb jhsjd",
    image: image4
  },
  {
    name: "Fitness Classes",
    description: "hjh hkdha        kdfshjdskj            hfjdhjdhsj  dhf nh  hfdkhjdk k ljfdkh dhjd ihd hj jkhjkdh   h jdfhjkh jkdjf hdjh mnvbj bmbvjdjbdbjb jhsjd",
    image: image5
  },
  {
    name: "Training Classes",
    description: "hjh hkdha        kdfshjdskj            hfjdhjdhsj  dhf nh  hfdkhjdk k ljfdkh dhjd ihd hj jkhjkdh   h jdfhjkh jkdjf hdjh mnvbj bmbvjdjbdbjb jhsjd",
    image: image6
  },
]

const OurClasses = () => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div>
          <motion.div className="mx-auto w-5/6" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
            <div className="md:w-3/5">
              <HText>OUR CLASSES</HText>
              <p className="py-5">hjjkbfjkdsbhu   hsduigdfhudhsn id         d hfdj jhdsuidfnkdiurhfnkdsvnuisg i  grh           gbvjidbvjdsb iidvj bjbvijnvjibj  nv b  mnvj   vv njin vkbnj n vd jnvvkdnkdnvm    g fnfmdngi  knkgh nv bnifxx vnkdfnbfkfjfvnbfnvfk nkkn,fdnvj fdjkvdfjfndxjk</p>
            </div>
          </motion.div>
          <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
              {classes.map((item: ClassType, index)=> (
                <Class key={`${item.name}-${index}`} item={item} />
              ))}
            </ul>
          </div>
        </motion.div>
    </section>
  )
}

export default OurClasses