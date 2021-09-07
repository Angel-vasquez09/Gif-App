import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategoria = ({ setC }) => {

    const [inputValue, setInputValue] =  useState('Buscar');

    const handleInputChange = (e) =>{
        const text = e.target.value;
        setInputValue(text);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setC(cat  => [ inputValue,...cat ])
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="" 
                value={inputValue} 
                onChange={ handleInputChange } 
            />
        </form>
    )
}


AddCategoria.protoTypes = {
    setC: PropTypes.func.isRequired
}