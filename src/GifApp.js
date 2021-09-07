import React, { useState } from 'react'
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';


export const GifApp = () => {

    const [categoria, setCategoria] = useState(['luis']);

    return(
        <>
            <h1>Mi Gif App</h1>
            
            <AddCategoria setC={ setCategoria }/>
        
            <ol className="position-relative vh-100">
                {
                    categoria.map(categoria => (
                        <GifGrid 
                                key={categoria}
                                categoria={categoria}
                        />
                    ))
                }
            </ol>
	    </>
    )
} 