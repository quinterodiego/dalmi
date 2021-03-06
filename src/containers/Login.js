import React from 'react';

const Login = () => {
    return (
        <>
            <div class="row pt-5 align-items-center justify-content-center">
                <div class="col-md-6 logo-cover rotated"></div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col">
                            <div class="card border-1 border-white bg-dark">
                                <div class="card-header text-center bg-dark border-1  border-white">
                                    <h4>Control Personal de Cuentas</h4>
                                </div>
                                <form id="crear-usuario" class="bg-dark">
                                    <div class="form-row align-items-center justify-content-center">
                                        <div class="col-md-8 p-4">
                                            <div class="form-group">
                                                <label class="" for="nombre">Nombre</label>
                                                <label class="alert-danger p-0 ml-2 d-none"  id="nombreExiste">Este nombre ya existe!</label>
                                                <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" class="form-control" required onchange="ValidarNombre()" />
                                            </div>
                                            <div class="form-group">
                                                <label class="" for="email">Email</label>
                                                <label class="alert-danger p-0 ml-2 d-none"  id="emailExiste">Este email ya existe!</label>
                                                <input type="email" id="email" name="email" placeholder="Ingrese su email" class="form-control" required onchange="ValidarEmail()" />
                                            </div>
                                            <div class="form-group">
                                                <label class="" for="password">Contrase??a</label>
                                                <input type="password" id="password" name="password" placeholder="Ingrese una contrase??a"  class="form-control" required />
                                            </div>
                                            <button type="submit" class="btn w-100 text-white mt-2" id="btn-crear-cuenta"  onclick="CrearUsuario(event)">Crear cuenta</button>
                                            <button type="submit" class="w-100 btn text-center mt-2 btn-white bg-dark" id="mensaje-iniciar-sesion" onclick="IrAIniciarSesion(event)">Iniciar Sesi??n</button>
                                        </div>
                                    </div>
                                </form>
                                <form id="form-iniciar-sesion" class="bg-dark">
                                    <div class="form-row align-items-center justify-content-center">
                                        <div class="col-md-8 p-4">
                                            <div class="form-group">
                                                <label class="" for="email-login">Email</label>
                                                <label class="alert-danger p-0 ml-2 d-none"  id="emailExiste">Este email ya existe!</label>
                                                <input type="email" id="email-login" name="email-login" placeholder="Ingrese un email" class="form-control" required />
                                            </div>
                                            <div class="form-group">
                                                <label class="" for="password-login">Contrase??a</label>
                                                <input type="password" id="password-login" name="password-login" placeholder="Ingrese su contrase??a" class="form-control" required />
                                            </div>
                                            <div class="w-100 text-center p-2 alert-danger mb-2 d-none" id="login-error">
                                                <span>Usuario o contrase??a son incorrectos</span>
                                            </div>
                                            <button type="submit" class="btn text-white w-100 mt-2" id="btn-iniciar-sesion"  onclick="ValidarUsuario(event)">Iniciar Sesi??n</button>
                                            <button type="submit" class="w-100 btn text-center mt-2 btn-white bg-dark text-white" id="mensaje-crear-cuenta" onclick="IrACrearCuenta(event)">Crear Cuenta</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Modal  */}
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-dark rounded">
                        <div class="modal-header border-0">
                            <h5 class="modal-title" id="exampleModalLongTitle">Ingresando, por favor espere un instante...</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login