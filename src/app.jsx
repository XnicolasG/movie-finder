
import { Movies } from './components/Movies';
import { useMovies } from './Hooks/useMovies';
import './app.css'
import { useSearch } from './Hooks/useSearch';


export const App = () => {
    const {search, setSearch, error} = useSearch()
    const { movies, getMovies,loading } = useMovies({search});

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search);
        getMovies()
    }

   const handleChange =(e)=>{
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
    
   }
    return (
        <div className='page'>
            <header className='page_cont'>
                <h1 className='page_title'>Movie Finder</h1>
                <form className="page_form" onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={search}  type="text" placeholder='Harry Potter, Matrix, etc..' />
                    <button>Buscar</button>
                </form>
                {error && <p>{error}</p>}
            </header>
            <main>
                {
                    loading ? <p>Loading...</p> : <Movies movies={movies} />
                }
            </main>
        </div>
    )
}
