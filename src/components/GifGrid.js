import React            from 'react'
import PropTypes        from 'prop-types';
import { GifGridItem }  from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {
    
    const {data: imagenes, loading } = useFetchGifs(categoria);
    

    return (
        <>
            {loading && <div className="position-absolute end-50 top-50 spinner-border text-light" role="status"><span className="visually-hidden">Loading...</span></div>}

            <div className="card-grid animate__animated animate__fadeIn">
                {
                    imagenes.map((img) => (
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                        
                    ))
                
                }
            </div>
        </>
        
    )
}


GifGrid.protoTypes = { 
    categoria: PropTypes.string.isRequired
}