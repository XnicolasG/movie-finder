import { useCallback, useMemo, useRef, useState } from 'react';
import { getSearchMovies } from '../services/getMovies';

export const useMovies = ({ search, sort }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    const getMovies = useCallback(async ({ search }) => {
        if (search === previousSearch.current) return
        try {
            console.log(search);

            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await getSearchMovies({ search })
            setMovies(newMovies)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }, [])

    const sortedMovies = useMemo(() => {
        console.log(movies);
        
        if (!movies) return;
        return sort
        ? [...movies].sort((a, b) => a.year - b.year)
        : [...movies].sort((a, b) => b.year - a.year);
    }, [sort, movies])

    return {
        movies: sortedMovies,
        getMovies,
        loading
    }
}
