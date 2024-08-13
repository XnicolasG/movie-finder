import { useEffect, useRef, useState } from "react"

export const useSearch = () => {
    const [search, setSearch] = useState()
    const [error, setError] = useState()
    const isFirstInput = useRef(true)
    
    useEffect(() => {
      if (isFirstInput.current) {
        //si search es vacio sera true, si no es vacio sera false
        isFirstInput.current = search === '' 
        return
      };

      if (search === '') {
          setError('No se puede buscar una pelicula sin nombre')
          return
      };
      if (search?.match(/^\d+$/)) {
          setError('No se puede buscar una pelicual con un numero')
          return
      };
      setError(null)
    }, [search])
      return {search, setSearch, error}
  }