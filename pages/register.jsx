import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import app from "@/lib/firebase";

const Register = () => {
    const auth = getAuth(app);
    // const name = useRef()
    const email = useRef()
    const password = useRef()
    // console.log(name.current.value);
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    console.log(email,password);
    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }

  return (
    <div>
        <form action="">
            {/* <input type="text" placeholder="name" 
            ref={name} /> */}
            <input type="text" placeholder="email" 
            ref={email} />
            <input type="password" placeholder="password" ref={password} />
            <button onClick={register}>Submit form</button>
        </form>
    </div>
  )
}

export default Register