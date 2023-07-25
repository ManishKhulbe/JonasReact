import { useEffect,useState } from "react";
const key = "1d7097cb";

export function useMovies(query) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    
    useEffect(() => {
        
        const controller = new AbortController();
        async function fetchMovies() {
            try {
                setIsLoading(true);
                setError("");
                const res = await fetch(
                    `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
                    { signal: controller.signal }
                );
                if (!res.ok)
                    throw new Error("Something went wrong with fetching movies");
                const data = await res.json();

                if (data.Response === "False") throw new Error("Movie not found! ");
                setMovies(data.Search);
                setError("");
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                }
            } finally {
                setIsLoading(false);
            }
        }
        if (!query.length) {
            setMovies([]);
            setError("");
            return;
        }
        
        fetchMovies();
        return function () {
            controller.abort();
        };
    }, [query]);
    
    return {movies, isLoading, error}
}