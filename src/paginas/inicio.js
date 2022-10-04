import { ABC, caja, interior } from "../componentes/carousel";

export const inicio = (root) => {
  root.appenChild(ABC("abc1", "carousel slide"));
  caja("abc1", "caja1", "carousel-indicators");
  document.getElementById("caja1").append(interior(
    "pat1",
    "carousel-inner",
    "carousel-item active",
    "Hola",
    "Mundo",
    "..."
  ));
}


/*inicio.root.appendChild(
  ABC("abc1", "carousel carousel-light slide carousel-fade height-carousel")
);
caja("abc1", "caja1", "carousel-indicators");

document
  .getElementById(ABC)
  .appendChild(
    interior(
      "pat1",
      "carousel-inner",
      "carousel-item active",
      "Hola Mundo",
      "No Se We",
      "..."
    )
  );*/
