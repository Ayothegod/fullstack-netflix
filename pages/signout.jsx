import { auth } from "@/lib/firebase"
import {signOut, onAuthStateChanged } from "firebase/auth"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState ,useEffect} from "react";

const Signout = () => {
      const router = useRouter();
    const [email,setEmail] = useState("")
    const [date,setDate] = useState("")

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email
        const metadata = user.metadata.creationTime
        console.log({email,metadata});
        setEmail(email)
        setDate(metadata)
      } else {
        console.log("no user");
      }
    });
  console.log(email);
  },[]);



  return (
    <>
    {email ?
    <div className="bg-black h-screen text-white p-4 flex items-center justify-center  ">
      <div className="bg-white text-black p-8 rounded-md text-center">
        <div>
          <p>User Email : {email}</p>
          <p>Date Created : {date}</p>
        </div>
       <button className="m-4 w-48 p-3 rounded-md  outline-none text-white border-none bg-red-600 font-semibold text-lg mt-8" onClick={signout}>sign Out</button>
      </div>
     </div> :
      <div className="bg-black h-screen text-white p-4 flex items-center justify-center  ">
        <div className="bg-white text-black p-8 rounded-md text-center">

        <Link href='/login'>
       <button className="m-4 w-48 p-3 rounded-md  outline-none text-white border-none bg-red-600 font-semibold text-lg mt-8" >sign In</button>
        </Link>
        </div>
     </div> 
    
  }
  </>)
}

export default Signout