const Article = ({ title, text, img }) => {
  return (
    <div className='flex flex-col space-y-4'>
      {img}
      <div className='flex flex-col space-y-4 items-start'>
        <h1 className='text-2xl font-[500]'>{title}</h1>
        <p className=' text-sm font-extralight'>{text}</p>
        <button className='flex items-center justify-center px-5  lg:px-8 py-3 border border-black rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-out font-[Darker Grotesque"]'>
          VOIR L'ARTICLE ENTIER
        </button>
      </div>
    </div>
  );
};
export default Article;
