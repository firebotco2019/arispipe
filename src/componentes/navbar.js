export const parteSuperior = (idnav, iddestino, clase) => {
    const nav = document.createElement('nav');
    nav.id = idnav;
    nav.className = clase;
    nav.innerHTML = ` 
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img class="transform_white" src="./img/Arispipe_Logo.png" width="64" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="${iddestino}">
            </ul>
           </div>
        </div>
        `;
        return nav;
}


export const menu = (clase, texto, enlace, destino) => {
    const link = document.createElement('li');
    link.className = "nav-item";
    const ancla = document.createElement('a');
    ancla.setAttribute("class", clase);
    ancla.setAttribute("href", enlace);
    ancla.innerHTML = texto;
    link.appendChild(ancla);
    document.getElementById(destino).appendChild(link);
}