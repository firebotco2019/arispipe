export const contacts = () => {
    return `
        <div class="container mt-3">
        <div class="fixed-left redes-sociales">
        <button class="btn btn-dark mb-1 shadow-sm">
          <i class="fab fa-twitter fa-fw"></i>
        </button>
        <button class="btn btn-dark mb-1 shadow-sm">
          <i class="fab fa-facebook fa-fw"></i>
        </button>
        <button class="btn btn-dark mb-1 shadow-sm">
          <i class="fab fa-instagram fa-fw"></i>
        </button>
      </div>
  
      <nav class="navbar navbar-expand-lg color_corporativo">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="transform_white" src="./img/Arispipe_Logo.png" width="64" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./index.html"
                  >Inicio</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./products.html">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./about.html">Quienes Somos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contacts.html">Contáctanos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <form action="/" method="post">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"
                      ><i class="fas fa-user-astronaut fa-fw"></i
                    ></span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombres y Apellidos"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2"
                      ><i class="fas fa-envelope fa-fw"></i
                    ></span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Correo Electrónico"
                      aria-label="Email"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3"
                      ><i class="fas fa-phone fa-fw"></i
                    ></span>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Telefono"
                      aria-label="Email"
                      aria-describedby="basic-addon3"
                    />
                    
                  </div>
                  <div class="card">
                    <div class="card-header">comentarios</div>
                    <div class="card-body">
                      <textarea name="comentarios" id="comentarios" cols="30" rows="10" class="form-control"></textarea>
                    </div>
                  </div>
                  <button class="btn btn-info"><i class="fas fa-paper-plane fa-fw"></i>Enviar</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6 h-100">
            <div id="map" class="rounded shadow-sm"></div>
            <script>
              var map = L.map("map").setView([4.7578175, -74.0433181], 13);
              L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: "ARISPIPE",
              }).addTo(map);
              var marker = L.marker([4.7578175, -74.0433181]).addTo(map);
              marker
                .bindPopup(
                  "<b>ARISPIPE</b><br>Calle Falsa 123<br>Teléfono: 12345678"
                )
                .openPopup();
            </script>
          </div>
        </div>
      </div>
        </div>
    `;
}