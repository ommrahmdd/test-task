import React from "react";
import Container from "../Container";
import { IoMdArrowDropdown } from "react-icons/io";
import profileImage from "./../../assets/imgs/profile.jpg";
export default function Nav() {
  return (
    <nav className="py-5 border-b-2">
      <Container>
        <div className="flex justify-end">
          <div className="flex items-center gap-x-2 cursor-pointer ">
            <img
              src={profileImage}
              alt="Profile image"
              className="w-9 h-9 rounded-full shadow-sm "
            />
            <p className="text-xs capitalize tracking-wider font-semibold transition-all duration-300 ease-in-out hover:opacity-60 md:text-sm">
              islam elsultan
            </p>
            <IoMdArrowDropdown className="text-xl text-secondaryColor" />
          </div>
        </div>
      </Container>
    </nav>
  );
}
