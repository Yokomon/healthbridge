"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="relative md:p-4">
      <div className="relative max-w-8xl mx-auto">
        <div className="absolute top-0 left-0 bg-[#F0F1ED] w-full h-[616px] md:rounded-[30px] md:rounded-br-[165px] overflow-hidden" />
        <div className="flex flex-col pt-12 z-10 lg:flex-row md:pl-20 gap-6 md:gap-11 px-4 md:px-10 relative">
          <div className="flex flex-col gap-4 md:pt-36">
            <div className="relative w-fit">
              <h1 className="font-crimson text-4xl md:text-7xl">
                Expert Care,
                <br /> Anytime, Anywhere..
              </h1>
              <Image
                src="/assets/logo_green.svg"
                alt="logo"
                width={94}
                height={79}
                className="absolute hidden md:block -top-12 left-[21rem]"
              />
              <Image
                src="/assets/logo_green.svg"
                alt="logo"
                width={60}
                height={50}
                className="absolute md:hidden -top-8 right-16"
              />
            </div>
            <p className="text-[14px] md:text-[15px] font-inter font-light max-w-[487px]">
              Need a doctor&apos;s note? Get quick, verifiable excuse notes for
              work or school—hassle-free and reliable.
            </p>
            <Button
              variant="default"
              className="rounded-full capitalize w-fit font-medium text-sm md:text-base p-4 md:p-6"
            >
              Get started
            </Button>
            <div className="flex items-center gap-3 md:gap-5 mt-3">
              <div className="flex -space-x-2">
                <Avatar className="border border-white w-8 h-8 md:w-12 md:h-12">
                  <AvatarImage src="assets/user_1.png" alt="User 1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="border border-white w-8 h-8 md:w-12 md:h-12">
                  <AvatarImage src="assets/user_2.png" alt="User 2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="border border-white w-8 h-8 md:w-12 md:h-12">
                  <AvatarImage src="assets/user_3.png" alt="User 3" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <Avatar className="border border-white w-8 h-8 md:w-12 md:h-12 bg-[#00E1B7] text-white">
                  <AvatarImage src="assets/user_4.png" alt="User 4" />
                  <AvatarFallback>+5</AvatarFallback>
                </Avatar>
              </div>
              <p className="font-figtree text-sm md:text-base font-semibold max-w-[200px]">
                <span className="text-primary">4.9/5</span> from over 10,000+
                satisfied customers
              </p>
            </div>
          </div>
          <div className="relative max-w-fit">
            <Image
              src="/assets/landing.png"
              alt="landing"
              width={586}
              height={500}
              priority
              className="relative z-10 h-auto md:w-[586px] md:h-[500px] w-fit lg:h-auto object-contain md:hidden lg:block"
            />
            <div className="absolute top-[5px] md:top-[9.8px] bottom-0 left-[3px] md:left-[5.8px] md:hidden lg:block bg-[#00E1B7] w-full h-full rounded-[20px] md:rounded-[35.28px]" />
          </div>
        </div>
      </div>
      <Image
        src="/assets/curve.svg"
        alt="background curve"
        width={1440}
        height={446}
        className="absolute top-[480px] md:top-[280px] bottom-0 left-0 w-full"
      />
    </section>
  );
};

export default Hero;
