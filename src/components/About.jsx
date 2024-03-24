// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion"
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { Button, Chip } from "@mui/material";
import { FaCloudDownloadAlt } from "react-icons/fa";

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
        {/* <Button variant="contained" 
        endIcon={<FaCloudDownloadAlt />}>
        
        Click here to see my resume
</Button> */}
           <div className="flex justify-center items-center mx-auto">
           <a href="https://drive.google.com/file/d/19sTqP9D_H7aiddB5c53W_pBX3FrIQ_74/view?usp=sharing" target="_blank" rel="noopener noreferrer">
           <Chip  
           className="flex justify-center items-center mx-auto mt-3 text-[25px] font-bold pl-3"
            label="Click here to see my resume"
             color="primary"
              icon={<FaCloudDownloadAlt />}
               variant="outlined"
               
               />
           </a>
           </div>
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
