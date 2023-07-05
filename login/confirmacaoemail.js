
function showHTML(usuario, email) {
    $('#titulo').html(`Potwierdź rejestrację ${usuario}`);
    $('#email').val(email);
}

function reenviarEmail() {
    if (!$('#email').val()) {
        mostrarErro("Sprawdź, czy e-mail został poprawnie wypełniony.");
        return;
    }

    $('#btn-reenviaremail').LoadingOverlay('show');
    alt.emit('enviarEmail', $('#email').val());
}

function validarToken() {
    if (!$('#token').val()) {
        mostrarErro("Upewnij się, że token potwierdzający jest wypełniony poprawnie.");
        return;
    }

    $('#btn-validartoken').LoadingOverlay('show');
    alt.emit('validarToken', $('#token').val());
}

function mostrarErro(erro) {
    $('#btn-reenviaremail').LoadingOverlay('hide');
    $('#btn-validartoken').LoadingOverlay('hide');
    $('#token').val('');
    $.alert(erro);
}

function mostrarSucesso(sucesso) {
    $('#btn-reenviaremail').LoadingOverlay('hide');
    $('#btn-validartoken').LoadingOverlay('hide');
    $('#token').val('');
    $.alert(sucesso);
}

if('alt' in window) {
    alt.on('showHTML', showHTML);
    alt.on('mostrarErro', mostrarErro);
    alt.on('mostrarSucesso', mostrarSucesso);
}