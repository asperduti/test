$('#contactForm').submit(function (event) {
    event.preventDefault();

    grecaptcha.ready(function () {
        grecaptcha.execute('6Lce1C0aAAAAACegc3Z_tKF4NfuTG4464tNI7Wo6', { action: 'contacto' }).then(function (token) {
            $('#contactForm').prepend('<input type="hidden" name="token" value="' + token + '">');
            $('#contactForm').prepend('<input type="hidden" name="action" value="contacto">');
            $('#contactForm').unbind('submit').submit();
        });;
    });
});