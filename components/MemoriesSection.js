import Image from "next/image";
import MemoriesImg from "../assets/images/memories.jpeg";

const MemoriesSection = () => {
  return (
    <section className='w-full h-fit flex flex-col sm:flex-row mb-8'>
      <div className='relative w-full min-h-[50vh] flex-1 md:h-[60vh] lg:h-[80vh] xl:h-[100vh]'>
        <Image
          src={MemoriesImg}
          alt='memories image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='flex-1 w-full min-h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[100vh]     bg-[#F1F1F1]'>
        <div className=' w-full h-full flex flex-col  items-start justify-center pl-14 lg:pl-20  space-y-4'>
          <div className='flex flex-col md:flex-row text-5xl font-[Darker Grotesque] font-bold md:space-x-2'>
            <span>MAKE</span>
            <span>MEMORIES</span>
          </div>
          <p className='text-lg w-80 sm:w-full mb-2'>
            Tentez de gagner la paire de vos rêves pour la rentrée !
          </p>
          <button className='flex items-center justify-center text-xl font-bold px-8 py-3 border border-black rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-out'>
            Je participe
          </button>
        </div>
      </div>
    </section>
  );
};
export default MemoriesSection;
