const CarouselItem = ({ title, brand, price, img }) => {
  return (
    <div className='min-w-[260px] sm:min-w-[290px] xl:min-w-[330px] h-fit relative cursor-pointer'>
      {img}
      <div className='w-[90%] mx-auto text-center'>
        <h1 className='text-lg '>{title}</h1>
        <h2 className='text-[#4d4d4d] text-lg'>{brand}</h2>
        <p className='text-sm font-light italic text-[#4d4d4d]'>{price}</p>
      </div>
    </div>
  );
};
export default CarouselItem;
