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
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Hero />
      <Collections />
      <Categories />
    </div>
  );
}
