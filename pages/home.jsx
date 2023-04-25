import { useEffect, useRef, useState } from "react"
import Header from '@/components/Header'
import Banner from "@/components/Banner"
import Image from "next/image"
import requests from "@/lib/requests"
import MovieRow from "@/components/MovieRow"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import Favourites from "@/components/Favourites"

// const user = auth.currentUser;
const Home = ({trendingdata,horrordata,originalsdata,toprateddata,actiondata,comedydata,romancedata,documentarydata}) => {  

  const imgPath = "http://image.tmdb.org/t/p/w500"
  return (
      <div className="bg-black text-white h-full w-full ">
        <Header/>
        <Banner/>
        <div className="my-6 mx-2 ">
          <Favourites/>
          <MovieRow title="Trending Movies" trendingdata={trendingdata}/>
          <MovieRow title="Romance Movies" trendingdata={romancedata}/>
          <MovieRow title="Top-Rated Movies" trendingdata={toprateddata}/>
          <MovieRow title="Horror Movies" trendingdata={horrordata}/>
          <MovieRow title="Comedy" trendingdata={comedydata}/>
          <MovieRow title="Documentaries" trendingdata={documentarydata}/>
          <MovieRow title="Action" trendingdata={actiondata}/>
          <MovieRow title="Discover" trendingdata={originalsdata}/>
        </div>
        <div className="border-t border-t-neutral-800 py-2 px-4 text-neutral-600 flex items-center justify-between">
          <p className="flex items-center"><AiOutlineCopyrightCircle/>Ayomide 2023</p>
          <div>
            <button className="border border-neutral-800 py-1 px-2 rounded-md flex"><AiFillHeart/>connect</button>
          </div>
        </div>
      </div>
  )
}
export default Home

export async function getStaticProps() {
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

