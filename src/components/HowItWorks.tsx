"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="relative font-crimson">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="md:text-center text-3xl md:text-4xl font-semibold my-8">
          How it works
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4 mb-14">
          <div className="flex gap-2 max-w-full md:max-w-[353px]">
            <span className="text-[#00E1B7] text-2xl md:text-3xl shrink-0">
              1.
            </span>
            <p className="font-light text-lg md:text-xl text-[#3C3C3C] font-figtree py-1">
              <span className="text-[#002334] font-bold font-crimson text-xl md:text-2xl block mb-1">
                Fill Out Simple Form
              </span>
              Provide basic information about your situation and requirements
            </p>
          </div>
          <div className="flex gap-2 max-w-full md:max-w-[353px]">
            <span className="text-[#00E1B7] text-2xl md:text-3xl shrink-0">
              2.
            </span>
            <p className="font-light text-lg md:text-xl text-[#3C3C3C] font-figtree py-1">
              <span className="text-[#002334] font-bold font-crimson text-xl md:text-2xl block mb-1">
                Doctor review
              </span>
              Licensed medical professional reviews your case
            </p>
          </div>
          <div className="flex gap-2 max-w-full md:max-w-[353px]">
            <span className="text-[#00E1B7] text-2xl md:text-3xl shrink-0">
              3.
            </span>
            <p className="font-light text-lg md:text-xl text-[#3C3C3C] font-figtree py-1">
              <span className="text-[#002334] font-bold font-crimson text-xl md:text-2xl block mb-1">
                Get Your Note
              </span>
              Receive your verified doctor&apos;s note instantly
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7] text-[#002334] font-inter py-12 md:py-20 px-6 md:px-14 xl:h-[848px]">
        <div className="flex flex-col-reverse xl:flex-row items-center max-w-7xl mx-auto gap-8 md:gap-12">
          <div className="relative w-full max-w-[640px]">
            <Image
              src="/assets/founder.png"
              alt="founder"
              width={640}
              height={620}
              className="object-cover grayscale w-full"
            />
            <div className="flex flex-col text-[#002334] absolute md:ml-32">
              <p className="text-sm font-semibold">Ege justin</p>
              <p className="text-sm">HealthBridge&apos;s Co-Founder and CEO</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="font-crimson text-3xl md:text-5xl font-normal max-w-[562px]">
              &quot;HealthBridge was created to make home healthcare simple and
              accessible for everyone&quot;.
            </h3>
            <p className="text-base md:text-lg font-normal">
              A personal experience drove HealthBridge&apos;s Co-Founder and CEO to
              help millions of people.
            </p>
            <Button
              variant="default"
              size="lg"
              className="w-fit rounded-full mt-3 mx-auto md:mx-0"
            >
              Read story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
