import Image from 'next/image'
import React from 'react'

const MovieRow = ({trendingdata}) => {
      const imgPath = "http://image.tmdb.org/t/p/w500"
      const secUrl = "https://via.placeholder.com/600x400/cccccc/242020"
  return (
    <div className='scroller flex mb-20 '>
         {
            trendingdata.map((data,idx) => (
                <>
            <div key={data.id} className='w-52 h-40 relative '>
              <Image  src={data.poster_path ? imgPath+data.poster_path : secUrl }  alt={data.original_title} className=' absolute' fill />
        </div>
              </>
            ))
        }
    </div>
  )
}
{/* <p key={idx}>{data.title}</p> */}

export default MovieRow