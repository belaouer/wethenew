import Category from "./Category";
import { categories } from "../utils/collections";

const BestSellers = () => {
  return (
    <div className='px-4 xl:px-0 max-w-7xl mx-auto flex flex-col space-y-8 mb-8 font-[Poppins]'>
      {categories.slice(0, 1).map((item) => (
        <Category
          key={item.id}
          title='Best-Sellers'
          id={item.id}
          showAllSelection={false}
        />
      ))}
    </div>
  );
};
export default BestSellers;
