import { useState } from "react";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Close } from "../icons";


const MenuDesignMobile = ({ icon, title, children }) => {
  const [active, setActive] = useState(false);

  const variants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  }


  return (
    <nav className="relative">
      <button className="h-8 text-skyBlue" onClick={() => setActive(!active)}>
        {icon}
      </button>

      <motion.div
        variants={variants}
        initial="hidden"
        animate={active ? 'visible' : 'hidden'}
        className="w-4 h-4 rounded-full bg-white dark:bg-secondary z-10 fixed top-0 right-0"
      />

      <motion.div
        variants={itemVariants}
        initial='hidden'
        animate={active ? 'visible' : ''}
        className={`${active ? 'right-0' : '-right-full'} p-3 z-20 fixed top-0 bottom-0 w-full flex flex-col justify-start items-center transition-all duration-300`}
      >

        <div className="w-full h-12 flex gap-2">
          <button
            onClick={() => setActive(false)}
            className="h-full aspect-square flex items-center justify-center"
          >
            <Close />
          </button>

          <p className="grow h-full px-2 flex justify-center items-center">
            {title}
          </p>
        </div>

        <div className="w-full h-fit pt-3">
          {children}
        </div>
      </motion.div>



    </nav>
  )
}

MenuDesignMobile.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  children: PropTypes.element,
}


export default MenuDesignMobile;