

const WithMovies = ({ movies }) => {
    return (
        <ul>
            {
                movies.map((movie) => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.img} alt={movie.Title} />
                    </li>
                ))
            }
        </ul>
    )
};

const NoMovies = () => {
    return (
        <p>No se encontraron películas para esta busqueda</p>
    )

};
export const Movies = ({ movies }) => {
    const hasMovies = movies?.length > 0 //verificación de que tengo resultados
    return (
        hasMovies
            ? <WithMovies movies={movies} />
            : <NoMovies />
    )
}
