import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import app from "@/lib/firebase";
import { useRouter } from "next/router";
import Link from "next/link";

const Register = () => {
  const auth = getAuth(app);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")
  // const [name,setName] = useState("")
  // console.log(name);

  // console.log(email,password);
  // console.log(name.current.value,email.current.value,password.current.value);

  const register = (e) => {
    e.preventDefault();
    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(auth, email, password, displayName)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.push("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="bg-[url('../assets/netflix.jpg')] w-full  h-screen bg-cover bg-no-repeat bg-center ">
        <div className="backdrop-brightness-50 h-screen text-white">
          <form action="" className="flex items-center justify-center h-screen">
            <div className="bg-black p-8 h-screen md:h-auto sm:w-96 flex flex-col gap-4 justify-center w-screen ">
              <p className=" font-bold text-3xl md:text-4xl">Sign Up</p>
              <input type="text" placeholder="name" ref={nameRef} className='w-full p-3 rounded-md placeholder:text-lg text-black outline-none border-none bg-gray-600' />
            <input type="text" placeholder="email" ref={emailRef}
            className='w-full p-3 rounded-md text-black placeholder:text-lg outline-none border-none bg-gray-600' />
            <input type="password" placeholder="password" ref={passwordRef} className='w-full p-3 rounded-md text-black placeholder:text-lg outline-none border-none bg-gray-600' />
            <button onClick={register} className='w-full p-3 rounded-md  outline-none border-none bg-red-600 font-semibold text-lg mt-8'>Sign Up</button>
            <p className="mt-10">
              Already have an account? <span className="font-bold text-lg">
                <Link href="/login">Sign In</Link>
              </span> 
            </p>
            <p className="text-sm">This page is protected by Google reCAPTCHA to ensure youre not a bot.  <span className="text-red-600"><Link href=''>Learn More</Link></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
