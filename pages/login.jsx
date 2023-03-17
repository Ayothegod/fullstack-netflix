import app from "@/lib/firebase";
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";

const Login = () => {
  const auth = getAuth(app);
  const emailRef = useRef()
  const passwordRef = useRef()

  
  
  const login = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  return (
    <div>
        <form action="">
            <input type="text" placeholder="email" 
            ref={emailRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button onClick={login}>Submit form</button>
        </form>
    </div>
  )
}

export default Login