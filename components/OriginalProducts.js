import Image from "next/image";
import OriginalProduct from "../assets/images/original-products.webp";
const OriginalProducts = () => {
  return (
    <section className='w-[100vw] h-fit flex flex-col sm:flex-row mb-16'>
      <div className='relative flex-1  min-h-[50vh]  md:h-[60vh] lg:h-[80vh] xl:h-[100vh]'>
        <Image
          src={OriginalProduct}
          alt='original sneakers image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='min-h-[50vh] flex-1 md:h-[60vh] lg:h-[80vh]  xl:h-[100vh]   bg-[#F1F1F1]'>
        <div className='flex w-full h-full flex-col  items-start justify-center  space-y-4 pl-14 md:pl-20'>
          <p className='text-4xl md:text-5xl font-[Darker Grotesque] font-bold md:space-x-2'>
            Des produits neufs et authentiques
          </p>
          <p className='text-xl lg:w-[85%]   mb-2'>
            Tous les produits que nous envoyons sont accompagnés d'une carte
            d'authenticité ainsi que d'un scellé certifiant la qualité et
            l'authenticité du produit. Avant d'arriver entre vos mains, ils sont
            contrôlés par nos experts qui s'assurent de leur authenticité.
          </p>
          <button className='flex items-center justify-center text-xl font-bold px-8 py-3 border border-black rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-out'>
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
};
export default OriginalProducts;
