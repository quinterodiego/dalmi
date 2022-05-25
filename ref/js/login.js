var nombre = "";
var apellido = "";
var email = "";
var password = "";
var avatar = "";

CargarUsuarios();

const CrearUsuario = (event) => {
    nombre = $('#nombre').val();
    email = $('#email').val();
    password = $('#password').val();
    avatar = `https://ui-avatars.com/api/?name=${nombre}&background=267486&color=fff&size=40`

    if(nombre == '' || email ==  '' || password == '') {
        return;
    }

    // Muestro modal de ingreso
    $('#crear-usuario button').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');

    usuarioActual = new Usuario(nombre, email, password, avatar);

    GuardarUsuario(usuarioActual);

    sessionStorage.setItem("UsuarioActual", JSON.stringify(usuarioActual));

    setInterval(() => {
        window.location = './views/manager.html';
    }, 1000);

    event.preventDefault();
};

const ValidarNombre = () => {
    const inputNombre = $('#nombre').val();
    const emailNombre = listaUsuarios.find((e) => e.nombre === inputNombre)
    if(emailNombre != null) {
        $('#nombreExiste').removeClass('d-none');
    }else{
        $('#nombreExiste').addClass('d-none');
    }
}

const ValidarEmail = () => {
    const inputEmail = $('#email').val();
    const emailExiste = listaUsuarios.find((e) => e.email === inputEmail)
    if(emailExiste != null) {
        $('#emailExiste').removeClass('d-none');
    }else{
        $('#emailExiste').addClass('d-none');
    }
}


const IrAIniciarSesion = (event) => {
        $('#crear-usuario').hide('slow');
        $('#form-iniciar-sesion').show('slow');
        event.preventDefault();
}

const IrACrearCuenta = (event) => {
    $('#form-iniciar-sesion').hide('slow');
    $('#crear-usuario').show('slow');
    event.preventDefault();
}

const ValidarUsuario = (e) => {
    let email = $('#email-login').val();
    let password = $('#password-login').val();

    if(listaUsuarios.some((e) => e.email === email && e.password === password)){
        $('#login-error').addClass('d-none');
        usuarioActual = listaUsuarios.find(e => e.email === email);

        // Muestro modal ingresando
        $('#form-iniciar-sesion button').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        sessionStorage.setItem("UsuarioActual", JSON.stringify(usuarioActual));
        setInterval(() => {
            window.location = './views/manager.html';
        }, 1000);
    }else {
        $('#login-error').removeClass('d-none');
    }

    e.preventDefault();
}