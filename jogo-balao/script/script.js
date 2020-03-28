
var timerId = NULL;

function selecaoNivel(){
	var nivelJogo = document.getElementById('selecaoNivel').value;
	window.location.href = 'game.html?'+nivelJogo;
}

function iniciaJogo(){
	var url = window.location.search;
	var nivelJogo = url.replace("?","");
	var tempoSegundos;

//Seleção dos segundos
	if (nivelJogo == 1){
		tempoSegundos = 120;
	}

	if (nivelJogo == 2){
		tempoSegundos = 60;
	}

	if (nivelJogo == 3){
		tempoSegundos = 30;
	}

	document.getElementById('cronometro-numero').innerHTML = tempoSegundos; // Escrevendo na tela os segundos

	var quantidade = 89;
	criarBaloes(quantidade); //Cria os balões na tela

	cronometro(tempoSegundos + 1);//Contagem regresiva do cronometro
}

function criarBaloes(quantidade){
//Laço para criação de balões
	for (var i = 0; i <= quantidade ; i++){
		var balao = document.createElement("img");
		balao.src = "../images/pequeno.png";
		balao.style.margin = '10px';
		balao.id = "b" + i;
		balao.onclick = function(){ estourar(this); };

		document.getElementById('cenario').appendChild(balao);
	}
}

function cronometro(segundos){
	segundos = segundos - 1;
	document.getElementById('cronometro-numero').innerHTML = segundos;
	timerId = setTimeout("cronometro("+segundos+")", 1000);

	//Parando cronometro
	if (segundos == 0){
		clearTimeout(timerId);
		gamerOver();
	}
}

//Estourando os balões
function estourar(balao){
	var id_balao = balao.id;

	document.getElementById(id_balao).src = '../images/pequeno_estourado.png';

	pontuacao();
}

//Atualizando na tabela
function pontuacao(){
	var balaoNormal = document.getElementById('balao').innerHTML;
	var balaoEstourado = document.getElementById('estourado').innerHTML;
	balaoNormal = parseInt(balaoNormal);
	balaoEstourado = parseInt(balaoEstourado);

	balaoNormal = balaoNormal -1;
	balaoEstourado = balaoEstourado +1;

	document.getElementById('balao').innerHTML = balaoNormal;
	document.getElementById('estourado').innerHTML = balaoEstourado;

	gamerOverWin(balaoNormal);
}


function gamerOverLoser(){
	alert("Não foi dessa vez");
}

function gamerOverWin(balao){
	if (balao == 0){
		alert("Parabéns, você venceu");
		clearTimeout(timerId);
	}
}
