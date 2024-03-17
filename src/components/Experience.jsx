/* eslint-disable react/prop-types */
import { styles } from "../style";
// import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { AiFillBug } from "react-icons/ai";
import "react-vertical-timeline-component/style.min.css";
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "./E.css";
import national from "../assets/tech/national.png";
import colleage from "../assets/tech/colleage.png";
import school from "../assets/tech/school.png";
// eslint-disable-next-line react/prop-types
// const Education =({education})=>(
//   <VerticalTimelineElement
//    contentStyle={{background:"#1d1836", color:"#fff"}}
//    contentArrowStyle={{borderRight:"7px solid #232631"}}
//    data={education.date}
//    iconStyle={{background:education.iconBg}}
//    icon={
//    <div>
//     <img src={education.icon}
//      alt={education.company_name}
//      className="w-[60%] h-[60%] object-contain"
//      />
//    </div>
//   }
//   >
//     <div className="text-white text-[24px] font-bold">
//     {education?.title}
//     </div>
//   </VerticalTimelineElement>
// )
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
{/* 
        {
          experiences.map((education, index) => {
            return (
              <VerticalTimeline key={education.title}>
                <VerticalTimelineElement
                   className="vertical-timeline-element--work"
                  contentStyle={{ background: "#1d1836", color: "#fff" }}
                  contentArrowStyle={{ borderRight: "7px solid #232631" }}
                  data={education.date}
                  iconStyle={{ background: education.iconBg }}
                  icon={
                    <div>
                      <img src={education.icon}
                        alt={education.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                >
                  <div className= "vertical-timeline-element-title text-white text-[24px] font-bold">
                    {education?.title}
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            )
          })} */}
          <div className="App">
      {/* <h1>React Vertical Timeline</h1>
      <div className="empty">Empty Container</div> */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1d1836", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2018 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />}
          icon={<img className="p-[10px]" src={national}/>}
        >
          <h3 className="vertical-timeline-element-title text-left w-full text-[25px]">Bachelor of Science in Electronic & Communication Engineering</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
          <p className="text-left">
            Institute: National University<br/>
            Result : In progress
          </p>
          <p className="text-left">
          
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014-2016"
          contentStyle={{ background: "#1d1836", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="p-[10px]" src={colleage}/>}
        >
          <h3 className="vertical-timeline-element-title text-left w-full text-[25px]">Higher Secondary School Certificate</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p className="text-left">
          Group : Science<br/>
Institute : Rajendrapur Cantonment Public School & College<br/>
Board : Dhaka<br/>
Passing Year : 2016<br/>
Result : GPA 4.83 Out of 5.00
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2004-2014"
          contentStyle={{ background: "#1d1836", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="p-[10px]" src={school}/>}
        >
          <h3 className="vertical-timeline-element-title text-left w-full text-[25px]"> Secondary School Certificate</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p className="text-left">
          Group : Science<br/>
Institute : Cantonment Board High School, Rajendrapur<br/>
Board : Dhaka<br/>
Passing Year : 2014<br/>
Result : GPA 5.00 Out of 5.00
          </p>
        </VerticalTimelineElement>
        
        
      </VerticalTimeline>
    </div>

      </div>
    </>
  )
}

export default SectionWrapper(Experience, "education");