import { ABC, caja, interior } from "../componentes/carousel";

export const inicio = ( activador, titulo, texto, imagen ) => {
  return  `
  
    <div class="${activador}">
        <div class="carousel-caption d-none d-md-block h-100">
        <br>
            <h1 class="fw-bold text-shadow-sm arispipe">${titulo}</h1>
            <p class="h2 bg-dark-trans rounded p-3">${texto}</p>
        </div>
        <div
            style="
            backgroun-image: url${imagen};
            background-position: center;
            background-size: cover;
            "
            class="w-100 height-carousel">
        </div>
        </div>
        
  `;
};
console.log(inicio("carousel-item active", "No se", "BlaBlaBla", "(../img/mision.jpeg)"));
// inicio.appendChild(
//     ABC("abc1", "carousel carousel-light slide carousel-fade height-carousel")
//   );

//  caja("abc1", "caja1", "carousel-indicators");

//   document.getElementById(start1).appendChildinterior(
//     "pat1",
//     "carousel-inner",
//     "carousel-item active",
//     "Hola Mundo",
//     "No Se We",
//     "..."
// ));