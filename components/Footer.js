import { StarIcon } from "@heroicons/react/24/solid";
import { cards } from "../utils/collections";
import VisaImg from "../assets/images/Visa.svg";
import MasterImg from "../assets/images/Mastercard.svg";
import AppleImg from "../assets/images/ApplePay.svg";
import KlarnaImg from "../assets/images/Klarna.svg";
import AmexImg from "../assets/images/Amex.svg";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className='min-h-[80vh] bg-[hsl(0,0%,9%)] relative'>
      <div className='w-[80%] xl:w-[67%] mx-auto py-6 flex flex-col items-center'>
        <div className='flex flex-col items-center text-white space-y-8 text-center font-[Poppins] mb-10'>
          <div className='flex flex-col md:flex-row  '>
            <p className='flex items-center whitespace-nowrap text-lg'>
              Consultez nos <span className='font-semibold mx-1'>9623</span>{" "}
              avis{" "}
              {[4, 4, 4, 4, 4].map((index) => (
                <span key={index} className='bg-green-500 p-[2px] ml-1'>
                  <StarIcon className='h-5 text-white' />
                </span>
              ))}
            </p>
            <span className='flex items-center text-xl ml-3'>
              <StarIcon className='h-7 text-green-500 mr-1' /> Trustpilot
            </span>
          </div>
          <h1 className='text-xl lg:text-3xl font-[500]'>
            Inscrivez-vous à notre newsletter et bénéficiez de 10€ offerts !
          </h1>
          <p>
            Offre valable sur votre première commande, à partir de 100€ d'achat.
            Restez informé de toute notre actualité !
          </p>
          <div className='flex flex-col xl:flex-row xl:justify-center w-full space-y-4 xl:space-y-0 xl:space-x-3'>
            <input
              type='text'
              placeholder='Saisissez votre adresse e-mail...'
              className=' p-3 w-full  xl:w-[350px]'
            />
            <button className='py-3 w-full  xl:w-32 bg-[#E5E5E5] text-black font-[500] font-[Darker Grotesque"] text-lg'>
              S'INSCRIRE
            </button>
          </div>
        </div>

        <div className='hidden lg:grid lg:grid-cols-5 text-white font-[Poppins] gap-2 lg:gap-4  mb-12'>
          {cards.map((item) => {
            let list = [];
            for (var i = 0; i < item.text.length; i++) {
              list.push(item.text[i]);
            }
            return (
              <div className='flex flex-col space-y-6' key={item.id}>
                <h1 className='text-xl font-[500]'>{item.title}</h1>

                <div className='text-sm font-light text-[#D4D4D4] flex flex-col space-y-2'>
                  {list.map((itemList, index) => (
                    <p
                      key={index}
                      className='min-w-full cursor-pointer hover:text-gray-600 transition-colors duration-200 ease-linear'>
                      {itemList}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className='w-[80%] lg:w-[65%] absolute bottom-0 flex flex-col  items-center justify-start space-y-4 h-fit pb-2 xl:pb-12  lg:pt-0 lg:flex-row lg:justify-between font-[Poppins] border-t border-[#C6C6C6]bg-red-400'>
          <p className='text-[#D4D4D4]  font-light ml-3'>© 2022 Whethenew</p>
          <div className='flex'>
            <Image src={VisaImg} width={90} height={50} alt='payment methode' />
            <Image
              src={MasterImg}
              width={90}
              height={50}
              alt='payment methode'
            />
            <Image
              src={AppleImg}
              width={90}
              height={50}
              alt='payment methode'
            />
            <Image
              src={KlarnaImg}
              width={90}
              height={50}
              alt='payment methode'
            />
            <Image src={AmexImg} width={90} height={50} alt='payment methode' />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
