import Link from "next/link";

const Brand = ({ id, title, img }) => {
  return (
    <div className='relative flex justify-center cursor-pointer'>
      <Link href={`/collections/${id}`}>{img}</Link>
      <h1 className='absolute top-3 text-2xl font-[Poppins] font-[500] '>
        {title}
      </h1>
    </div>
  );
};
export default Brand;
