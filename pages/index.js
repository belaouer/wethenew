import Head from "next/head";

import Hero from "../components/Hero";
import Collections from "../components/Collections";
import Categories from "../components/Categories";
import MemoriesSection from "../components/MemoriesSection";
import Brands from "../components/Brands";
import Reviews from "../components/Reviews";
import Articles from "../components/Articles";
import OriginalProducts from "../components/OriginalProducts";
import BestSellers from "../components/BestSellers";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Wethenew</title>
      </Head>

      <Hero />
      <Collections />
      <Categories />
      <MemoriesSection />
      <Brands />
      <Reviews />
      <Articles />
      <OriginalProducts />
      <BestSellers />
    </div>
  );
}
