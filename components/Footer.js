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
    <footer className='h-[80vh] bg-[hsl(0,0%,9%)] relative'>
      <div className='w-[80%] lg:w-[65%] mx-auto py-6 flex flex-col items-center'>
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
            <span className='flex items-center text-xl'>
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
          <div className='flex flex-col lg:flex-row lg:justify-center w-full space-y-4 lg:space-y-0 lg:space-x-3'>
            <input
              type='text'
              placeholder='Saisissez votre adresse e-mail...'
              className=' p-3 w-full  lg:w-[350px]'
            />
            <button className='py-3 w-full  lg:w-32 bg-[#E5E5E5] text-black font-[500] font-[Darker Grotesque"] text-lg'>
              S'INSCRIRE
            </button>
          </div>
        </div>

        <div className='hidden lg:grid lg:grid-cols-5 text-white font-[Poppins] gap-4'>
          {cards.map((item) => (
            <div className='flex flex-col space-y-6' key={item.id}>
              <h1 className='text-xl font-[500]'>{item.title}</h1>
              <p className='text-sm font-light text-[#C6C6C6]'>{item.text}</p>
            </div>
          ))}
        </div>

        <div className='w-[80%] lg:w-[65%] absolute bottom-0 flex flex-col  items-center justify-start space-y-4 h-40 py-6 lg:pt-0 lg:flex-row lg:justify-between font-[Poppins] border-t border-[#C6C6C6]'>
          <p className='text-[#C6C6C6]  font-light ml-3'>© 2022 Whethenew</p>
          <div className='flex'>
            <Image src={VisaImg} width={90} height={50} />
            <Image src={MasterImg} width={90} height={50} />
            <Image src={AppleImg} width={90} height={50} />
            <Image src={KlarnaImg} width={90} height={50} />
            <Image src={AmexImg} width={90} height={50} />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
