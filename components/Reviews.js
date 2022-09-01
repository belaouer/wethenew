import Review from "./Review";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { reviews } from "../utils/collections";
import { StarIcon } from "@heroicons/react/24/solid";

const Reviews = () => {
  return (
    <div className='px-8 mb-20 w-full flex flex-col space-y-3'>
      <Carousel
        autoPlaySpeed={3000}
        renderArrowsWhenDisabled={true}
        renderButtonGroupOutside={true}
        responsive={{
          desktopLarge: {
            breakpoint: {
              max: 4000,
              min: 1280,
            },
            items: 5,
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
            items: 1,
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
        }}>
        {reviews.map((item) => (
          <Review
            key={item.id}
            numStars={item.numStars}
            confirmed={item.confirmed}
            title={item.title}
            text={item.text}
            author={item.author}
            commentDate={item.commentDate}
          />
        ))}
      </Carousel>
      <div className='flex flex-col items-center font-[Poppins] text-sm space-y-2'>
        <p>
          Une note de <span className='font-semibold'>4.6</span> sur 5 sur la
          base de <span className='font-semibold underline'>9572 avis.</span>{" "}
          Nos avis préférés
        </p>
        <span className='flex items-center font-semibold'>
          <StarIcon className='h-6 text-green-500' /> Trustpilot
        </span>
      </div>
    </div>
  );
};
export default Reviews;
