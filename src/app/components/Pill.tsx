import pillText from "../types/pillTypes";

const Pill = ({ text, width=36 }:pillText) => {
  return (
    <p className={`border border-grey1 px-3 py-2 w-${width} font-medium  rounded-full  md:text-xl text-grey2`}>
      {text}
    </p>
  );
};

export default Pill;
