const email = document.getElementById('exampleInputEmail1')
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

function verificarEmail() {

    const emailValue = email.value.trim()
    //   teste verifica o padrão no regex
    if (regexEmail.test(emailValue)) {
        alert('Email enviado com sucesso')
    } else {
        alert('Email inválido')
    }
}

$('#btn').click(() => {
    verificarEmail()
})