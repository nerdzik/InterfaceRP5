function showHTML(nome, data, x) {
    let players = JSON.parse(x);

    $('#titulo').html(`Kary administracyjne gracza ${nome} (${data})`);

    $('#tbody-punicoes').html('');
    if (players.length == 0) {
        $('#tbody-punicoes').html('<tr><td scope="row" colspan="6" class="text-center">Nie masz żadnych kar administracyjnych.</td></tr>');
    } else {
        players.forEach(function(p) {
            $('#tbody-punicoes').append(`<tr>
                <td>${p.Character}</td>
                <td>${p.Date}</td>
                <td>${p.Type}</td>
                <td>${p.Duration}</td>
                <td>${p.Staffer}</td>
                <td>${p.Reason}</td>
            </tr>`);
        });
    }
}

function voltar() {
    alt.emit('voltar');
}

if('alt' in window) 
    alt.on('showHTML', showHTML);