import React from "react";
import '../Estilos/navbar.css'

function ListaOrden() {
    return (
    <div className="principal row">
        <table class="table">
        <thead>
          <tr>
            <th scope="col"># Servicio</th>
            <th scope="col">Fecha</th>
            <th scope="col">Ciudad de Entrega</th>
            <th scope="col">Dirrecion de Entrega</th>
            <th scope="col">Estado</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>30/11/2022</td>
            <td>Medellín</td>
            <td>calle 4 #5-6</td>
            <td>Cumplido</td>
            <td><i class="bi bi-pencil-square edit"></i></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>1/12/2022</td>
            <td>Barranquilla</td>
            <td>calle 6 #5-6</td>
            <td>Guardado</td>
            <td><i class="bi bi-trash3-fill delete"></i></td>
          </tr>
         
        </tbody>
        </table>
     </div>
    );
}
export default ListaOrden;