import Category from "./Category";
import { categories } from "../utils/collections";

const Categories = () => {
  return (
    <div className='px-4 xl:px-0 max-w-7xl mx-auto flex flex-col space-y-8 mb-16'>
      {categories.map((item) => (
        <Category
          key={item.id}
          title={item.title}
          id={item.id}
          showAllSelection={true}
        />
      ))}
    </div>
  );
};
export default Categories;
