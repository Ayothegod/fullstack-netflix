import { auth } from "@/lib/firebase"
import {signOut, onAuthStateChanged } from "firebase/auth"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState ,useEffect} from "react";

const Signout = () => {
      const router = useRouter();
    const [email,setEmail] = useState("")

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
        console.log(user);
        setEmail(email)
      } else {
        console.log("no user");
      }
    });
  console.log(email);
  },[]);



  return (
    <>
    {email ?
    <div>
      <div>
        <div>
          <p>User Email: {email}</p>
        </div>
       <button className="m-4 w-48 p-3 rounded-md  outline-none text-white border-none bg-red-600 font-semibold text-lg mt-8" onClick={signout}>sign Out</button>
      </div>
     </div> :
      <div>
        <Link href='/login'>
       <button className="m-4 w-48 p-3 rounded-md  outline-none text-white border-none bg-red-600 font-semibold text-lg mt-8" >sign In</button>
        </Link>
     </div> 
    
  }
  </>)
}

export default Signout