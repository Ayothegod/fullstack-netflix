import app from "@/lib/firebase";
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";
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
        // Signed in 
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
        <form action="">
            {/* <input type="text" placeholder="email" 
            ref={nameRef} /> */}
            <input type="text" placeholder="email" 
            ref={emailRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button onClick={login}>Submit form</button>
        </form>
    </div>
  )
}

export default Login