import React from 'react';

const Manager = () => {
    return (
        <>
             <div class="row">
                <div class="col-md-3 text-center">
                    <form id="formularioPresupuesto" class="card-body">
                        <div class="form-group d-flex align-items-center m-0">
                            <label class="form-label m-2 ">Presupuesto Mensual</label>
                            <input name="presupuesto" id="inputPresupuesto" class="form-control m-2" />
                            <button class="btn" id="btnPresupuesto" onclick="CalcularPresupuesto(event)">Calcular</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row pt-2">
                <div class="col-md-3">
                    <div class="card bg-dark border-white">
                        <div class="card-header text-center border-white">
                            <h4 class="">Agregar Cuenta</h4>
                        </div>
                        <form id="formularioCuenta" class="card-body">
                            <div class="form-group">
                                <label class="form-label ">Ingreso/Gasto</label>
                                <br />
                                <select name="ingresoGasto" id="ingresoGasto" class="form-control"></select>
                            </div>
                            <div class="form-group">
                                <label class="form-label ">Tipo</label>
                                <br />
                                <select name="tipoCuenta" id="tipoCuenta" class="form-control"></select>
                            </div>
                            <div class="form-group">
                                <label class="form-label ">Nombre</label>
                                <input type="text" id="nombre" placeholder="Ingrese un nombre" class="form-control mt-3" />
                            </div>
                            <div class="form-group mt-3">
                                <label class="form-label ">Importe</label>
                                <input type="text" id="importe" placeholder="Ingrese un importe" class="form-control mt-3" />
                            </div>
                            <div class="form-group mt-3">
                                <label class="form-label ">Vencimiento</label>
                                <input type="date" id="vencimiento" class="form-control mt-3" value="" />
                            </div>
                            <div class="d-grid gap-2 mt-3 text-right">
                                <button type="submit" value="Agregar" class="btn" id="btnAgregarCuenta" onclick="AgregarCuenta(event)">Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-header text-center bg-dark">
                            <h4>Lista de Cuentas</h4>
                        </div>
                        <div class="card text-center">
                            <table class="table table-hover table-sm m-0 table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Pagado</th>
                                        <th scope="col">+ / -</th>
                                        <th scope="col">Tipo</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Importe</th>
                                        <th scope="col">Vencimiento</th>
                                        <th scope="col">Borrar</th>
                                    </tr>
                                </thead>
                                <tbody id="listaCuentas">
                                </tbody>
                                <tfoot id="footCuentas" class="alert-success">
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager