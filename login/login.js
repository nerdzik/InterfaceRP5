$(function () {
    $('#password').keyup(function (event) {
        event.preventDefault();
        if (event.keyCode === 13)
            $('#form-login').submit();
    });

    $('#form-login').submit(function (event) {
        event.preventDefault();
        entrar();
    });

    $('#btn-registrar').click(function () {
        registrar();
    });

    $('#btn-esqueci').click(function () {
        esqueciMinhaSenha();
    });

    if ('alt' in window) {
        alt.on('showHTML', showHTML);
        alt.on('mostrarErro', mostrarErro);
    }
});

function entrar() {
    var usuario = $('#user').val().trim();
    var senha = $('#password').val().trim();

    if (!usuario || !senha) {
        mostrarErro('Upewnij się, że wszystkie pola są wypełnione poprawnie.');
        return;
    }

    $('#btn-entrar').LoadingOverlay('show');
    alt.emit('entrarUsuario', usuario, senha);
}

function registrar() {
    alt.emit('registrarUsuario');
}

function esqueciMinhaSenha() {
    alt.emit('esqueciMinhaSenha');
}

function showHTML(usuario) {
    $('#user').val(usuario);

    if (usuario !== '') {
        $('#password').focus();
        $('#btn-registrar').hide();
        $('#user').prop('readonly', true);
    }
}

function mostrarErro(erro) {
    $('#btn-entrar').LoadingOverlay('hide');
    const MSG_ERRO = 'Upewnij się, że wszystkie pola są wypełnione poprawnie.';
    const MSG_ALERT = 'alert';
    $.alert(erro || MSG_ERRO, MSG_ALERT);
    $('#password').val('');
}

    document.getElementById("myButton").addEventListener("click", function() {
        alert("W celu rejestracji zachęcamy do utworzenia konta na naszym forum a następnie zalogowanie się nim tutaj. :) #Beta");
  });
