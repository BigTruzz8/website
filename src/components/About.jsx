import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';  // Ensure styles is correctly imported
import { textVariant,fadeIn } from '../utils/motion';  // Ensure textVariant is correctly imported
import {services} from '../constants';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full black-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className='bg-tertiary rounded-[20px] py-5 px-12
        min-h-[280px] flex justify-evenly items-center flex-col'>
          <motion.img initial={{scale: 1}} animate={{scale: [1,1.05,1]}} transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}} src={icon} alt={title}
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px]
          font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <div id="about" className="section">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] 
      max-w-3xl leading-[30px]'>
      My name is Surya Kotera, and I am currently a Computer Science student at Virginia Tech interning at Peraton. I enjoy building software and websites using 
      frameworks like React, JavaScript, and Node. Through my work experience and academic 
      coursework, I have developed various technical skills in Java, Python, C, MongoDB, and SQL.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) => 
        (<ServiceCard key = {service.title}
        index = {index} {...service}/>
        ))}

      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
