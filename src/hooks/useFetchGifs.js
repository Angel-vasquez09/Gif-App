
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {

    // Creamos un estado antes de que cargue toda la data(todos los gifs)
    const [state, setState] = useState({
        data: [],
        loading: true // Lo colocamos en true indicando que no tiene gifs
    })

    // Solo cargara cuando cargue la pagina por primera vez o cuando se modifica el estado
    useEffect(() => {
        getGifs(categoria)
            .then(imgs => {
                setTimeout(() => {
                    setState({ data: imgs,loading: false })
                }, 3000);
            })
    }, [categoria])

    return state;

    //? state = {data: [], loading: true}
}