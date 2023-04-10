import { useEffect, useRef, useState } from "react"
import requests from 'lib/requests'
import Header from '@/components/Header'

// const user = auth.currentUser;
const Home = ({data}) => {  
  // const [blob,setBlob] = useState(data)
  // console.log((data));

  return (
      <div className="bg-black text-white h-full">
        <Header/>
        <p>lets goo</p>
        Hello
        <div>
          {
            data.map((data,idx) => (
              <>
              <p key={idx}>{data.title}</p>
              </>
            ))
          }
        </div>
      </div>
  )
}
export default Home

// export async function getServerSideProps(context) {
//   const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b0b141b44e2b1a77e4965a9ac513ca4')
//   const data = await res.json()
//   return {
//     props: { data:data.results }
//   }
// }
export async function getStaticProps() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b0b141b44e2b1a77e4965a9ac513ca4')
  const data = await res.json()

  return {
    props: {
      data:data.results,
    },
  }
}

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