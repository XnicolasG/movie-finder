import withResults from '../mocks/withResults.json'

export const useMovies = () => {
    const movies = withResults.Search;
    const formatedData = movies.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        img: movie.Poster
    }))

    return {
        movies: formatedData,
    }
}
