var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true /* para pintar a bola do passador*/

setInterval(() => {
    proximaImg()        /*tempo em que vai pssar as imagens*/
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1        /* para que volte para a preimera bolinha do passador*/
    }

    document.getElementById('radio'+cont).checked = true
}