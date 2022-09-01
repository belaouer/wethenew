import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";
import { carouselItems } from "../utils/collections";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const Category = ({ title, id, showAllSelection }) => {
  return (
    <div className='font-[Poppins] '>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl md:text-4xl '>{title}</h1>
        {showAllSelection && (
          <Link href={`/collections/${id}`}>
            <p className='flex items-center space-x-2 border-b border-black  cursor-pointer'>
              Voir la sélection
              <ArrowLongRightIcon className='h-5 ml-2 ' />
            </p>
          </Link>
        )}
      </div>
      <Carousel
        showThumbs={false}
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className='z-50 relative'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        cu
        customRightArrow={
          <ChevronRightIcon className='absolute right-0 cursor-pointer z-[60] h-12' />
        }
        customLeftArrow={
          <ChevronLeftIcon className='absolute left-0 cursor-pointer z-[60] h-12' />
        }
        responsive={{
          desktopLarge: {
            breakpoint: {
              max: 4000,
              min: 1280,
            },
            items: 4,
            partialVisibilityGutter: 30,
          },
          desktop: {
            breakpoint: {
              max: 1280,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 640,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 640,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        shouldResetAutoplay
        showDots={false}
        partialVisibilityGutter={true}>
        {carouselItems.map((item) => (
          <CarouselItem
            key={item.id}
            title={item.title}
            brand={item.brand}
            price={item.price}
            img={
              <img
                src={`${item.img}`}
                alt='sneakers image'
                className='min-w-[195] min-h-[115] max-w-[460] max-h-[280]'
              />
            }
          />
        ))}
      </Carousel>
    </div>
  );
};
export default Category;
