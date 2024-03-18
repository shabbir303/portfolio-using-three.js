import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import {  textVariant } from "../utils/motion";
import {motion} from "framer-motion";
import {styles} from "../style";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-10 mt-10">
      <motion.div variants={textVariant()} className="text-center mx-auto mb-10 ">
          {/* <p className={styles.sectionSubText}>Introduction</p> */}
          <h1 className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ${styles.sectionHeadText}`}>Making App With Modern Technologies</h1>
       </motion.div>
      {
       technologies.map((tech, index)=>(
        <div key={index}>
          <BallCanvas 
            className="w-28 h-28"
           icon={tech.icon}
          />
        </div>
        ))
      }
    </div>
  )
}


export default SectionWrapper(Tech, "tech");