"use client";
import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface Hero1Props {
  heading: string;
  para1: string;
  btn1text: string;
  btn2text: string;
}

const HeroOne: React.FC<Hero1Props> = ({ heading, para1, btn1text, btn2text }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = useCallback(() => setHover(true), []);
  const handleMouseLeave = useCallback(() => setHover(false), []);

  const commonButtonStyles = "sm:text-xl px-10 py-5 sm:px-14 sm:p-8 rounded-full transition-transform duration-300";

  return (
    <div className="h-[146vh] sm:h-[170vh] flex flex-col justify-center overflow-hidden items-center bg-gradient-to-t from-blue-500 via-blue-500 rounded-s-3xl rounded-r-3xl via-10% to-white">
      <div className="w-[75vw] sm:w-[58vw] md:w-[64vw]">
        <h1 className="text-center text-3xl text-black sm:text-6xl font-bold pt-[38vh] sm:pt-80">
          {heading}
        </h1>
        <p className="text-center text-[#52525b] text-xl p-3 sm:px-16 pt-12 pb-8">
          {para1}
        </p>

        <div className="flex justify-center items-center flex-col gap-4">
          {/* Button 1 */}
          <Button className={`${commonButtonStyles} hover:text-white hover:scale-105 md:px-20`}>
            <Link href="/" passHref>
              <span>{btn1text}</span>
            </Link>
          </Button>

          {/* Button 2 */}
          <Button
            variant="outline"
            className={`${commonButtonStyles} md:px-16 ${hover ? "scale-105" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#" passHref className="flex justify-center items-center">
              <span>{btn2text}</span>
              <span className={`inline-block transition-transform pl-1 duration-300 ${hover ? "translate-x-1" : "translate-x-0"}`}>
                <FaArrowRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Dashboard Heading */}
      <h2 className="text-center text-4xl font-semibold text-black mt-20 py-9">Dashboard</h2>

      {/* Image Below Buttons */}
      <div className=" flex mt-10 w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[100vw] lg:pl-44">
        {/* Placeholder for Image */}
        {/* <img src="/herosec1.png" alt="Dashboard Image" className="w-full h-auto" /> */}
        <div>
        <Image
          src="/herosec1.png"
          alt="Dashboard Image"
          width={2048} // Example width, adjust accordingly
          height={1557} // Example height, adjust accordingly
          layout="responsive"
          priority={true} // Loads the image faster for above-the-fold content
          quality={90} // Adjust quality for better optimization
          className=""
        />
        </div>
        <div>
        <Image
          src="/herosec1.png"
          alt="Dashboard Image"
          width={20} // Example width, adjust accordingly
          height={1557} // Example height, adjust accordingly
          layout="responsive"
          priority={true} // Loads the image faster for above-the-fold content
          quality={90} 
          className="hidden lg:block relative right-64  "// Adjust quality for better optimization
        />
        </div>
        <div>
        <Image
          src="/herosec1.png"
          alt="Dashboard Image"
          width={8} // Example width, adjust accordingly
          height={1557} // Example height, adjust accordingly
          layout="responsive"
          priority={true} // Loads the image faster for above-the-fold content
          quality={90} 
          className="hidden lg:block relative right-full "// Adjust quality for better optimization
        />
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
