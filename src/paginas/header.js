import { parteSuperior, menu } from "../componentes/navbar";
import { inicio } from "./inicio";
import { about } from "./about";
import { products } from "./products";
import { contacts } from "./contacts";


export const header = (root) => {
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
        inicio(),
        "nav1-destino"
    );
    menu(
        "nav-link",
        '<div style="color: #fff !important ">Productos</div>',
        products(),
        "nav1-destino"
    );
    menu(
        "nav-link",
        '<div style="color: #fff !important ">Quienes Somos</div>',
        about(),
        "nav1-destino"
    );
    menu(
        "nav-link",
        '<div style="color: #fff !important ">Contáctanos</div>',
        contacts(),
        "nav1-destino"
    );
}