"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Feature, FeaturesList } from "@/components/ui/features";
import { Dot } from "lucide-react";
import { Button } from "@/components/ui/button";

const defaultFeatures: Feature[] = [
  {
    title: "Patients",
    description:
      "Connect with healthcare providers from the comfort of your home.",
    color: "text-[#002334]",
    badge: "Patient-focused",
    highlight: true,
  },
  {
    title: "Affordable",
    description:
      "Virtual appointments are more affordable than in-person visits.",
    badge: "Low cost",
    color: "text-[#002334]",
    highlight: true,
  },
  {
    title: "Top-rated",
    description:
      "Our doctors are highly rated by patients, ensuring you receive the best care possible.",
    color: "text-[#002334]",
    highlight: true,
    badge: "Highly rated",
  },
  {
    title: "Convenient",
    description:
      "No need to travel, just connect with your doctor from the comfort of your home.",
    color: "text-[#002334]",
    highlight: true,
    badge: "Convenient",
  },
  {
    title: "Secure",
    description:
      "Your privacy is our priority, ensuring your information is secure and confidential.",
    color: "text-[#002334]",
    highlight: true,
    badge: "Secure",
  },
];

const Solution = () => {
  return (
    <section>
      <div className="relative max-w-8xl mx-auto">
        <h3 className="font-crimson text-center text-xl sm:text-2xl md:text-[36px] font-normal mb-7">
          Our Solution
        </h3>
        <div className="flex items-center md:justify-center mt-3 font-figtree text-lg md:text-3xl px-4">
          <div className="space-y-1 md:space-y-2">
            <div className="flex items-center flex-wrap md:justify-center">
              <span className="opacity-30">We connect</span>
              <Avatar className="mx-1 md:mx-2 w-6 h-6 md:w-10 md:h-10">
                <AvatarImage src="assets/doctor.png" />
                <AvatarFallback>DC</AvatarFallback>
              </Avatar>
              <span> doctors,</span>
              <Avatar className="mx-1 md:mx-2 w-6 h-6 md:w-10 md:h-10">
                <AvatarImage src="assets/health.svg" />
                <AvatarFallback>H</AvatarFallback>
              </Avatar>
              <span>health service</span>
              <span className="opacity-30">, and</span>
              <Avatar className="mx-1 md:mx-2 w-6 h-6 md:w-10 md:h-10">
                <AvatarImage src="assets/patients.png" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <span>patients,</span>
            </div>
            <div className="flex items-center md:justify-center flex-wrap">
              <span className="opacity-30">ensuring</span>
              <Avatar className="mx-1 md:mx-2 w-6 h-6 md:w-10 md:h-10">
                <AvatarImage src="assets/care.svg" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <span>care</span>
              <span className="opacity-30">
                &nbsp;is always accessible where it
              </span>
            </div>
            <div className="flex items-center md:justify-center flex-wrap">
              <span className="opacity-30">matters most —</span>
              <span className="text-[#00E1B7]">&nbsp;home</span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:bg-[url('/assets/care_bg.png')] relative bg-cover bg-center bg-no-repeat h-[700px] md:h-[870px] my-14">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent">
          <div className="my-20">
            <FeaturesList features={defaultFeatures} />
          </div>
        </div>
      </div>
      <div className="relative my-8 font-crimson">
        <div className="flex flex-col text-3xl font-semibold text-center justify-center items-center">
          <div className="relative">
            <h3>Top-rated online</h3>
            <Avatar className="absolute bottom-2 -right-10">
              <AvatarImage src="assets/vector_1.svg" width={14} />
            </Avatar>
          </div>
          <div className="relative">
            <p>doctors and specialists are available now.</p>
            <Avatar className="absolute -top-1 bottom-0 w-[220px] h-[47px] -left-0 sm:-left-7">
              <AvatarImage src="assets/vector_2.svg" />
            </Avatar>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-12">
        <div className="mt-1 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 px-4 sm:px-8 mx-auto my-7 font-figtree">
          {[
            {
              name: "Dr. Kelvin Jackson",
              image: "/assets/kelvin.png",
              alt: "kelvin",
            },
            {
              name: "Dr. Jacob Santana",
              image: "/assets/jacob_img.png",
              alt: "jacob",
            },
            {
              name: "Dr. Lucy Crawford",
              image: "/assets/lucy.png",
              alt: "lucy",
            },
            {
              name: "Dr. Rajesh Kumar",
              image: "/assets/kumar.png",
              alt: "kumar",
            },
            {
              name: "Dr. Elena Rodriguez",
              image: "/assets/elena.png",
              alt: "elena",
            },
          ].map((doctor, _) => (
            <div
              key={doctor.name}
              className="rounded-[22px] w-full max-w-[230px] aspect-[230/254] overflow-hidden relative mx-auto"
            >
              <Image
                src={doctor.image}
                alt={doctor.alt}
                width={230}
                height={254}
                className="object-cover w-full h-full"
              />
              <div className="rounded-2xl font-semibold text-xs sm:text-sm bg-white/90 w-[85%] text-[#0C4170] h-fit absolute bottom-5 left-1/2 -translate-x-1/2 p-2">
                <div className="flex items-center justify-between">
                  <p className="line-clamp-1">{doctor.name}</p>
                  <Dot
                    strokeWidth={4}
                    size={24}
                    className="text-primary h-fit shrink-0"
                  />
                </div>
                <div className="flex items-center justify-between w-full text-[10px] sm:text-[11px]">
                  <span className="line-clamp-1">Medical Director</span>
                  <span className="mx-1">|</span>
                  <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                    <Image
                      src="/assets/whatsapp.svg"
                      alt="whatsapp"
                      width={16}
                      height={16}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <Image
                      src="/assets/facebook.svg"
                      alt="facebook"
                      width={16}
                      height={16}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="default" className="w-[90%] sm:w-96 p-4 sm:p-6">
          Start your note
        </Button>
      </div>
    </section>
  );
};

export default Solution;
