import { collections } from "../utils/collections";
import Collection from "./Collection";

const Collections = () => {
  return (
    <div className='flex justify-start xl:justify-center  w-[90%]   overflow-x-scroll mb-16 '>
      {collections.map((collection) => (
        <Collection
          key={collection.id}
          title={collection.title}
          id={collection.id}
        />
      ))}
    </div>
  );
};
export default Collections;
