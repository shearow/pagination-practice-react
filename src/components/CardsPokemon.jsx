import { useEffect, useState } from "react"
import { Spinner } from "./Spinner"
import { useFetch } from "../hooks/useFetch"
import { Pagination } from "./Pagination"

export const CardsPokemon = () => {
    const [actualPage, setActualPage] = useState(1);
    const {loading, errors, dataFetch} = useFetch({endPoint:`pokemon?limit=100&offset=0`});
    const POKEMONS_IN_PAGE = 8;
    let pokeCardsInPage = [];
    
    const cantPages = () => {
        if(dataFetch) return Math.ceil(dataFetch?.results.length / POKEMONS_IN_PAGE);
        return 1;
    }

    const showCardsInPage = () => {
        const min = (actualPage - 1) * POKEMONS_IN_PAGE;
        const max = min + POKEMONS_IN_PAGE;
        pokeCardsInPage = dataFetch?.results.slice(min,max);
    }

    const beforePage =() => {
        if(actualPage > 1) setActualPage(prevState => prevState - 1);
    }

    const afterPage = () => {
        if(actualPage > 0 && actualPage < cantPages()) setActualPage(prevState => prevState + 1)
    }

    const toPage = (toPageNumber) => {
        if(toPageNumber > 0 && toPageNumber <= cantPages()) setActualPage(toPageNumber);
    }
    
    showCardsInPage();

    return (
        <section className="pokemon-list">
            <div className="pokemon-list-container container"></div>
            {loading
                ? <Spinner />
                : pokeCardsInPage
                    ? pokeCardsInPage.map((poke, index) => {
                        return (
                            <div key={index}>
                                <h2>{poke.name}</h2>
                                <span>{poke.url}</span>
                                <hr />
                            </div>
                        )
                    })            
                : <p>{errors}</p>
            }
            <Pagination totalPages={cantPages()} actualPage={actualPage} before={beforePage} after={afterPage} toPage={toPage}/>
        </section>
    )
}