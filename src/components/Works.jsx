

import { motion } from 'framer-motion';

import { styles } from '../styles';

import { SectionWrapper } from '../hoc';

import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { Tilt } from 'react-tilt';
import { github } from '../assets';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) =>
{
  return (
    <motion.div variants={fadeIn("up", "spring",
      index * 0.5, 0.75
    )}>
      <Tilt options={{
        max:20,
        scale:1,
        speed: 200
      }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px]
      w-full">
        <div className="relative w-full h-[230px]">
          <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
          />
        </div>
        <div className='absolute inset-0 flex justify-end m-3
        card-img_hover'>
          <motion.div initial={{scale: 1}} animate={{scale: [1,1.2,1]}} transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}}
          onClick={() => window.open(source_code_link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img 
            src={github}
            alt={github}
            className='w-3/4 h-3/4 object-contain'/>
            
            
          </motion.div>

        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='text-secondary mt-2 text-[14px]'>{description}</p>

        </div>
        
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div id="work" className="section">
      <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>
      <div className='w-full flex justify-center items-center'> 
        <motion.p variants={fadeIn("","", 0.1,1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl
        leading-[30px] text-center'>
          Check out my projects down below!

        </motion.p>

      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {
          projects.map((project,index) =>
          (<ProjectCard key={`project-${index}`}
            index={index}
            {...project}/>

          )) 
        }

      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
