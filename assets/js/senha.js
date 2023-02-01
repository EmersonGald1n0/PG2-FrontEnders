$('.btn').on('click', () => {
    if($('#senha').val() && $('#csenha').val() && $('#email').val() !== '') {
        if ($('#senha').val() === $('#csenha').val()) {
            alert('E-mail enviado')
        } else {
            alert('As senhas não correspondem')
        }
    } else 
        alert('Campos não preenchido')
        console.log($('#email').val());
})

