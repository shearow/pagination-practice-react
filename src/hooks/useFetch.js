import { useState, useEffect } from "react";

export const useFetch = ( {endPoint} ) => {
    const [dataFetch, setDataFetch] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemons = async () => {
        setLoading(true);
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/${endPoint}`);
            const data = await res.json();

            if(!res.ok) throw {status: res.status, statusText: res.statusText};
            setDataFetch(data);
        }catch(err){
            setErrors(`Ha ocurrido un error`);
        }finally{
            setLoading(false);
        }
    }

    return {
        dataFetch,
        ...dataFetch,
        loading,
        errors
    }
}