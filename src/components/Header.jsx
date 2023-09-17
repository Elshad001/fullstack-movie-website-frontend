import React, { useState } from 'react'

const Header = ({contents,filteredMovies,setFilteredMovies}) => {

  const [showDropdown,setShowDropdown] = useState(false);

  const handleDropdown = ()=>
  {
    setShowDropdown(!showDropdown);
  }

const showFilteredMovies = (e)=>
{
  const fMovies=contents.filter((content)=>content.genre.toLowerCase()===e.target.innerHTML.toLowerCase());
  setFilteredMovies(fMovies);
  console.log(filteredMovies);
}

  return (
    <div className='flex justify-between w-full h-20 bg-sky-500 px-36 py-5'>
      <div className='w-1/6 font-sans font-bold text-xl'>LOGO</div>
      <nav className='w-3/6'>
        <ul className='flex justify-between'>
            <li>Home</li>
            <li className='relative cursor-pointer' onClick={handleDropdown}>Categories
              <ul className={showDropdown ? 'absolute top-14 left-0 z-30 block w-20 text-center h-auto py-2 bg-sky-500' : 'hidden'}>
                <li onClick={(e)=>showFilteredMovies(e)} className=' border-2 border-gray-500 hover:bg-sky-300'>Action</li>
                <li onClick={(e)=>showFilteredMovies(e)} className=' border-2 border-gray-500  hover:bg-sky-300'>Drama</li>
               <li onClick={(e)=>showFilteredMovies(e)} className=' border-2 border-gray-500  hover:bg-sky-300'>Comedy</li>
               <li onClick={(e)=>showFilteredMovies(e)} className=' border-2 border-gray-500  hover:bg-sky-300'>Fantastic</li>
              </ul>
            </li>
            <li>Contact</li>
        </ul>
      </nav>
      <div className='flex gap-5 justify-end w-2/6 '>
        <input className='w-60 h-8'/>
        <button>Search</button>
      </div>
    </div>
  )
}

export default Header
