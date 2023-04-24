import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "assets/logo.svg";
import netflixAvatar from "@/assets/Netflix-avatar.png";
import { FaBell } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { auth } from "@/lib/firebase";

const Header = () => {
  const router = useRouter();
  const [email,setEmail] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email
        setEmail(email)
      } else {
        console.log("no user !!!!!!");
      }
    });
  });
  
  return (
    <div className="h-12 fixed flex inset-0 items-center justify-between px-8 z-50 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="hello" className="w-20" />
        <div className="hidden md:flex md:gap-4  ">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">TV Shows</p>
          <p className="cursor-pointer">PlayList</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className=" gap-6 items-center hidden md:flex">
          <AiOutlineSearch className="w-6 h-6" />
          <FaBell className="w-4 h-4" />
        </div>
        <div className="flex items-center">
        <Link href="/signout" className="flex items-center gap-1">
          <p>{email}</p>
          <Image src={netflixAvatar} alt="netflix-avatar" className="h-8 w-8" />
        </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;

