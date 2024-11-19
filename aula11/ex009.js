function verificar(){
var pais = document.querySelector('input#vrpais').value;
var res = document.querySelector('div#res')
if (pais == 'Brasil') {
   res.innerHTML = 'Voce é Brasileiro!'
} else {
    res.innerHTML = 'Voce é estrangeiro!'
}
}
