import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wethenew</title>
        <meta
          name='description'
          content='Wethenew is website which allow you to find your sneakers with best price'
        />
        <html lang='fr'></html>
      </Head>
      <Hero />
      <Collections />
      <Categories />
    </div>
  );
}
