import Image from 'next/image'
import React from 'react'

const MovieRow = ({trendingdata}) => {
      const imgPath = "http://image.tmdb.org/t/p/w500"
  return (
    <div>
         {
            trendingdata.map((data,idx) => (
              <>
              <p key={idx}>{data.title}</p>
              <Image src={imgPath+data.poster_path} width={220} height={300} alt={data.original_title} />
              </>
            ))
          }
    </div>
  )
}

export default MovieRow