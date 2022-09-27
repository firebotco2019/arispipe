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

  /*export const cards = ( idtarjeta, clase, estilo, cardHeader, productoImagen, imagen, cardBody, card, cardHeader2, titulo, cardBody2, texto, precio) => {
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
  }*/ 


/* modificado por willianstars, creo que queda igual pero se acorta mas codigo en sierta forma */
export const cards = ( idtarjeta, clase, estilo, productoImagen, imagen, titulo, texto, precio) => {
  const tarjeta = document.createElement("div");
    
tarjeta.id
 = idtarjeta;
    tarjeta.setAttribute("class", clase);
    tarjeta.setAttribute("style", estilo);
    tarjeta.innerHTML = `
                  <div class="card-header p-0 m-0">
                    <div class="${productoImagen}" style="${imagen};"></div>
                  </div>
                  <div class="card-body p-0 m-0">
                      <div class="card">
                          <div class="card-header bg-info text-center text-uppercase fw-bold rounded-0">${titulo}</div>
                          <div class="card-body text-justify">${texto} <br> <span>${precio}</span></div>
                      </div>
                  </div>
              `;
    return tarjeta;
}