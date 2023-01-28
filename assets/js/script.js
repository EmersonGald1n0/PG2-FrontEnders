$(".cep").keyup(function() {
    var valor = $(this).val().length;
    if (valor == '8'){
        let cep = $('.cep').val()
        $.ajax({
            type: "GET",
            url: `https://viacep.com.br/ws/${cep}/json/`,
            dataType: "json",
            success: function (response) {
              $(".bairro").val(response.bairro);

              $('.complemento').css({'display' : 'block'})
            },
            error: function (response) {
              console.log(response);
            },
          }); 
    }
});