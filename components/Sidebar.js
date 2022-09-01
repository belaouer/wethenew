import Link from "next/link";
import {
  XMarkIcon,
  GlobeAltIcon,
  BellIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
const variants = {
  initial: { opacity: 0 },
  open: { opacity: 1, right: 0 },
  closed: { opacity: 0, right: "-100%" },
};

const Sidebar = ({ isOpen, handleClick }) => {
  return (
    <motion.div
      variants={variants}
      initial={"initial"}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.7, delayChildren: 2 }}
      className='absolute  top-0 bottom-0 z-[200] w-[100vw]   bg-white/[.7] flex justify-end'>
      <div className='w-[80%] md:w-[40%] lg:w-[25%] bg-white fixed top-0 bottom-0'>
        <div className='flex items-center px-4 mb-12'>
          <XMarkIcon className='h-10 cursor-pointer' onClick={handleClick} />
          <Link href='/'>
            <img
              src='Logo.webp'
              className='h-16 w-52 object-cover cursor-pointer'
              alt='logo'
            />
          </Link>
        </div>

        <nav className='flex flex-col space-y-6 font-[Poppins] text-xl pl-16 lg:pl-24 pr-4'>
          <p className='flex justify-between items-center cursor-pointer'>
            Sneakers <ChevronRightIcon className='h-8' />
          </p>
          <p className='flex justify-between items-center cursor-pointer'>
            Streetwear <ChevronRightIcon className='h-8' />
          </p>
          <p className='flex justify-between items-center cursor-pointer'>
            Découvrir <ChevronRightIcon className='h-8' />
          </p>
          <p className='font-[500] cursor-pointer'>Back to school 📚</p>
          <p className='font-[500] cursor-pointer'>Livraison 48h 🚀</p>
          <p className='cursor-pointer'>Nouveautés</p>
          <p className='cursor-pointer'>Vendre</p>
          <p className='italic'>Le Blueprint</p>
          <p className='flex items-center border-t pt-5  cursor-pointer'>
            <GlobeAltIcon className='h-8 mr-2' /> FR
          </p>
          <p className='flex items-center  pt-6 cursor-pointer'>
            <BellIcon className='h-8 mr-2' /> Actualités
          </p>
        </nav>
      </div>
    </motion.div>
  );
};
export default Sidebar;
