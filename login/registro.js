function registrar() {
    if (!$('#user').val() || !$('#email').val() || !$('#password').val() || !$('#password2').val()) {
        mostrarErro("Sprawdź, czy wszystkie pola zostały wypełnione poprawnie.");
        return;
    }

    $('#btn-registrar').LoadingOverlay('show');
    alt.emit("registrarUsuario", $('#user').val(), $('#email').val(), $('#password').val(), $('#password2').val());
}

function voltarLogin() {
    alt.emit("voltarLogin");
}

function mostrarErro(erro) {
    $('#btn-registrar').LoadingOverlay('hide');
    $.alert(erro);
}

if('alt' in window)
    alt.on('mostrarErro', mostrarErro);