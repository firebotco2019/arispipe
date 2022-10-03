import { ABC, caja, interior } from "../componentes/carousel";

export const inicio = () => {
  return ` root.appenChild(
    ABC("abc1", "carousel carousel-light slide carousel-fade height-carousel")
  );
  caja("abc1", "caja1", "carousel-indicators");
  document.getElementById(abc1).appendChild(interior(
    "pat1",
    "carousel-inner",
    "carousel-item active",
    "Hola Mundo",
    "No Se We",
    "..."
  ));`
};
console.log(inicio());
/*
// inicio.appendChild(
//     ABC("abc1", "carousel carousel-light slide carousel-fade height-carousel")
//   );

//  caja("abc1", "caja1", "carousel-indicators");

//   document.getElementById(abc1).appendChildinterior(
//     "pat1",
//     "carousel-inner",
//     "carousel-item active",
//     "Hola Mundo",
//     "No Se We",
//     "..."
// ));*/
