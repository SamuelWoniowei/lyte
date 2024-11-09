import Image from "next/image";
import { reviewCardInfo } from "../types/cardTypes";

const ReviewCard = ({ name, location, comment, image }: reviewCardInfo) => {
  return (
    <div className="md:w-72 lg:w-80">
      <div className="flex items-center gap-6 text-left">
        <Image src={`/images/${image}`} width={60} height={60} alt={name} />
        <div>
          <p className="text-lg text-grey2">{name}</p>
          <p>📍 {location}</p>
        </div>
      </div>

      <div className="relative">
          <div className="flex gap-1 justify-center bg-grey4 w-32 mx-auto mt-6 py-1 rounded-md ">
        <Image src="/icons/star.svg" width={15} height={15} alt="star icon" />
        <Image src="/icons/star.svg" width={15} height={15} alt="star icon" />
        <Image src="/icons/star.svg" width={15} height={15} alt="star icon" />
        <Image src="/icons/star.svg" width={15} height={15} alt="star icon" />
        <Image src="/icons/star.svg" width={15} height={15} alt="star icon" />
      </div>

      <div className="bg-grey4 rounded-lg -mt-3">
        <p className="lg:w-11/12 lg:mx-auto text-grey2 lg:text-lg p-5">{comment}</p>
      </div>
      </div>
    
    </div>
  );
};

export default ReviewCard;
