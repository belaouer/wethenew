import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Slide1 from "../assets/images/Make-memories-desktop.webp";
import Slide2 from "../assets/images/Air_Max_1_Desktop.webp";
import Slide3 from "../assets/images/Livraison-48h-desktop.webp";
import Slide11 from "../assets/images/Make-memories-mobile.webp";
import Slide22 from "../assets/images/Air_Max_1_mobile.webp";
import Slide33 from "../assets/images/Livraison-48h-mobile.webp";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div className='mb-8'>
      <Carousel
        className='relative hidden lg:inline-block w-full h-full'
        autoPlay
        infiniteLoop
        showStatus={false}
        renderArrowNext={(hasNext) => (
          <ChevronRightIcon
            className='z-20 absolute right-0 bottom-1/2 h-14 text-[#333] cursor-pointer'
            onClick={hasNext}
          />
        )}
        renderArrowPrev={(hasPrev) => (
          <ChevronLeftIcon
            className='z-20 absolute left-0 bottom-1/2 h-14  text-[#333] cursor-pointer'
            onClick={hasPrev}
          />
        )}>
        <div className='w-full h-[65vh] relative cursor-pointer'>
          <Image
            src={Slide1}
            layout='fill'
            objectFit='cover'
            alt='image slider'
            priority
          />
        </div>
        <div className='w-full h-[65vh] relative cursor-pointer'>
          <Image
            src={Slide2}
            layout='fill'
            objectFit='cover'
            alt='image slider'
            priority
          />
        </div>
        <div className=' w-full h-[65vh] relative cursor-pointer'>
          <Image
            src={Slide3}
            layout='fill'
            objectFit='cover'
            alt='image slider'
            priority
          />
        </div>
      </Carousel>
      <Carousel
        className='lg:hidden z-50'
        infiniteLoop
        autoPlay
        autoFocus
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        renderArrowNext={(hasNext) => (
          <ChevronRightIcon
            className='z-20 absolute right-0 bottom-1/2 h-10 text-[#333] cursor-pointer'
            onClick={hasNext}
          />
        )}
        renderArrowPrev={(hasPrev) => (
          <ChevronLeftIcon
            className='z-20 absolute left-0 bottom-1/2 h-10  text-[#333] cursor-pointer'
            onClick={hasPrev}
          />
        )}>
        <div className='w-full h-[45vh] sm:h-[60vh] md:h-[75vh] relative cursor-pointer'>
          <Image
            src={Slide11}
            layout='fill'
            objectFit='cover'
            alt='image slider'
            priority
          />
        </div>
        <div className='w-full h-[45vh] sm:h-[60vh] md:h-[75vh] relative cursor-pointer'>
          <Image
            src={Slide22}
            layout='fill'
            objectFit='cover'
            alt='image slider'
            priority
          />
        </div>
        <div className='w-full h-[45vh] sm:min-h-[60vh] md:h-[75vh] relative cursor-pointer'>
          <Image
            src={Slide33}
            layout='fill'
            objectFit='cover'
            alt='image slider'
            priority
          />
        </div>
      </Carousel>
    </div>
  );
};
export default Hero;
