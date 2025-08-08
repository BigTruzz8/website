import {motion } from 'framer-motion';
import {styles} from '../styles';



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center
        met-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>          

        </div>
        <div>
          <motion.h1 initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8, ease:'easeIn'}}className={`${styles.heroHeadText} text-white`} >Hello, I'm <span className='text-[#915eff]'>Surya</span></motion.h1>
          <motion.p initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8, ease:'easeIn'}}  className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my Portfolio!
          </motion.p>
        </div>

        
      </div>
      
    </section>
  )
}

export default Hero