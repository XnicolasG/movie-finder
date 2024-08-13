
import { Movies } from './components/Movies';
import { useMovies } from './Hooks/useMovies';
import { useSearch } from './Hooks/useSearch';
import { useCallback, useState } from 'react';
import './app.css'
import debounce from 'just-debounce-it';


export const App = () => {
    const [sort, setSort] = useState(false)
    const { search, setSearch, error } = useSearch()
    const { movies, getMovies, loading } = useMovies({ search, sort });

    const debouncerGetMovies = useCallback(
        debounce(search => {
            console.log('search:', search);
            getMovies({ search })
        }, 300)
        , [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search);
        getMovies({ search })
    }

    const handleChange = (e) => {
        const newQuery = e.target.value
        if (newQuery.startsWith(' ')) return
        setSearch(newQuery)
        debouncerGetMovies(newQuery)
    }
    const hanldeSort = () => {
        setSort(!sort)
    }
    return (
        <div className='page'>
            <header className='page_cont'>
                <h1 className='page_title'>Movie Finder</h1>
                <form className="page_form" onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={search} type="text" placeholder='Harry Potter, Matrix, etc..' />
                    <input type="checkbox" onChange={hanldeSort} checked={sort} />
                    <button>Search</button>
                </form>
                {error && <p>{error}</p>}
            </header>
            <main>
                {
                    loading
                        ? <p>Loading...</p>
                        : <Movies movies={movies} />
                }
            </main>
        </div>
    )
}
