const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

$('.btn').on('click', () => {

    if (verificaEmail() && verificaSenha()) {
        alert('Email enviado')
    } else {
        alert('Verifique o email e a senha novamente')
    }
    
})

function verificaEmail() {
    if (regexEmail.test($('#email').val())) {
        return true
    } else {
        return false
    }
}

function verificaSenha() { 
    if($('#senha').val() && $('#csenha').val() !== '') {
            if ($('#senha').val() === $('#csenha').val()) {
                return true
        } else {
            return false
        }
    } else 
        return false
 }