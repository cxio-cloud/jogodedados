var player1 = 10;
var nickname1;
var player2 = 10;
var nickname2;

function Registrar() {
    document.getElementById('cadastro').style.display = 'block';
}
function cadastrar() {
    if (document.getElementById('play1').checked == true) {
        nickname1 = document.getElementById('nick1').value;
        document.getElementById('jog1').value = nickname1;
        document.getElementById('jog1').innerHTML = nickname1;
    } else {
        nickname2 = document.getElementById('nick1').value;
        document.getElementById('jog2').value = nickname2;
        document.getElementById('jog2').innerHTML = nickname2;
        document.getElementById('cadastro').style.display = 'none';
    }
}
function reiniciar() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('jog1').innerHTML = 'Jogador 1';
    document.getElementById('jog1').value = 'Jogador 1';
    document.getElementById('jog2').innerHTML = 'Jogador 2';
    document.getElementById('jog2').value = 'Jogador 2';
    player1 = 10;
    document.getElementById('totalp').innerHTML = 10;
    player2 = 10;
    document.getElementById('totalp2').innerHTML = 10;
}
function jogar() {
    var numero = Math.floor(Math.random() * 6 + 1);
    var numero2 = Math.floor(Math.random() * 6 + 1);
    var nickone = document.getElementById('jog1').value;
    var nicktwo = document.getElementById('jog2').value;
    var total1 = document.getElementById('totalp').value;
    var total2 = document.getElementById('totalp').value;

    if (document.getElementById('jog1').value == undefined) {
        alert('Antes de iniciar, realize o cadastro.');
    } else {
        if (numero === 1) {
            document.getElementById("dado1").src = "imagem/dado1.png";
        } else if (numero === 2) {
            document.getElementById('dado1').src = "imagem/dado2.png";
        } else if (numero === 3) {
            document.getElementById('dado1').src = "imagem/dado3.png";
        } else if (numero === 4) {
            document.getElementById('dado1').src = "imagem/dado4.png";
        } else if (numero === 5) {
            document.getElementById('dado1').src = "imagem/dado5.png";
        } else if (numero === 6) {
            document.getElementById('dado1').src = "imagem/dado6.png";
        }
        if (numero2 === 1) {
            document.getElementById('dado2').src = "imagem/dado1.png";
        } else if (numero2 === 2) {
            document.getElementById('dado2').src = "imagem/dado2.png";
        } else if (numero2 === 3) {
            document.getElementById('dado2').src = "imagem/dado3.png";
        } else if (numero2 === 4) {
            document.getElementById('dado2').src = "imagem/dado4.png";
        } else if (numero2 === 5) {
            document.getElementById('dado2').src = "imagem/dado5.png";
        } else if (numero2 === 6) {
            document.getElementById('dado2').src = "imagem/dado6.png";
        }
        if (numero > numero2) {
            document.getElementById('result').innerHTML = nickone + ' ganhou';
            document.getElementById('totalp').innerHTML = player2--;
        } else if (numero2 > numero) {
            document.getElementById('result').innerHTML = nicktwo + ' ganhou';
            document.getElementById('totalp2').innerHTML = player1--;
        } else {
            document.getElementById('result').innerHTML = 'Empate';
        }
    }
    if (player2 == -1) {
        alert(nickname1 + ' venceu!');
        location.reload;
    } else if (player1 == -1) {
        alert(nickname2 + ' venceu!');
        location.reload;
    }
}
