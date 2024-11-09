"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "auto";
      return newState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="bg-white h-screen w-3/4 md:w-1/2 ml-auto flex flex-col">
            <div className={`flex justify-between items-center p-6 mt-12`}>
              <Image src="/logo.svg" width={50} height={40} alt="logo" />
              <button onClick={toggleSidebar}>
                <Image
                  src="/icons/cancel.svg"
                  width={30}
                  height={30}
                  alt="logo"
                />
              </button>
            </div>
            <div className="flex flex-col gap-5 pt-6 items-center text-lg">
              <Link href="#about" className="mb-4">
                About us
              </Link>
              <Link href="#" className="mb-4">
                Our Services
              </Link>
              <Link href="#" className="mb-4">
                Domains
              </Link>
              <Link href="#" className="">
                Pages
              </Link>
              <Link
                href="#"
                className="bg-black text-white rounded-full w-28 text-center text-sm font-bold py-2"
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="bg-brand1 text-white rounded-full w-32 text-center text-sm font-bold  py-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
      <nav
        className={`${
          isScrolled ? " z-40 shadow" : ""
        } w-full fixed top-0 pt-10 pb-4 bg-white hidden lg:block`}
      >
        <div
          className={`flex flex-col lg:flex-row justify-between items-center md:w-10/12 lg:w-full custom-xl:w-4/6 lg:mx-auto ${
            isScrolled ? "border-none" : "border-2 border-grey1 "
          } rounded-full lg:px-2 lg:py-1 `}
        >
          <div className="flex flex-row gap-20 ">
            <Link href="/">
              <Image
                src="/logo.svg"
                className=""
                alt="Lyte hosting"
                width={50}
                height={50}
              />
            </Link>
            <div className="flex flex-row items-center gap-10 text-medium">
              <Link href="/">Home</Link>
              <Link href="/" className="flex flex-row items-center ">
                Our Services{" "}
                <Image
                  src="/icons/chevron-down.svg"
                  width={30}
                  height={30}
                  alt="chevron down icon"
                />
              </Link>
              <Link href="/" className="flex flex-row items-center">
                Domains{" "}
                <Image
                  src="/icons/chevron-down.svg"
                  width={30}
                  height={30}
                  alt="chevron down icon"
                />
              </Link>
              <Link href="/" className="flex flex-row items-center">
                Pages{" "}
                <Image
                  src="/icons/chevron-down.svg"
                  width={30}
                  height={30}
                  alt="chevron down icon"
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-8">
            <Link
              className="bg-black text-white rounded-3xl w-28 text-center py-3 hover:bg-brand2"
              href="/"
            >
              Sign in
            </Link>
            <Link
              className="bg-brand1 text-white rounded-3xl w-32 text-center py-3 hover:bg-hosting-name-gradient hover:text-black"
              href="/"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={`w-full fixed top-0 pt-5 pb-4 px-6 bg-white lg:hidden ${
          isScrolled ? " z-40 shadow" : ""
        }`}
      >
        <div className="flex items-center justify-between lg:hidden">
          <Link href="#">
            <Image
              src="/logo.svg"
              className=""
              alt="Lyte hosting"
              width={50}
              height={50}
            />
          </Link>
          <button onClick={toggleSidebar}>
            <Image
              src="/icons/hamburger.svg"
              className=""
              alt="Lyte hosting"
              width={20}
              height={20}
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
