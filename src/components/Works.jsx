import { Tilt } from "react-tilt";
import {motion} from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { github } from "../assets";

const Works = () => {
  return (
    <div>
      <motion.div>
        <h1 className={`${styles.sectionSubText}`}>My Work</h1>
        <h1 className={`${styles.sectionHeadText}`}>Projects</h1>
      </motion.div>
      <div className="w-full flex">
        <motion.p 
         variants={fadeIn("", "", 0.1, 1)}
         className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real world examples through my work. Each Projects berifely described with links to code repositories and live demos in it. It reflects my ability to solve my complex problems, work with different technologies, and manage projects effectievely.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {
          projects.map((project, index)=>
           {return (
              <motion.div key={index}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              >
                <Tilt 
                 options={{
                  max:45,
                  scale:1,
                  speed:450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
                >
                    <div className="relative w-full h-[230px]">
                      <img src={project?.image} alt="" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                </Tilt>

              </motion.div>
            )}
          )
        }
      </div>
    </div>
  )
}

export default SectionWrapper(Works, "");