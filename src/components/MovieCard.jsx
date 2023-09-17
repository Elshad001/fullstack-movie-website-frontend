import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"


const MovieCard = ({ contents ,filteredMovies,setFilteredMovies}) => {

  // const [changeFavorite,setChangeFavorite] = useState(isFavorite)

  console.log(filteredMovies)

  return (
    <div className='flex flex-wrap justify-between px-36 py-12'>
      {
        filteredMovies.map((content,index) =>
        (
          <div key={content.id} className='w-52 h-96 bg-slate-300 rounded'>
            <img className='w-52 h-72 rounded-tl rounded-tr' src={content.image} alt='' />
            <div className='flex justify-between px-2 my-2'>
              <p className='font-sans font-semibold text-xl'>{content.name}</p>
            </div>
            <div className='flex justify-between px-2'>
              <p className='font-sans font-semibold text-xl text-yellow-700'>{content.year}</p>
              <p className='font-sans font-semibold text-xl text-yellow-700'>{content.raiting}</p>
            </div>
          </div>
        ))

      }
    </div>

  )
}

export default MovieCard
