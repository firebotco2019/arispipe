export const ABC=(idabc, clase, otroid)=>{
    const abc = document.createElement('container');
    abc.id = idabc;
    abc.className=clase;
    abc.innerHTML=`
    <div id="${otroid}" class=\"carousel carousel-light slide carousel-fade height-carousel\" data-bs-ride=\"carousel\"></div>
    `;
    return abc;
}

export const caja =(idabc, idcaja, clase)=>{
    const carrousel = document.createElement('div');
    carrousel.id = idcaja;
    carrousel.className = clase;
    carrousel.innerHTML = `
            <button type="button" data-bs-target="#captions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#captions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#captions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    `;
    document.getElementById(idabc).appendChild(carrousel);
}

export const interior =(idpat, clase, activador, titulo, texto, imagen)=>{
    const paneles = document.createElement('div')
    paneles.id = idpat;
    paneles.setAttribute = clase;/*no me quiere tomar en cuenta el "carousel-inner" help me atte: willianstars*/
    paneles.innerHTML = `
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
    return paneles;

}