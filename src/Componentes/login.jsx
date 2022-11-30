import React from "react";
import '../Estilos/navbar.css'

function Login() {
    return (
        <div class="container" id="container">
        <form>
            <div class="container col-5" id="container2">
                <i class="bi bi-person-circle uno"></i>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Usuario</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3" id="impus">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-success mt-3">Iniciar Sesión</button>
                <a href="registrarse.html"><button type="button" class="btn btn-primary mt-3 mx-2" id="btn-registrase"> Registrarse</button></a>
            </div>
        </form>
    </div>



    );
}
export default Login;