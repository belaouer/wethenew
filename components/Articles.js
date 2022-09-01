import Article from "./Article";
import { articles } from "../utils/collections";
const Articles = () => {
  return (
    <div className='flex flex-col space-y-8 w-[62%] mx-auto font-[Poppins]'>
      <div className='w-full flex justify-center border-b border-black border-dotted pb-4'>
        <h1 className='text-lg lg:text-xl font-[500]'>Le Blueprint</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {articles.map((item) => (
          <Article
            key={item.id}
            title={item.title}
            text={item.text}
            img={<img src={`${item.img}.webp`} alt={item.title} />}
          />
        ))}
      </div>
    </div>
  );
};
export default Articles;
