import Image from "next/image";
import MemoriesImg from "../assets/images/memories.jpeg";

const MemoriesSection = () => {
  return (
    <section className='w-full h-[100vh] flex flex-col sm:flex-row'>
      <div className='relative w-full h-1/2 flex-1 md:h-[60vh] lg:h-[80] xl:h-full'>
        <Image
          src={MemoriesImg}
          alt='memories image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='flex-1 w-full h-1/2 md:h-[60vh] lg:h-[80] xl:h-full  flex flex-col  items-start justify-center pl-14 space-y-4'>
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
    </section>
  );
};
export default MemoriesSection;
