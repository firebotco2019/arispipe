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

export const cartas =()=>{
  return`
  <div class="fixed-left redes-sociales">
        <button class="btn btn-dark mb-1 shadow-sm"><i class="fab fa-twitter fa-fw"></i></button>
        <button class="btn btn-dark mb-1 shadow-sm"><i class="fab fa-facebook fa-fw"></i></button>
        <button class="btn btn-dark mb-1 shadow-sm"><i class="fab fa-instagram fa-fw"></i></button>
    </div>
    <div class="container mt-3">
      <marquee class="anuncio mt-2 mb-2" role="alert" width="90%"
        ><h1>TORTAS & POSTRES</h1></marquee
      >
      <div class="row mb-3">
        <div class="col-md-4">
          <div class="card shadow-sm" style="width: 18rem">
            <div class="card-header p-0 m-0">
              <div class="producto-imagen" style="background-image: url('./img/Torta_3_leches.jpg') ;"></div>
            </div>
            <div class="card-body p-0 m-0">
              <div class="card">
                <div class="card-header bg-info text-center text-uppercase fw-bold rounded-0">torta 3 leches</div>
                <div class="card-body text-justify">Bizcocho de vainilla bañado en salsa 3 leches, decorado con
                  placas lisas de chocolate blanco y lluvia chocolate blanco por
                  encima. Uno de los mas vendidos en toda nuestra historia <br> <span> $2500 c/u</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm" style="width: 18rem">
            <div class="card-header m-0 p-0">
              <div class="producto-imagen" style="background-image: url('./img/Torta_de_Helado.jpeg');"></div>
            </div>
            <div class="card-body p-0 m-0">
              <div class="card">
                <div class="card-header bg-info text-center text-uppercase fw-bold rounded-0">torta de helado</div>
                <div class="card-body text-justify">Helado de Vainilla con salsa de mora, y un toque de chocolate <br><span> $2500 c/u</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm" style="width: 18rem">
            <div class="card-header m-0 p-0">
              <div class="producto-imagen" style="background-image: url('./img/Torta_Milky_Way.jpeg');"></div>
            </div>
            <div class="card-body p-0 m-0">
              <div class="card">
                <div class="card-header bg-info text-center text-uppercase fw-bold rounded-0">torta milky way</div>
                <div class="card-body text-justify">Bizcocho esponjoso, bañado en salsa tres leches de chocolate. Va
                  decorado con placas lisas de chocolate oscuro por los lados y
                  lluvia de milo por encima. <br><span> $2500 c/u</span></div>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-4">
          <div class="card shadow-sm" style="width: 18rem">
            <div class="card-header m-0 p-0">
              <div class="producto-imagen" style="background-image: url('./img/Torta_De_Chocolate.jpeg') ;"></div>
            </div>
            <div class="card-body p-0 m-0">
              <div class="card border-0 rounded-0">
                <div class="card-header bg-info text-center text-uppercase fw-bold rounded-0">torta de chocolate</div>
                <div class="card-body text-justify">Bizcoho de chocolate en 2 capas cubiertas y entreteladas con una
                  deliciosa mezcla de chocolate con sabor ligeramente intenso y
                  arequipe. Decorado con besos besos de chocolate cremosos y
                  lluvia dorada <br> <span> $2500 c/u</span></div>
              </div>              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm" style="width: 18rem">
            <div class="card-header p-0 m-0">
              <div class="producto-imagen" style="background-image: url('./img/Postre_Frutos_Rojos.jpeg') ;"></div>
            </div>
            <div class="card-body p-0 m-0">
              <div class="card border-0 rounded-0">
                <div class="card-header bg-info text-center text-uppercase fw-bold rounded-0">Postre frutos rojos</div>
                <div class="card-body text-justify">los mas exquisitos sabores del bosque se unen en este rico y
                  delicioso postre, las cerezas, la fresa y la mora crean una
                  combinación mágica <br> <span> $2500 c/u</span></div>
              </div>           
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm" style="width: 18rem">
            <div class="card-header p-0 m-0">
              <div class="producto-imagen" style="background-image: url('./img/Postre_de_Maracuya.jpeg');"></div>
            </div>
            
            <div class="card-body p-0 m-0">
              <div class="card border-0 rounded-0">
                <div class="card-header bg-info text-center text-uppercase fw-bold rounded-0">Postre de Maracuyá</div>
                <div class="card-body text-justify">Este delicioso y refrescante postre es
                  preparado al estilo tradicional con crema de leche, clara de
                  huevo gelatina y un toque de azucar <br> <span> $2500 c/u</span></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </div>
  `;
}