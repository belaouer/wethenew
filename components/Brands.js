import { brands } from "../utils/collections";
import Brand from "./Brand";
const Brands = () => {
  return (
    <div className='mb-8 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4'>
      {brands.map((brand) => (
        <Brand
          key={brand.id}
          id={brand.id}
          title={brand.title}
          img={<img src={`${brand.id}.webp`} alt={brand.id} />}
        />
      ))}
    </div>
  );
};
export default Brands;
