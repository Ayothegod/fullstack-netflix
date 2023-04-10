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
    router.push('/')
      console.log('sign out successful');
    }).catch((error) => {
      console.log('error sign out !!!!!!!!');
    });
  }
  return (
    <div className='h-12 fixed flex inset-0 items-center justify-between px-8  '>
        <Image src={logo} alt='hello' className="w-20"/>
        <button onClick={signout}>Sign out</button>
    </div>
  )
}

      // <div className='  '>
      // </div>
export default Header