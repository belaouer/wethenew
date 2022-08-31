import {
  ShoppingBagIcon,
  UserIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/Logo.webp";
const Header = () => {
  return (
    <header className='flex flex-col'>
      <div className='flex justify-between item-center  mx-auto py-3 w-full'>
        <Link href='/'>
          <Image src={Logo} width={200} height={60} objectFit='cover' />
        </Link>
        <div className='hidden lg:inline-flex w-[45%] h-11 m-auto items-center rounded-lg border'>
          <input
            type='text'
            placeholder='Rechercher un produit, une marque....'
            className='border-none outline-none w-full h-full pl-4 rounded-tl-lg rounded-bl-lg'
          />
          <MagnifyingGlassIcon className='h-9 text-gray-600 px-2' />
        </div>
        <div className='flex items-center space-x-8'>
          <UserIcon className='h-10' />
          <HeartIcon className='hidden sm:inline-flex h-10' />
          <ShoppingBagIcon className='h-10' />
          <span className='px-8 border-l'>
            <Bars3Icon className='h-10 ' />
          </span>
        </div>
      </div>
      <div className='flex  w-[90%] md:w-[50%] h-14 m-auto items-center rounded-lg border lg:hidden'>
        <input
          type='text'
          placeholder='Rechercher un produit, une marque....'
          className='border-none outline-none w-full h-full pl-4 rounded-tl-lg rounded-bl-lg'
        />
        <MagnifyingGlassIcon className='h-9 text-gray-600 px-2' />
      </div>
    </header>
  );
};
export default Header;
