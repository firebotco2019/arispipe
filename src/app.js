import("../node_modules/bootstrap/dist/css/bootstrap.min.css");
import("../node_modules/bootstrap/dist/js/bootstrap.bundle"),
import("../node_modules/@fortawesome/fontawesome-free/css/all.css");

import { parteSuperior, menu } from "./componentes/navbar";
import { fila, columna, cards } from "./componentes/tarjetas";

const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

root.appendChild(
  parteSuperior(
    "nav1",
    "nav1-destino",
    "navbar navbar-expand-lg color_corporativo"
  )
);

menu(
  "nav-link",
  '<div style="color: #fff !important ">Inicio</div>',
  "#",
  "nav1-destino"
);
menu(
  "nav-link",
  '<div style="color: #fff !important ">Productos</div>',
  "#",
  "nav1-destino"
);
menu(
  "nav-link",
  '<div style="color: #fff !important ">Quienes Somos</div>',
  "#",
  "nav1-destino"
);
menu(
  "nav-link",
  '<div style="color: #fff !important ">Contáctanos</div>',
  "#",
  "nav1-destino"
);

root.appendChild(fila("main1", "row mb-3"));

columna("col1", "main1", "col-md-4 bg-info");
columna("col2", "main1", "col-md-4 bg-success");
columna("col3", "main1", "col-md-4 bg-dark");

/*cards(
  "card1",
  "card shadow-sm prueba1",
  "width: 18rem",
  "producto-imagen",
  "background-image: url('../img/Torta_3_leches.jpg');",
  "Torta 3 leches",
  "Bizcocho de vainilla bañado en salsa 3 leches, decorado con placas lisas de chocolate blanco y lluvia chocolate blanco por encima. Uno de los mas vendidos en toda nuestra historia",
  "$25000 c/u"
)*/

//document.getElementById("col1").appendChild("card1");
