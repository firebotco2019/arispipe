export const ABC = (iddest) => {
    return `
    <div id="carouselExampleControls" class="carousel carousel-light slide carousel-fade height-carousel" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="carousel-caption d-none d-md-block w-100">
              <br /><br />
              <h1 class="fw-bold text-shadow-sm arispipe">ARISPIPE</h1>
              <p class="h2 bg-dark-trans rounded p-3">
                No necesitas hacer dieta, según tu Whatsapp, estás en línea.
              </p>
            </div>
            <div
              style="
                background-image: url('https://www.eltiempo.com/uploads/2020/12/28/5fea66fc148ce.jpeg');
                background-position: center;
                background-size: cover;
              "
              class="w-100 height-carousel"
            ></div>
          </div>
          <div class="carousel-item">
            <div class="carousel-caption d-none d-md-block w-100">
              <br /><br />
              <h1 class="fw-bold text-shadow-sm arispipe">
                NUESTROS PRODUCTOS
              </h1>
              <p class="h2 bg-dark-trans rounded p-3">
                Deleitate con Nuestros Productos
              </p>
            </div>
            <div
              style="
                background-image: url('https://elmundoenrecetas.s3.amazonaws.com/uploads/recipe/main_image/566/fresas_con_crema.webp');
                background-position: center;
                background-size: cover;
              "
              class="w-100 height-carousel"
            ></div>
          </div>
          <div class="carousel-item">
            <div class="carousel-caption d-none d-md-block w-100">
              <br /><br />
              <h1 class="fw-bold text-shadow-sm arispipe">RESERVA TU PEDIDO</h1>
              <p class="h2 bg-dark-trans rounded p-3">
                Llámanos a Nuestra Línea de Domicilios 3003334556
              </p>
            </div>
            <div
              style="
                background-image: url('https://www.petitchef.es/imgupl/recipe/milhojas-crujiente-de-crema-pastelera--454800p705566.jpg');
                background-position: center;
                background-size: cover;
              "
              class="w-100 height-carousel"
            ></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
}

export const carditem = () => {
    return `
    <div class="carousel-item active">
    <div class="carousel-caption d-none d-md-block h-100">
      <br /><br />
      <h1 class="fw-bold text-shadow-sm arispipe">ARISPIPE</h1>
      <p class="h2 bg-dark-trans rounded p-3">
        No necesitas hacer dieta, según tu Whatsapp, estás en línea.
      </p>
    </div>
    <div
      style="
        background-image: url('https://www.eltiempo.com/uploads/2020/12/28/5fea66fc148ce.jpeg');
        background-position: center;
        background-size: cover;
      "
      class="w-100 height-carousel"
    ></div>
  </div>
    `
}