import {motion} from "framer-motion";
import {styles} from "../style";
import {ComputersCanvas} from "./canvas";

const Hero = () => {
  return (
    <section className="w-full h-screen relative mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
              <div className="w-1 sm:h-80 h-40 violet-gradient"/>
          </div>
          <div className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Shabbir</span>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a Front-end Developer. I bring visual design concepts to life through code, ensuring the user experience is seamless and enjoyable.</p>
              </div>
        </div>
        <ComputersCanvas/>
    </section>
  )
}

export default Hero