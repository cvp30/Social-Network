import { useState } from "react";
import { Close, Search } from "../../icons";
import { motion } from 'framer-motion';
import SearchInput from "../SearchInput";


const SearchInputMobile = () => {

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
        <Search />
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
        className={`${active ? 'right-0' : '-right-full'} p-1 pt-5 z-20 fixed top-0 bottom-0 w-full flex flex-col justify-start items-center transition-all duration-300`}
      >

        <div className="w-full h-12 flex gap-2">
          <button
            onClick={() => setActive(false)}
            className="h-full aspect-square flex items-center justify-center"
          >
            <Close />
          </button>

          <div className="w-full h-full px-2 flex items-center">
            <SearchInput />
          </div>
        </div>
      </motion.div>



    </nav>
  )
}

export default SearchInputMobile;