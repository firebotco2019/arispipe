export const fila = (idfila, clase) => {
    const fil = document.createElement("div");
    
  fil.id
   = idfila;
    fil.setAttribute("class", clase);
    return fil;
  };
  
  export const columna = (idcol, idfila, clase) => {
    const col = document.createElement("div");
    
  col.id
   = idcol;
    col.setAttribute("class", clase);
    document.getElementById(idfila).appendChild(col);
  };

  export const cards = ( idtarjeta, clase, estilo, cardHeader, productoImagen, imagen, cardBody, card, cardHeader2, titulo, cardBody2, texto, precio) => {
      const tarjeta = document.createElement("div");
      
  tarjeta.id
   = idtarjeta;
      tarjeta.setAttribute("class", clase);
      tarjeta.setAttribute("style", estilo);
      tarjeta.innerHTML = `
                    <div class="${cardHeader} p-0 m-0">
                      <div class="${productoImagen}" style="${imagen};"></div>
                    </div>
                    <div class="${cardBody}">
                        <div class="${card}">
                            <div class="${cardHeader2}">${titulo}</div>
                            <div class="${cardBody2}">${texto} <br> <span>${precio}</span></div>
                        </div>
                    </div>
                `;
      return tarjeta;
  } 


  /*
  
  Este equipo es la leche

  */