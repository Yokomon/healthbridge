"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#002334] font-crimson text-white py-10 md:py-20 min-h-fit mt-10 xl:mt-0">
      <div className="flex flex-col max-w-7xl mx-auto px-4 md:px-32">
        <div className="flex items-center justify-between border-b-[0.5px] border-primary/50 pb-8">
          <h2 className="text-3xl md:text-5xl">HealthBridge</h2>
          <Button
            variant="default"
            className="rounded-full p-4 md:p-6 font-inter text-sm md:text-base"
          >
            Get started
          </Button>
        </div>
        <div className="relative py-12 md:py-24">
          <h3 className="capitalize text-4xl md:text-8xl">
            Expert care,
            <br /> anytime, anywhere..
          </h3>
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={94}
            height={79}
            className="absolute top-8 md:top-16 left-[12rem] md:left-[28rem] w-[60px] md:w-[94px]"
          />
        </div>
        <div className="flex flex-col font-inter">
          <a
            href="tel:+4695876315"
            className="text-xs md:text-sm underline underline-offset-2 text-[#99A8AF] w-fit"
          >
            <span>469-587-6315</span>
          </a>
          <a
            href="mailto:support@healthbridge.com"
            className="text-xs md:text-sm underline underline-offset-2 text-[#99A8AF] w-fit"
          >
            <span>support@healthbridge.com</span>
          </a>
          <div className="flex items-center gap-2 md:gap-3 mt-4">
            <div className="bg-white rounded-full p-2 md:p-3">
              <Image
                src="/assets/x.svg"
                alt="x"
                width={24}
                height={24}
                className="text-black w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
              />
            </div>
            <div className="bg-white rounded-full p-2 md:p-3 px-3 md:px-4">
              <Image
                src="/assets/fb.svg"
                alt="fb"
                width={15}
                height={15}
                className="text-black w-[12px] md:w-[15px] h-[18px] md:h-[20px]"
              />
            </div>
            <div className="bg-white rounded-full p-2 md:p-3">
              <Image
                src="/assets/ig.svg"
                alt="ig"
                width={24}
                height={24}
                className="text-black w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
              />
            </div>
            <div className="bg-white rounded-full p-2 md:p-3">
              <Image
                src="/assets/in.svg"
                alt="in"
                width={24}
                height={24}
                className="text-black w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
