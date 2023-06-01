import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 250,
          }}
          className='bg-tertiary rounded-[20px] py-5  px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-16 h-16 object-contain'

          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 className={styles.sectionHeadText}>Overview</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary tex-[17px] max-w-3x1 leading-[30px]"
      >
        Je suis un développeur Front-end 
        avec une expérience en JavaScript et une expertise
        dans des frameworks tels que React, Node.js et Three.js.
        Je suis capable d'apprendre rapidement et 
        je collabore étroitement avec les clients 
        pour créer des solutions efficaces, évolutives et conviviales
        qui résolvent des problèmes. 
        Travaillons ensemble pour donner vie à vos idées !
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard 
            key={service.title}
            index={index} {...service}
            />
          )
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
