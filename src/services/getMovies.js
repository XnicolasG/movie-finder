const API_KEY = import.meta.env.VITE_API_KEY;

export const getSearchMovies = async ({ search }) => {
    if (search === '') return
    try {
        if (search) {
            // setResponseMovies(withResults)
            const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
            const json = await response.json()
            const movies = json.Search;

            return movies?.map((movie) => ({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                img: movie.Poster
            }))
        }
    } catch (error) {
       throw new Error('error en getMovies')
    }
}