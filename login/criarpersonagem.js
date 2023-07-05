$(document).ready(function () {
    $('#dataNascimento').mask('00/00/0000');
});

function showHTML(nome, sobrenome, sexo, dataNascimento, historia, motivoRejeicao, staffer) {
    if (motivoRejeicao !== '') {
        $('#nome').val(nome);
        $('#sobrenome').val(sobrenome);
        $('#sexo').val(sexo).change();
        $('#dataNascimento').val(dataNascimento);
        $('#historia').val(historia);
        mostrarErro(`Twoja postać została odrzucona przez ${staffer}. Powód: ${motivoRejeicao}`);
    }
}

function enviarAplicacao() {
    if (!$('#nome').val() || !$('#sobrenome').val() || !$('#sexo').val() || !$('#dataNascimento').val()|| !$('#historia').val()) {
        mostrarErro("Sprawdź, czy wszystkie pola zostały wypełnione poprawnie.");
        return;
    }

    $('#btn-enviaraplicacao').LoadingOverlay('show');
    alt.emit("criarPersonagem", $('#nome').val(), $('#sobrenome').val(), $('#sexo').val(), $('#dataNascimento').val(), $('#historia').val());
}

function voltar() {
    alt.emit('voltar');
}

function mostrarErro(erro) {
    $('#btn-enviaraplicacao').LoadingOverlay('hide');
    $.alert(erro);
}

if('alt' in window) {
    alt.on('showHTML', showHTML);
    alt.on('mostrarErro', mostrarErro);
}