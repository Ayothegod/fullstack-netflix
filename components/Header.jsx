import React from 'react'
import { signOut, onAuthStateChanged} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from 'assets/logo.svg'

const Header = () => {
      const router = useRouter()
//   const auth = getAuth();
  
const signout = () => {
  signOut(auth).then(() => {
    // Sign-out successful. hello
    router.push('/')
      console.log('sign out successful');
    }).catch((error) => {
      // An error happened.
      console.log('error sign out !!!!!!!!');
    });
  }
  return (
    <div>
        <button onClick={signout}>Sign out</button>
        <Image src={logo} alt='hello' className="w-10 h-10 "/>
    </div>
  )
}

export default Header