function alterar() {
    if (!$('#email').val()) {
        mostrarErro("Sprawdź, czy wszystkie pola zostały wypełnione poprawnie.");
        return;
    }

    $('#btn-alterar').LoadingOverlay('show');
    alt.emit("alterar", $('#email').val());
}

function voltar() {
    alt.emit("voltar");
}

function mostrarErro(erro) {
    $('#btn-alterar').LoadingOverlay('hide');
    $.alert(erro);
}

if('alt' in window)
    alt.on('mostrarErro', mostrarErro);