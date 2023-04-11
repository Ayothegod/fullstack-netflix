import app from "@/lib/firebase";
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

const Login = () => {
  const auth = getAuth(app);
  const emailRef = useRef()
  const passwordRef = useRef()
  const router = useRouter()

  const login = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.push('/home')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
      });
  }


  return (
    <div>
        <div className="bg-[url('../assets/netflix.jpg')] w-full  h-screen bg-cover bg-no-repeat bg-center ">
        <div className="backdrop-brightness-50 h-screen text-white">
          <form className="flex items-center justify-center h-screen">
            <div className="bg-black p-8 h-screen md:h-auto sm:w-96 flex flex-col gap-4 justify-center w-screen ">
              <p className=" font-bold text-3xl md:text-4xl">Sign In</p>
              
            <input type="text" placeholder="email" ref={emailRef}
            className='w-full p-3 text-black rounded-md placeholder:text-lg outline-none border-none bg-gray-600' />
            <input type="password" placeholder="password" ref={passwordRef} className='w-full text-black p-3 rounded-md placeholder:text-lg outline-none border-none bg-gray-600' />
            <button onClick={login} className='w-full p-3 rounded-md  outline-none border-none bg-red-600 font-semibold text-lg mt-8'>Sign In</button>
            <p className="mt-10">
              New to Netflix? <span className="font-bold text-lg">
                <Link href="/register">Sign Up</Link>
              </span> 
            </p>
            <p className="text-sm">This page is protected by Google reCAPTCHA to ensure youre not a bot.  <span className="text-red-600"><Link href=''>Learn More</Link></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login