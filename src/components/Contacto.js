import React from 'react';

const Contacto = () => {
    return (
        <>
            <div class="row pt-5 align-items-center justify-content-center">
                <div class="col-md-6 logo-cover rotated"></div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-8">
                            <h3>Ayudanos a mejorar</h3>
                            <form class="mt-2" id="form-contacto">
                                <form class="form-contact">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" class="form-control" id="email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="message">Mensaje</label>
                                        <textarea class="form-control" id="message"></textarea>
                                    </div>
                                    <button type="submit" class="btn w-100 text-white mt-2" id="btn-enviar-comentario" onclick="EnviarComentario(event)">Enviar</button>
                                </form>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div class="modal fade" id="modalComentario" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content bg-dark rounded">
                        <div class="modal-header border-0">
                            <h5 class="modal-title" id="exampleModalLongTitle">Gracias por ayudarnos a mejorar.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacto