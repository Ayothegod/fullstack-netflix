import { useEffect, useRef, useState } from "react"
import requests from 'lib/requests'
import Header from '@/components/Header'

// const user = auth.currentUser;
const Home = () => {  
  const [data,setData] = useState('')

  useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b0b141b44e2b1a77e4965a9ac513ca4')
      .then(Response => Response.json())
      .then(value => setData(value.results))      
      // setData(value)
    },[])
    console.log(data);
  
  return (
      <div className="bg-black text-white h-full">
        <Header/>
        Hello
        <div>
          {
            data.map(data => (
              <>
              <p key={data.id}>{data.title}</p>
              </>
            ))
          }
        </div>
      </div>
  )
}

export default Home
    // useEffect(() => {
    //   onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     console.log(user);
    //     // ...
    //   } else {
    //     // User is signed out
    //     console.log('no user');
    //   }
    // });
    // })