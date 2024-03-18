/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./E.css";
import national from "../assets/tech/national.png";
import colleage from "../assets/tech/colleage.png";
import school from "../assets/tech/school.png";
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <div className="App">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              date="2018 - 2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<img className="p-[10px]" src={national} />}
            >
              <h3 className="vertical-timeline-element-title text-left w-full text-[25px]">Bachelor of Science in Electronic & Communication Engineering</h3>
              <p className="text-left">
                Institute: National University<br />
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
              icon={<img className="p-[10px]" src={colleage} />}
            >
              <h3 className="vertical-timeline-element-title text-left w-full text-[25px]">Higher Secondary School Certificate</h3>
              <p className="text-left">
                Group : Science<br />
                Institute : Rajendrapur Cantonment Public School & College<br />
                Board : Dhaka<br />
                Passing Year : 2016<br />
                Result : GPA 4.83 Out of 5.00
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2004-2014"
              contentStyle={{ background: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<img className="p-[10px]" src={school} />}
            >
              <h3 className="vertical-timeline-element-title text-left w-full text-[25px]"> Secondary School Certificate</h3>
              <p className="text-left">
                Group : Science<br />
                Institute : Cantonment Board High School, Rajendrapur<br />
                Board : Dhaka<br />
                Passing Year : 2014<br />
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