import React from "react";
import '../Estilos/navbar.css';


function Navbar() {
    return (
        <div className="nav-principal">
            

            <nav class="navbar bg-primary">
                <form class="container-fluid justify-content-end">
                <h1><i class="bi bi-box-seam mx-4"></i>Plataforma recogida de paguetes</h1> 
                <button type="button" class="btn btn-warning mx-4">Acceder</button>
                <button type="button" class="btn btn-warning">Registrarse</button>
                </form>
            </nav>
         

        </div>



    );
}
export default Navbar;