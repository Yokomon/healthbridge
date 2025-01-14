"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Support = () => {
  return (
    <section>
      <div className="relative px-4 md:px-0">
        <div className="xl:relative rounded-3xl mt-16 xl:mt-0 mx-0 md:mx-12 xl:mx-0 left-1/2 xl:-translate-y-[3rem] xl:-translate-x-1/2 shadow-xl drop-shadow-2xl overflow-hidden max-w-[882px]">
          <Image
            src="/assets/questions.png"
            alt="questions"
            width={882}
            height={594}
            className="w-full min-h-[358px] object-cover"
          />
          <div className="absolute inset-0 from-[#002334] text-white to-transparent via-[90%] bg-gradient-to-t flex flex-col items-center pt-6 md:pt-12 pb-4 md:pb-7 px-4 md:px-0">
            <h2 className="text-2xl md:text-4xl lg:text-[53px] leading-none tracking-tight font-normal text-center font-crimson">
              Questions?
              <br /> We&apos;re here to help.
            </h2>
            <p className="font-figtree font-light text-sm md:text-xl lg:text-2xl text-center py-2 mb-auto">
              Speak with one of our Care Advocates today.
            </p>
            <div className="space-y-5 flex flex-col items-center">
              <Button
                variant="ghost"
                className="w-fit rounded-full font-inter font-semibold p-4 md:p-6 px-6 md:px-10 text-xs sm:text-sm md:text-base"
              >
                <Image
                  src="/assets/headset.svg"
                  alt="headset"
                  width={35}
                  height={30}
                  className="w-6 h-6 md:w-[35px] md:h-[30px] mr-2"
                />
                469-587-6315
              </Button>
              <Button
                variant="ghost"
                className="w-fit gap-2 md:gap-3 rounded-full font-inter font-semibold p-4 md:p-6 px-6 md:px-10 text-xs sm:text-sm md:text-base"
              >
                <Image
                  src="/assets/mail.svg"
                  alt="mail"
                  width={28}
                  height={30}
                  className="w-5 h-5 md:w-7 md:h-7"
                />
                support@healthbridge.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
