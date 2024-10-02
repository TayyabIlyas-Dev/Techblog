import React from 'react';
import Image from 'next/image';

const HeroTwo = () => {
  return (
    <section aria-label="Trusted engineering teams worldwide" className=''>
      <div className="m-4">
        <h3 className="text-gray-500 text-center font-semibold text-xl md:text-2xl px-8 sm:px-3 py-8">
          Trusted by top engineering teams Worldwide
        </h3>
      </div>
      <div className="hero2-img-sec flex justify-center items-center flex-wrap mb-36 px-4">
        <span>
          <Image
            src="/free-code-camp.png"
            alt="freeCodeCamp logo"
            width={179}
            height={50}
            className="w-[179px] sm:w-[170px] pl-4 sm:pl-10 pt-3 sm:pt-3"
          />
        </span>
        <span>
          <Image
            src="/mangdas.png"
            alt="Mangdas logo"
            width={159}
            height={50}
            className="w-[159px] sm:w-[170px] pl-4 sm:pl-10 pt-3 sm:pt-3"
          />
        </span>
        <span>
          <Image
            src="/metoro.png"
            alt="Metoro logo"
            width={159}
            height={50}
            className="w-[159px] sm:w-[170px] pl-4 sm:pl-10 pt-3 sm:pt-3"
          />
        </span>
        <span>
          <Image
            src="/midlee-ware.png"
            alt="Midlee Ware logo"
            width={159}
            height={50}
            className="w-[159px] sm:w-[170px] pl-4 sm:pl-10 pt-3 sm:pt-3"
          />
        </span>
        <span>
          <Image
            src="/peer-deer.png"
            alt="Peer Deer logo"
            width={149}
            height={50}
            className="w-[149px] sm:w-[170px] pl-4 sm:pl-10 pt-3 sm:pt-3"
          />
        </span>
        <span>
          <Image
            src="/red-woodjs.png"
            alt="RedwoodJS logo"
            width={159}
            height={50}
            className="w-[159px] sm:w-[170px] pl-4 sm:pl-10 pt-3 sm:pt-3"
          />
        </span>
        <span>
          <Image
            src="/requestly.png"
            alt="Requestly logo"
            width={159}
            height={50}
            className="w-[159px] sm:w-[170px] pl-4 sm:pl-10 pt-3 sm:pt-3"
          />
        </span>
        <span>
          <Image
            src="/panga.png"
            alt="Panga logo"
            width={142}
            height={50}
            className="w-[142px] sm:w-[170px] pl-4 sm:pl-10 pt-3 sm:pt-3"
          />
        </span>
        <span>
          <Image
            src="/hypermode.png"
            alt="Hypermode logo"
            width={159}
            height={50}
            className="w-[159px] sm:w-[170px] pl-4 sm:pl-10 pt-3 sm:pt-3"
          />
        </span>
      </div>
    </section>
  );
};

export default HeroTwo;
