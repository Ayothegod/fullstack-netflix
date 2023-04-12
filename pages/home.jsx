import { useEffect, useRef, useState } from "react"
import Header from '@/components/Header'
import Banner from "@/components/Banner"
import Image from "next/image"
import requests from "@/lib/requests"
import MovieRow from "@/components/MovieRow"
import Modal from "@/components/Modal"
import { useModal } from '@/lib/store'

// const user = auth.currentUser;
const Home = ({trendingdata,horrordata,originalsdata,toprateddata,actiondata,comedydata,romancedata,documentarydata}) => {  
  const modal = useModal(state => state.open)
  const changeModal = useModal(state => state.changeOpen)
  const imgPath = "http://image.tmdb.org/t/p/w500"
  return (
      <div className="bg-black text-white h-full w-full ">
        <Header/>
        <Banner/>
        <div className="my-6 mx-2 ">
        {!modal &&  <Modal/>}
          <MovieRow title="Trending Movies" trendingdata={trendingdata}/>
          <MovieRow title="Romance Movies" trendingdata={romancedata}/>
          <MovieRow title="Top-Rated Movies" trendingdata={toprateddata}/>
          <MovieRow title="Horror Movies" trendingdata={horrordata}/>
          <MovieRow title="Comedy" trendingdata={comedydata}/>
          <MovieRow title="Documentaries" trendingdata={documentarydata}/>
          <MovieRow title="Action" trendingdata={actiondata}/>
          <MovieRow title="Discover" trendingdata={originalsdata}/>
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

