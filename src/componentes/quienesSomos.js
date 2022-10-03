export const marquesina = (idanuncio, clase, texto) =>{
    const anuncio = document.createElement("div");
    anuncio.id= idanuncio;
    anuncio.className= clase;
    anuncio.innerHTML=`
        <marquee class="anuncio mt-2 mb-2" role="alert" width="90%"
            ><h1>${texto}</h1></marquee>
        `;
    return anuncio;
}
/*Cuadros de informacion de quienes somos (mision, vision...) 
para usarlas se podria usar las filas y columnas de las tarjetas y dentro de las mismas se pone
const imagen (donde ira la imagen :v) y el const info (donde ira el texto)*/
export const imagen =(idimg, clase, ) =>{
    const img = document.createElement("div");
    img.id = idimg;
    img.setAttribute("class", clase);
    img.setAttribute("style", estilo);
    return img;

}

export const info =(idcont, clase, titulo, contenido ) =>{
    const contenido = document.createElement("div");
    contenido.id = idcont;
    contenido.className= clase;
    contenido.innerHTML=`
        <h1 class="fw-bold text">${titulo}</h1>  
        <p>${contenido}</p>  
    `;
    return contenido;
}