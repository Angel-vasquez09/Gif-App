

export const getGifs = async(categoria) =>  { 
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=q8pc5vwiAGw1x0yBHKJoYDiWY4LtFthk`;
    const resp = await fetch(url);
    const { data } = await resp.json(); // Extraemos solo la data de la peticion
    
    const gifs = data.map(img => {
        // Modificamos la respuesta solo con los datos que nos interesa
        return {
            id   : img.id,
            title: img.title,
            url  : img.images?.downsized_medium.url
        }
    })

    return gifs; //Retorna una promesa
    
}