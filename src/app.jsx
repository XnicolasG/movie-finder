import './app.css'
import { Movies } from './components/Movies';
import { useMovies } from './Hooks/useMovies';
import withResults from './mocks/withResults.json'

export const App = () => {
    const { movies} = useMovies()

    return (
        <div className='page'>
            <header className='page_cont'>
                <h1 className='page_title'>Movie Finder</h1>
                <form className="page_form">
                    <input type="text" placeholder='Harry Potter, Matrix, etc..' />
                    <button>Buscar</button>
                </form>
            </header>
            <main>
                <Movies movies={ movies } />
            </main>
        </div>
    )
}
