import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import Categories from "../components/Categories";
import MemoriesSection from "../components/MemoriesSection";
import Brands from "../components/Brands";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wethenew</title>
      </Head>
      <Hero />
      <Collections />
      <Categories />
      <MemoriesSection />
      <Brands />
      <Reviews />
    </div>
  );
}
