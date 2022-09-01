import Link from "next/link";

const Collection = ({ title, id }) => {
  return (
    <div className='font-[Darker Grotesque] font-[500] border border-gray-300 py-3 px-4 whitespace-nowrap text-black text-xl mx-4 rounded-md hover:border-[#333] transition duration-200 ease-out cursor-pointer'>
      <Link href={`/collection/${id}`}>{title}</Link>
    </div>
  );
};
export default Collection;
