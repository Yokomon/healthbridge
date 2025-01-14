"use client";

import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="bg-[#002334] font-crimson min-h-[300px] sm:h-[800px] md:h-[1161px] relative py-12 md:py-[104px] px-4 md:px-20 mb-44 lg:mb-96">
      <h2 className="text-white text-3xl md:text-6xl leading-tight md:leading-[74px] text-center max-w-[911px] w-full mx-auto">
        Patients love working with HealthBridge. See why they rate us a 9.5 out
        of 10.
      </h2>
      <div className="my-12 md:my-24 flex gap-6 md:gap-10 relative overflow-hidden pb-4 md:pb-0">
        <div className="flex md:flex-row gap-6 md:gap-10 w-fit overflow-x-scroll">
          <div className="bg-[#0C2F40] p-6 md:p-11 rounded-xl w-[85vw] md:min-w-[426px] shrink-0 md:shrink">
            <div className="flex flex-col gap-2 font-inter text-white">
              <Image
                src="/assets/sweeney.png"
                alt="sweeney"
                width={64}
                height={60}
                className="w-12 h-12 md:w-16 md:h-[60px]"
              />
              <h4 className="font-semibold text-base md:text-lg">
                Jonathan Sweeney
              </h4>
              <p className="font-normal text-sm md:text-lg">
                &quot;I love that model. I [used to have to] call all around,
                and I absolutely love that model that you could save me the time
                and headache of doing that.&quot;
              </p>
            </div>
          </div>
          <div className="bg-[#0C2F40] p-6 md:p-11 rounded-xl w-[85vw] md:min-w-[426px] shrink-0 md:shrink">
            <div className="flex flex-col gap-2 font-inter text-white">
              <Image
                src="/assets/barbara.png"
                alt="barbara"
                width={64}
                height={60}
                className="w-12 h-12 md:w-16 md:h-[60px]"
              />
              <h4 className="font-semibold capitalize text-base md:text-lg">
                Barbara cook
              </h4>
              <p className="font-normal text-sm md:text-lg">
                &quot;I am so happy with your company. Ever since my insurer
                switched to you, everything and everybody I&apos;ve spoken to
                has been extremely, extremely pleasant, helpful, and they listen
                to my concerns instead of just saying okay!&quot;
              </p>
            </div>
          </div>
          <div className="bg-[#0C2F40] p-6 md:p-11 rounded-xl w-[85vw] md:min-w-[426px] shrink-0 md:shrink">
            <div className="flex flex-col gap-2 font-inter text-white">
              <Image
                src="/assets/mary.png"
                alt="mary"
                width={64}
                height={60}
                className="w-12 h-12 md:w-16 md:h-[60px]"
              />
              <h4 className="font-semibold capitalize text-base md:text-lg">
                Mary rogers
              </h4>
              <p className="font-normal text-sm md:text-lg">
                &quot;I just want to thank you for the great job you did during
                my transition to oxygen. You unraveled all the confusion and the
                new company is wonderful.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/steps.png"
        alt="steps"
        width={990}
        height={659}
        className="absolute bottom-[-120px] lg:bottom-[-320px] rounded-xl left-1/2 -translate-x-1/2 shadow-xl drop-shadow-2xl w-[85%] md:w-[590px] lg:w-[790px] xl:w-[990px]"
      />
    </section>
  );
};

export default Testimonials;
