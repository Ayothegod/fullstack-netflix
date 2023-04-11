import React from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "assets/logo.svg";
import netflixAvatar from "@/assets/Netflix-avatar.png";
import { FaBell } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const router = useRouter();
  //   const auth = getAuth();

  const signout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
        console.log("sign out successful");
      })
      .catch((error) => {
        console.log("error sign out !!!!!!!!");
      });
  };
  return (
    <div className="h-12 fixed flex inset-0 items-center justify-between px-8 z-50 ">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="hello" className="w-20" />
        <div className="hidden md:block md:flex md:gap-4  ">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">TV Shows</p>
          <p className="cursor-pointer">PlayList</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-6 items-center hidden md:flex">
          <AiOutlineSearch className="w-6 h-6" />
          <FaBell className="w-4 h-4" />
        </div>
        <Image src={netflixAvatar} alt="netflix-avatar" className="h-8 w-8" />
      </div>
    </div>
  );
};
export default Header;
{
  /* <button onClick={signout}>Sign out</button> */
}
