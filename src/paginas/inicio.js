import { interior, caja, ABC } from "../componentes/carousel";

export const inicio = () => {
    const start = document.getElementById(cont1);
    start.id = "start1";
    return start;
};

inicio.appendChild(
    ABC("abc1", "carousel carousel-light slide carousel-fade height-carousel")
  );

 caja("abc1", "caja1", "carousel-indicators");

  document.getElementById(start1).appendChild(interior(
    "pat1",
    "carousel-inner",
    "carousel-item active",
    "Hola Mundo",
    "No Se We",
    "..."
));