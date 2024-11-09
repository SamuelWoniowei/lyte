import Image from "next/image";
import Navbar from "./components/Navbar";
import Pill from "./components/Pill";
import PriceCard from "./components/PriceCard";
import FeaturesCard from "./components/FeaturesCard";
import SectionHeading from "./components/SectionHeading";
import ReviewCard from "./components/ReviewCard";
import Link from "next/link";
import SupportCard from "./components/SupportCard";
export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center text-center justify-center space-y-7  lg:w-10/12 lg:mx-auto mt-28 md:mt-36">
        <Pill text="Welcome 👋" />
        <p className="text-4xl md:text-7xl lg:text-8xl font-semibold leading-loose">
          Welcome{" "}
          <span className="bg-welcome-gradient bg-clip-text text-transparent">
            to Your New
          </span>{" "}
          Digital Home!
        </p>
        <p className="md:text-2xl lg:text-3xl md:w-10/12 lg:w-9/12 text-grey0">
          High performance dedicated servers. with cloud flexibility &
          Scalability.
        </p>
        <form className=" w-11/12 md:w-9/12 lg:w-3/6">
          <div className="flex flex-row border border-grey1 rounded-full py-1.5 px-2">
            <input
              type="search"
              placeholder="www.example.com"
              className="px-2 py-1 flex-grow focus:outline-none focus:border-none bg-transparent"
            />
            <button className="px-3 lg:px-0 lg:w-36 md:py-3 text-sm lg:text-sm text-center bg-black0 rounded-full text-white hover:bg-brand2">
              Search Domain
            </button>
          </div>
        </form>
      </section>

      <section className="mt-16 flex flex-col  justify-center items-center lg:relative lg:mx-16">
        <Image
          src="/images/mobile.svg"
          width={400}
          height={400}
          className="w-full lg:w-3/4 lg:-ml-20 h-auto"
          alt="welcome to lytehosting"
        />

        <section className="relative -mt-48 md:-mt-96 flex flex-col justify-center items-center text-center pt-2  bg-white ">
          <SectionHeading
            title="About Us 🕵"
            body="We provide high performance dedicated servers with cloud flexibility
            and scalability."
          >
            <p className="text-2xl lg:text-6xl font-medium my-3 lg:my-6">
              Why Choose Lyte-
              <span className="bg-lyte-name-gradient bg-clip-text text-transparent">
                Hosting
              </span>
              ?
            </p>
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-left mt-10 mx-6 lg:mx-0">
            <div className="bg-grey3 p-5 lg:p-10 rounded-xl shadow-sm border border-grey1">
              <h3 className="font-medium mb-2 lg:text-xl">
                24/7 Customers Support{" "}
                <span className="text-lg lg:text-sm">🤳🏻</span>
              </h3>
              <p className="text-grey2">
                At Lyte Hosting, we pride ourselves on providing exceptional
                customer service around the clock
              </p>
            </div>
            <div className="bg-grey3 p-5 lg:p-10 rounded-xl shadow-sm border border-grey1">
              <h3 className="font-medium mb-2 lg:text-xl">
                100% Network Up-time Guarantee{" "}
                <span className="text-lg lg:text-sm">📡</span>
              </h3>
              <p className="text-grey2">
                Your business deserves the best !, and with our 100% network up
                time, you can trust that your online presence active
              </p>
            </div>
            <div className="bg-grey3 p-5 lg:p-10 rounded-xl shadow-sm border border-grey1">
              <h3 className="font-medium mb-2 lg:text-xl">
                Daily Backup With One Click{" "}
                <span className="text-lg lg:text-sm">🔄</span>
              </h3>
              <p className="text-grey2">
                Our daily One Click Backup features ensures your website data is
                secured and up to date with just a click .
              </p>
            </div>
            <div className="bg-grey3 p-5 lg:p-10 rounded-xl shadow-sm border border-grey1">
              <h3 className="font-medium mb-2 lg:text-xl">
                30 Days Money Back Guarantee{" "}
                <span className="text-lg lg:text-sm">💰</span>
              </h3>
              <p className="text-grey2">
                We believe in the quality and reliability of our services. That
                is why we offer a 30 Days Money Back Guarantee.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="mt-10 lg:mt-20 flex flex-col text-center justify-center items-center lg:mx-16">
        <SectionHeading
          title="Our Pricing 💰"
          body="We provide high performance dedicated servers with cloud flexibility
          and scalability."
        >
          <p className="text-2xl lg:text-6xl font-medium my-3 lg:my-4">
            Our Web{" "}
            <span className="bg-hosting-name-gradient bg-clip-text text-transparent">
              Hosting
            </span>{" "}
            Plans & Pricing{" "}
          </p>
        </SectionHeading>

        <div className="flex flex-col lg:flex-row gap-6 mt-10 mx-6 lg:mx-0">
          <PriceCard
            heading="Shared Hosting"
            description="Unbeatable speed. Shared hosting with top security. Low cost."
            amount="$0.72"
            diskSpace="2gb"
            bandwidth="10gb"
            includes={["Unlimited Email Account", "Free SSL Security"]}
          />
          <PriceCard
            heading="Word-Press Hosting "
            description="Unbeatable speed. Word-Press hosting with top security. on budgets  "
            amount="$2.28"
            diskSpace="10gb"
            bandwidth="100gb"
            includes={["Unlimited Email Account", "Free SSL Security"]}
          />
          <PriceCard
            heading="VPS Hosting"
            description="High performance VPS Hosting with cloud flexibility and scalability."
            amount="$7.50"
            diskSpace="40gb"
            bandwidth="2TB"
            includes={["2gb of RAM ", "4V CPU Core"]}
          />
        </div>
      </section>
      <section className="mt-10 lg:mt-28 flex flex-col text-center justify-center items-center lg:mx-16">
        <SectionHeading
          title="Our Features 🧑🏻‍💻"
          body=" Make the most out of your hosting plans, all for a price that fits
          your budget."
        >
          <p className="text-2xl lg:text-6xl font-medium lg:my-4 my-3">
            Our Premium{" "}
            <span className="bg-brand1 bg-clip-text text-transparent">
              Hosting
            </span>{" "}
            Features
          </p>
        </SectionHeading>
        <div className="flex flex-col lg:flex-row gap-4 mt-10 lg:border border-grey5 rounded-lg p-4 text-left">
          <FeaturesCard
            title="Register New Domain"
            description="Own your online space! Register your domain name for a professional website."
          />
          <FeaturesCard
            title="Transfer Your Domain"
            description="Upgrade Your Hosting, Extend Your Domain (Transfer Today!)"
          />
          <FeaturesCard
            title="Cloud Technology"
            description="Our Cloud computing allows your applications to be shared through our network over the Internet’s ."
          />
        </div>
      </section>

      <section className="mt-10 lg:mt-16 flex flex-col text-center justify-center items-center  bg-map-background bg-cover bg-no-repeat">
        <SectionHeading
          title="Our Reviews ⭐"
          body="1,000+ Customers Served. 3+ Years of Experience."
        >
          <p className="text-2xl lg:text-6xl font-medium my-3 lg:my-4">
            What Our Clients Says ?
          </p>
        </SectionHeading>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mx-6 md:mx-0">
          <ReviewCard
            image="abdul.png"
            name="Abdulazeez Mubarak"
            location="📍 Lagos State, Nigeria "
            comment="Their hosting is very affordable and their costumer service is the best"
          />
          <ReviewCard
            image="sayless.png"
            name="Sayles Russell"
            location="United States "
            comment="I recently started using Lytehosting and so far, my experience has been positive."
          />
          <ReviewCard
            image="codehub.png"
            name="Code Naija Hub"
            location="FCT, Abuja, Nigeria  "
            comment="Trust worthy, one of the best reliable hosting company. Fast response time, with 24/7 no downtime. Good services. I must commend the company."
          />
          <ReviewCard
            image="victor.png"
            name="Victor Edet"
            location="Jos State, Nigeria 🇳"
            comment="These guys are excellent. Excellent in customer service. I have been using other host until i found them & they have been on top of their game."
          />
        </div>
      </section>

      <section className="lg:mx-16 flex flex-col items-center">
        <Link
          href="#"
          className={`flex items-center text-center mt-6 gap-2 border border-grey1 px-2 py-2    font-medium  rounded-2xl  md:text-lg text-grey2`}
        >
          See other customers reviews{" "}
          <Image
            src="/icons/arrow-right-double.svg"
            width={30}
            height={30}
            alt="icon link"
          />
        </Link>
        <div className="flex flex-col justify-center md:flex-row gap-4 mt-10 lg:mt-16 w-11/12 md:w-full ">
          <SupportCard
            iconLink="message.svg"
            title="Live Chat & Support Solution "
          />
          <SupportCard
            iconLink="mail-open.svg"
            title="Send Us A Tickets You Created "
          />
          <SupportCard
            iconLink="bookmark.svg"
            title="Build Knowledge BAse Systen  "
          />
        </div>
      </section>

      <section className="lg:w-8/12 lg:mx-auto mt-16 -mb-10 relative z-20 bg-white p-1 border-2 rounded-2xl border-red-400">
        <div className="bg-brand1 px-5 py-8 rounded-2xl flex flex-col lg:flex-row gap-6">
          <div className="text-white lg:w-1/2">
            <p className="text-xl font-bold">SIGN UP TO OUR NEWS LETTER</p>
            <p>Subscribe to our newsletter to receive news and updates</p>
          </div>

          <form className="flex-grow">
            <div className="flex flex-row items-center rounded-full  px-2 bg-white">
              <input
                type="search"
                placeholder="Enter Your email address"
                className="px-2 flex-grow focus:outline-none focus:border-none bg-transparent"
              />
              <button className="lg:w-13">
                <Image
                  src="icons/subscribe.svg"
                  width={60}
                  height={60}
                  alt="subscribe icon"
                />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className=" bg-brand2 px-6 lg:px-32 py-16 pt-24 relative text-white">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="">
            <h4 className="text-brand1 lg:text-xl font-semibold mb-3">
              Lyte-Hosting{" "}
            </h4>
            <p>1942 BROADWAY STREET, BOULDER CO, US</p>
            <p>Copyright 2023 LyteHosting.com </p>

            <div className="flex flex-row gap-4 items-center mt-7">
              <Link href="#">
                <Image
                  src="/icons/Facebook.svg"
                  width={12}
                  height={12}
                  alt="facebook icon"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/icons/Twitter.svg"
                  width={20}
                  height={20}
                  alt="twitter icon"
                />
              </Link>
              <Link href="#">
                {" "}
                <Image
                  src="/icons/Instagram.svg"
                  width={20}
                  height={20}
                  alt="instagram icon"
                />
              </Link>
              <Link href="#">
                {" "}
                <Image
                  src="/icons/LinkedIn.svg"
                  width={20}
                  height={20}
                  alt="linkedin icon"
                />
              </Link>
              <Link href="#">
                {" "}
                <Image
                  src="/icons/Youtube.svg"
                  width={20}
                  height={20}
                  alt="youtube icon"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-row flex-wrap md:flex-nowrap gap-10 lg:gap-16 mt-10 lg:mt-0">
            <div className="w-1/3">
              <h4 className="font-semibold lg:text-lg mb-3">Hosting</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#">Shared Hosting</Link>
                </li>
                <li>
                  <Link href="#">Reseller Hosting </Link>
                </li>
                <li>
                  <Link href="#">VPS Hosting </Link>
                </li>
                <li>
                  <Link href="#">WordPress Hosting </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/3">
              <h4 className="font-semibold lg:text-lg mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Testimonials</Link>
                </li>
                <li>
                  <Link href="#">Our Blogs</Link>
                </li>
                <li>
                  <Link href="#">All Our Products</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/3">
              <h4 className="font-semibold lg:text-lg mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Submit Tickets</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-1 border-grey6 mt-20 mb-5" />
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between items-center gap-5 md:gap-0">
          <p className="order-3 md:order-1">Copyright © 2024 </p>
          <div className="flex flex-row gap-3 order-1 md:order-2">
            <Image
              src="/icons/paypal.svg"
              width={50}
              height={50}
              alt="paypal icon"
            />
            <Image
              src="/icons/visa.svg"
              width={50}
              height={50}
              alt="visa icon"
            />
            <Image
              src="/icons/mastercard.svg"
              width={50}
              height={50}
              alt="mastercard icon"
            />
            <Image
              src="/icons/american-express.svg"
              width={50}
              height={50}
              alt="american-express icon"
            />
          </div>
          <div className="flex flex-col md:flex-row text-center  gap-3 order-2 md:order-3 ">
            <Link href="#">All Rights Reserved</Link>
            <Link href="#" className="lg:border-l border-grey5 lg:pl-2">
              Terms and Conditions
            </Link>
            <Link href="#" className="lg:border-l border-grey5 lg:pl-2">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
