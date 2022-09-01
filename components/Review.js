import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";

const Review = ({ numStars, confirmed, title, text, author, commentDate }) => {
  const list = [];
  for (numStars; numStars > 0; numStars--) {
    list.push(
      <span className='bg-green-500 p-[2px]'>
        <StarIcon className='h-4 text-white ' />
      </span>
    );
  }
  return (
    <div className='bg-[#F8F8FA] p-4 flex flex-col justify-between space-y-2 h-[200px] mr-4'>
      <div className='flex items-center space-x-4 '>
        <div className='flex items-center space-x-1'>{list}</div>

        {confirmed && (
          <span className='flex items-center text-lg text-[#6C6C85]'>
            <CheckCircleIcon className='h-4 mr-1' />
            Vérifié
          </span>
        )}
      </div>
      <h1 className='text-lg font-semibold leading-4'>
        Très satisfait de ma commande encore...
      </h1>
      <p className='text-lg leading-5'>
        Très satisfait de ma commande encore une fois. Les délais sont
        respectés, beaucoup d'...
      </p>

      <div className='flex space-x-1'>
        <span className='font-semibold'>{author}</span>
        <span className='font-light'>{commentDate}</span>
      </div>
    </div>
  );
};
export default Review;
