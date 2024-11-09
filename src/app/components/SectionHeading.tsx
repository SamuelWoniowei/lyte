import headingInfo from "../types/headingTypes";
import Pill from "./Pill";

const SectionHeading = ({ title, body, children }: headingInfo) => {
  return (
    <>
      <Pill text={title} />
      {children}
      <p className="lg:text-xl text-grey2 w-11/12 md:w-full">{body}</p>
    </>
  );
};

export default SectionHeading;
