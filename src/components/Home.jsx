import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {MdPlayArrow} from 'react-icons/md'
import request from '../api/Request'

const Home = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)]
    useEffect(() => {
        axios.get(request.popularMovie).then((res) => {
            setMovies(res.data.results);
        })
    }, []);
   
 const truncatedStr = (str, num) => {
    if(str?.length > num) {
        return str.slice(0, num) + ' ....'
    }else {
        return str
    }
 }
  return (
    <div>
        <div className='w-full h-[550px]  text-white'>
            <div className='absolute h-[550px] w-full bg-gradient-to-tr from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div>
        <div className='text-white absolute top-[20%] p-8'>
            <h2 className='text-5xl'>{movie?.original_title}</h2>
            <p className='md:w-[60%]'>{truncatedStr(movie?.overview, 150)}</p>
            <div className='flex mt-2 gap-2'>
                <button className='flex justify-between items-center gap-1 text-black py-1 px-8 hover:bg-gray-400/10 hover:text-white rounded-md text-xl m-2 cursor-pointer bg-white'><MdPlayArrow className='text-black text-xl' />Play</button>
                <button className='text-white py-4 px-7 rounded-md text-2xl m-2 cursor-pointer bg-gray-500/60'>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default Home