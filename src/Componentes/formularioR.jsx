import React from "react";
import '../Estilos/navbar.css'

function FormularioR() {
    return (
    <form class="align-items-center">
   
      <div class="row mx-2 mt-5">
       <h3 className="negro mb-2">Registro de Ordenes</h3>
        <div class="mb-3 col-4">
          <label for="fecha" class="form-label">Fecha </label>
          <input
            type="date"
            class="form-control"
            id="fecha"
            aria-describedby="Apellido"
            name="fecha"
            required

            />
        </div>
        <div class="col-4 mb-3">
          <label for="Hora" class="form-label">Hora </label>
          <input
            type="time"
            className="form-control"
            id="Hora"
            aria-describedby="nombre"
            name="nombre"
            required
          />
        </div>

        <div class="col-4 mb-3">
          <label for="Tipoidentificacion" class="form-label"
            >Estado</label>
          <select class="form-select" aria-label="Default select example" name="tipo" id="Tipoidentificacion">
            <option selected>seleccione</option>
            <option value="Cumplido">Cumplido</option>
            <option value="Guardado">Guardado</option>
            <option value="Cancelado">Cancelado</option>
          </select>
        </div>


        <div class="mb-3 col-4">
          <label for="Largo" class="form-label">Largo </label>
          <input
            type="number"
            class="form-control"
            id="Largo"
            aria-describedby="Apellido"
            name="Apellido"
            required
          />
        </div>

        <div class="mb-3 col-4">
          <label for="Alto" class="form-label">Alto </label>
          <input
            type="number"
            class="form-control"
            id="Alto"
            aria-describedby="Apellido"
            name="Apellido"
            required
          />
        </div>
        
        <div class="mb-3 col-4">
          <label for="Ancho" class="form-label">Ancho </label>
          <input
            type="number"
            class="form-control"
            id="Ancho"
            aria-describedby="Apellido"
            name="Apellido"
            required
          />
        </div>

        <div class="mb-3 col-4">
          <label for="Peso en KG" class="form-label">Peso en KG</label>
          <input
            type="number"
            class="form-control"
            id="Peso en KG"
            aria-describedby="Apellido"
            name="Apellido"
            required
          />
        </div>


        <div class="mb-3 col-4">
          <label for="Dirrección" class="form-label">Dirrección de Recogida </label>
          <input
            type="text"
            class="form-control"
            id="Dirrección"
            aria-describedby="Dirrección"
            name="Dirreccion"
            required
          />
        </div>

        <div class="mb-3 col-4">
          <label for="Ciudad de Recogida" class="form-label">Ciudad de Recogida </label>
          <input
            type="text"
            class="form-control"
            id="Ciudad de Recogida"
            aria-describedby="Dirrección"
            name="Dirreccion"
            required
          />
        </div>

        <div class="mb-3 col-4">
          <label for="Nombre Destinatario" class="form-label">Nombre Destinatario </label>
          <input
            type="text"
            class="form-control"
            id="Nombre Destinatario"
            aria-describedby="Departamento"
            name="Departamento"
            required
          />
        </div>

        <div class="mb-3 col-4">
          <label for="Cedula Destinatario" class="form-label">Cedula Destinatario</label>
          <input
            type="number"
            class="form-control"
            id="Cedula Destinatario"
            aria-describedby="Apellido"
            name="Apellido"
            required
          />
        </div>
        <div class="mb-3 col-4">
          <label for="Dirrección de Entrega " class="form-label">Dirrección de Entrega </label>
          <input
            type="text"
            class="form-control"
            id="Dirrección de Entrega "
            aria-describedby="Dirrección"
            name="Dirreccion"
            required
          />
        </div>

        <div class="mb-3 col-4">
          <label for="CiudaddeEntreg" class="form-label">Ciudad de Entrega</label>
          <input
            type="text"
            class="form-control"
            id="CiudaddeEntreg"
            aria-describedby="ciudad"
            name="CiudaddeEntreg"
            required
          />
        </div>

       
        <div class="mb-3 col-9">
          <button type="submit" class="btn btn-primary">Crear Orden</button>
        </div>
      </div>
    </form>
       
    );
}
export default FormularioR;
