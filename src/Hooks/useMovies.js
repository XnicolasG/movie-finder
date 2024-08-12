import { useState } from 'react';
import { getSearchMovies } from '../services/getMovies';

export const useMovies = ({search}) => {
    const [movies, setMovies] = useState([])
    
    const getMovies = async() => {
     const newMovies =  await getSearchMovies({search})
     setMovies(newMovies)
    }
    return {
        movies,
        getMovies
    }
}
