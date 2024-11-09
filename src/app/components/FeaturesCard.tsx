import Image from "next/image";
import { featuresCardInfo } from "../types/cardTypes";
import Link from "next/link";

const FeaturesCard = ({ title, description }: featuresCardInfo) => {
  return (
    <div className="bg-grey4 p-4 rounded-lg lg:w-1/3 shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <Link href="#">
          <Image
            src="/icons/link-button.svg"
            width={35}
            height={35}
            alt="link button icon"
          />
        </Link>
      </div>
      <p className="text-grey2 mt-2">{description}</p>
    </div>
  );
};

export default FeaturesCard;
