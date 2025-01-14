"use client";

import { Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Nav = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mobileMenu = mounted ? (
    <button
      className="flex flex-col gap-[6px] md:hidden group relative w-8 h-8 justify-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`w-6 h-[2px] bg-black transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-[4px]" : ""
        }`}
      />
      <span
        className={`w-6 h-[2px] bg-black transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-[4px]" : ""
        }`}
      />

      <div
        className={`absolute z-20 top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 transition-all duration-300 origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Headset size={16} />
            <span>469-587-6315</span>
          </div>
          <Button
            variant="outline"
            className="rounded-full capitalize py-2 w-full"
          >
            Get started
          </Button>
        </div>
      </div>
    </button>
  ) : null;

  return (
    <nav className="pt-4 px-4 md:px-20 w-full h-[92px] md:h-[78px]">
      <div className="flex h-full justify-between items-center font-crimson">
        <h3 className="text-2xl font-normal">HealthBridge</h3>
        <div className="hidden md:flex items-center gap-3.5 font-inter">
          <div className="flex gap-2 text-sm font-medium">
            <Headset size={20} />
            <span>469-587-6315</span>
          </div>
          <Button variant="outline" className="rounded-full capitalize py-4">
            Get started
          </Button>
        </div>
        {mobileMenu}
      </div>
    </nav>
  );
};

export default Nav;
