// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion"
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components, no-unused-vars
const ServiceCard = ({index, title, icon})=>{
  return(
  // <Tilt index={index} className="xs:w-[250px] sm:w-[250px] w-full ">
  //    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
  //     className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
  //    >
  //     <div 
  //     // eslint-disable-next-line react/no-unknown-property
  //     options={{
  //       max:45,
  //       scale:1,
  //       speed:450
  //     }}
  //     className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
  //     >
  //     <img src={icon} alt={title}  className="w-16 h-16 object-contain"/>
  //     <h1 className="text-[20px] text-center font-bold">{title}</h1>
  //     </div>
      
  //    </motion.div>
  // </Tilt>
  <></>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
       <motion.div variants={textVariant()} className="text-center mx-auto">
          <p className={styles.sectionSubText}>Introduction</p>
          <h1 className={styles.sectionHeadText}>Overview</h1>
       </motion.div>
       <Tilt  className=" w-full ">
     <motion.p variants={fadeIn("right", "spring", 0.5 , 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
     >
      <div 
      // eslint-disable-next-line react/no-unknown-property
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12  max-w-7xl "
      >
        Front-end developer from Dhaka, Bangladesh.As a front-end developer, my primary responsibility is to create the user interface and user experience of a website or web application. This involves translating design concepts into functional and visually appealing web pages by using languages like HTML, CSS, and JavaScript. My role is crucial in enhancing the overall usability and interactivity of the digital products you work on & I eager to learn new teachnologies that improves my productivity.
        {/* <button></button> */}
        <Button variant="contained" 
        // endIcon={<SendIcon />}>
        >
        Click here to see my resume
</Button>
        </div>
      </motion.p>
      </Tilt>
      <div className="mt-[50px] flex flex-wrap gap-10">
      {services?.map((service, index) => {
          return (
            // <div key={index}>
            //  <Tilt className="w-9 h-2 bg-gray-400"></Tilt>
            // </div>
            <ServiceCard 
            key={service?.title}
            index={index}
            {...service}
            />
            )
           
         })} 
      </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
