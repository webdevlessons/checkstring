$(function () {
    var LANG_CLASSES = {
        'латиница': 'success',
        'цифры': 'success',
        'кирилица': 'danger',
        'остальное': 'warning'
    };

    var kaptcha = $('#kaptcha');
    var button = $('#btn');

    var table = $('#result');
    var tableBody = table.children("tbody");

    button.click(function () {
        redrawTable();
    });

    kaptcha.on('input', function () {
        redrawTable();
    });

    function redrawTable() {
        var val = kaptcha.val();
        if (val.length === 0) {
            table.hide();
            return;
        }

        tableBody.html('');
        table.show();

        for (var i = 0; i < val.length; i++) {
            var symbol = val[i],
                code = symbol.charCodeAt(0),
                lang = getLang(code);

            tableBody.append('<tr class="' + LANG_CLASSES[lang] + '"><td>' + lang + '</td><td>' + symbol + '</td><td>' + '<span class="badge">ALT</span> + ' + code + '</td></tr>')
        }
    }

    function getLang(code) {
        if ((code >= 0x0041 && code <= 0x005A) || (code >= 0x0061 && code <= 0x007A))
            return 'латиница';

        if (code >= 0x0030 && code <= 0x0039)
            return "цифры";

        if (code >= 0x0400 && code <= 0x045F)
            return 'кирилица';

        return 'остальное';
    }
});