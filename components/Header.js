import {
  ShoppingBagIcon,
  UserIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Header = ({ handleClick }) => {
  return (
    <header className='flex flex-col z-20'>
      <div className='flex justify-between item-center  mx-auto py-3 w-full'>
        <Link href='/'>
          <img
            src='Logo.webp'
            className='h-16 w-52 object-cover cursor-pointer'
            alt='logo'
          />
        </Link>
        <div className='hidden lg:inline-flex w-[45%] h-11 m-auto items-center rounded-md border border-[#D8D8D8]'>
          <input
            type='text'
            placeholder='Rechercher un produit, une marque....'
            className='border-none outline-none w-full h-full pl-4 rounded-tl-lg rounded-bl-lg placeholder:text-xl'
          />
          <MagnifyingGlassIcon className='h-9 text-gray-600 px-2' />
        </div>
        <div className='flex items-center space-x-8'>
          <UserIcon className='h-9 cursor-pointer' />
          <HeartIcon className='hidden sm:inline-flex h-9 cursor-pointer' />
          <ShoppingBagIcon className='h-9 cursor-pointer' />
          <span className='px-8 border-l' onClick={handleClick}>
            <Bars3Icon className='h-10  cursor-pointer' />
          </span>
        </div>
      </div>
      <div className='flex  w-[90%] md:w-[50%] h-12 m-auto items-center rounded-md border border-gray-600 lg:hidden mb-4 '>
        <input
          type='text'
          placeholder='Rechercher un produit, une marque....'
          className='border-none outline-none w-full h-full pl-4 rounded-tl-lg rounded-bl-lg placeholder:text-xl'
        />
        <MagnifyingGlassIcon className='h-9 text-gray-600 px-2 cursor-pointer' />
      </div>
    </header>
  );
};
export default Header;
