import { useEffect, useRef, useState } from "react"
import Header from '@/components/Header'
import Banner from "@/components/Banner"
import Image from "next/image"
import requests from "@/lib/requests"
import MovieRow from "@/components/MovieRow"

// const user = auth.currentUser;
const Home = ({trendingdata,horrordata,originalsdata,toprateddata,actiondata,comedydata,romancedata,documentarydata}) => {  
  console.log({
    trendingdata:trendingdata,
    horrordata:horrordata,
    originalsdata:originalsdata,
    toprateddata:toprateddata,
    actiondata:actiondata,
    comedydata:comedydata,
    romancedata:romancedata,
    documentarydata:documentarydata
  })
  const imgPath = "http://image.tmdb.org/t/p/w500"
  return (
      <div className="bg-black text-white h-full">
        <Header/>
        <Banner/>
        <div className="mt-20">
          <MovieRow trendingdata={trendingdata}/>
        </div>
      </div>
  )
}
export default Home

export async function getServerSideProps(context) {
  const fetchTrending = await fetch(requests.fetchTrending)
  const trendingdata = await fetchTrending.json()
  const fetchHorrorMovies = await fetch(requests.fetchHorrorMovies)
  const horrordata = await fetchHorrorMovies.json()
  const fetchDocumentaries = await fetch(requests.fetchDocumentaries)
  const documentarydata = await fetchDocumentaries.json()
  const fetchRomanceMovies = await fetch(requests.fetchRomanceMovies)
  const romancedata = await fetchRomanceMovies.json()
  const fetchComedyMovies = await fetch(requests.fetchComedyMovies)
  const comedydata = await fetchComedyMovies.json()
  const fetchActionMovies = await fetch(requests.fetchActionMovies)
  const actiondata = await fetchActionMovies.json()
  const fetchTopRated = await fetch(requests.fetchTopRated)
  const toprateddata = await fetchTopRated.json()
  const fetchNetflixOriginals = await fetch(requests.fetchNetflixOriginals)
  const originalsdata = await fetchNetflixOriginals.json()

  // const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b0b141b44e2b1a77e4965a9ac513ca4')
  // const data = await res.json()
  return {
    props: {
        trendingdata:trendingdata.results,
        horrordata:horrordata.results,
        originalsdata:originalsdata.results,
        toprateddata:toprateddata.results,
        actiondata:actiondata.results,
        comedydata:comedydata.results,
        romancedata:romancedata.results,
        documentarydata:documentarydata.results,
       }
  }
}
// const {fetchTrending,fetchNetflixOriginals,fetchTopRated,fetchActionMovies,fetchComedyMovies,fetchHorrorMovies,fetchRomanceMovies,fetchDocumentaries}
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