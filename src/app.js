import("../node_modules/bootstrap/dist/css/bootstrap.min.css");
import("../node_modules/bootstrap/dist/js/bootstrap.bundle");
import("../node_modules/@fortawesome/fontawesome-free/css/all.css");

import { container, loadPage } from "./componentes/navbar";
import { inicio } from "./paginas/inicio";
import { header } from "./paginas/header";



const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

header(root);

container("cont1", "container-fluid", "root");

loadPage(inicio(container), "cont1");

    
