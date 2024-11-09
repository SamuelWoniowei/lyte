import Link from "next/link";
import { priceCardInfo } from "../types/cardTypes";
import Image from "next/image";

const PriceCard = ({
  heading,
  description,
  amount,
  diskSpace,
  bandwidth,
  includes,
}: priceCardInfo) => {
  const wholeAmount: string = amount.split(".")[0];
  const restAmount: string = amount.split(".")[1];
  return (
    <div className="border border-grey1 rounded-3xl py-6 px-8 text-left shadow-sm">
      <h2 className="text-xl font-medium">{heading}</h2>
      <p className="my-4 text-grey2">{description}</p>
      <p className="text-2xl font-medium">
        {wholeAmount}.<span className="text-sm">{restAmount}</span>
      </p>
      <p className="text-sm text-grey2">per month</p>
      <Link
        className="block w-full text-center px-3 bg-brand1 text-white py-3 rounded-full my-6 font-semibold "
        href="/"
      >
        Order Now
      </Link>
      <div className="flex gap-2">
        <Image src="/icons/disk.svg" width={20} height={20} alt="disk icon" />
        <p>
          {diskSpace} <span className="text-grey2">of Disk Space</span>{" "}
        </p>
      </div>
      <div className="flex gap-2 mt-3 mb-6">
        <Image src="/icons/cloud.svg" width={20} height={20} alt="disk icon" />
        <p>
          {bandwidth} <span className="text-grey2">of Data Bandwidth</span>
        </p>
      </div>
      <hr className="border border-grey1 mb-5" />

      <h3 className="font-medium mb-4">Also includes:</h3>

      {includes.length > 0 && (
        <div className="space-y-2">
          {includes.map((item, index) => (
            <p className="flex flex-row gap-2 " key={index}>
              <Image
                src="/icons/check.svg"
                width={20}
                height={20}
                alt="check icon"
              />{" "}
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceCard;
