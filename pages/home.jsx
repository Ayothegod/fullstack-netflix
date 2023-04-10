import { useEffect, useRef, useState } from "react"
import requests from 'lib/requests'
import Header from '@/components/Header'
import Banner from "@/components/Banner"
import Image from "next/image"

// const user = auth.currentUser;
const Home = ({data}) => {  
  const imgPath = "http://image.tmdb.org/t/p/w500"
  return (
      <div className="bg-black text-white h-full">
        <Header/>
        <Banner/>
        <div className="mt-20">
          {
            data.map((data,idx) => (
              <>
              <p key={idx}>{data.title}</p>
              <Image src={imgPath+data.poster_path} width={220} height={300} alt={data.original_title} />
              </>
            ))
          }
        </div>
      </div>
  )
}
export default Home

export async function getServerSideProps(context) {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b0b141b44e2b1a77e4965a9ac513ca4')
  const data = await res.json()
  return {
    props: { data:data.results }
  }
}
// export async function getStaticProps() {
//   const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b0b141b44e2b1a77e4965a9ac513ca4')
//   const data = await res.json()

//   return {
//     props: {
//       data:data.results,
//     },
//   }
// }

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