import Image from "next/image";
import { supportCardInfo } from "../types/cardTypes";

const SupportCard = ({ iconLink, title }: supportCardInfo) => {
  return (
    <div className="border border-grey1 rounded-3xl lg:w-1/3 flex flex-col items-center gap-4 md:gap-2 md:px-3 lg:px-0 py-5">
      <Image
        src={`/icons/${iconLink}`}
        width={70}
        height={70}
        alt="support icon"
      />
      <p className="text-center">{title}</p>
    </div>
  );
};

export default SupportCard;
