import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative overflow-x-hidden'>
      <Header handleClick={handleClick} />
      <Sidebar isOpen={isOpen} handleClick={handleClick} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
