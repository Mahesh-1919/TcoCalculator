import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const NavBar = () => {
  return (
    <div className="bg-white text-black h-16 flex items-center px-10 justify-between font-medium  shadow-md">
      <div className="flex items-center gap-4">
        <Image src="/assets/logo.png" alt="logo" height={100} width={150} />
        <div className="md:block hidden">
          <ul className="flex gap-6 ">
            <li>
              <Button className="bg-zinc-100 shadow-none text-black px-8 hover:bg-zinc-200">
                <span className="mr-2">Cources</span>
                <ChevronDown size={16} />
              </Button>
            </li>
            <li>
              <Button className="bg-zinc-100 shadow-none text-black px-8 hover:bg-zinc-200">
                <span className="mr-2">Services</span>
                <ChevronDown size={16} />
              </Button>
            </li>

            <li>
              <Button className="bg-gradient-to-r from-rose-400 to-red-500 text-white px-8">
                Community
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="md:block hidden">Resources</div>
        <div className="md:block hidden">More</div>

        <Button variant={"outline"} className="border-black font-bold">
          Log In
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
