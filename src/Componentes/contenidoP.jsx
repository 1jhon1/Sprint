import React from "react";
import '../Estilos/navbar.css';
function ContenidoP(props) {
    return (
        <div className="principal row">
            <div class="card col-5 mb-4 mx-4">
                <div class="card-body">
                    <h5 class="card-title">{props.titulo1}</h5>
                    <p class="card-text">{props.texto1}</p>
                </div>
            </div>

            <div class="card col-5 mb-4 mx-4">
                <h5 class="card-title">{props.titulo2}</h5>
                <img className="imagen-servicio" alt="h" src={require('../img/paquete.jpg')} />
            </div>

            <div class="card col-5 mb-4 mx-4">
                <div class="card-body">
                    <h5 class="card-title">{props.titulo3}</h5>
                    <p class="card-text">{props.texto3}</p>
                </div>
            </div>

            <div class="card col-5 mb-4 mx-4">
                <div class="card-body">
                    <h5 class="card-title">{props.titulo4}</h5>
                    <p class="card-text">{props.texto4}</p>
                </div>
            </div>
        </div>
    );
}
export default ContenidoP;



