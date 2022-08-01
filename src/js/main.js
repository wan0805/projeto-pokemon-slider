const cartoes = document.querySelectorAll('.cartao');
const setaAvancar = document.querySelector('#setaAvancar');
const setaVoltar = document.querySelector('#setaVoltar');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
	const cartaoSelecionado = document.querySelector('.selecionado');
	cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCarta(indiceCartao){
	cartoes[cartaoAtual].classList.add('selecionado');
}

function proximoCartao(){

	if (cartaoAtual === cartoes.length -1) {
	esconderCartaoSelecionado();
	cartaoAtual= 0;
	mostrarCarta(cartaoAtual)
	}
	else{
	cartaoAtual++;
	mostrarCarta(cartaoAtual)
	esconderCartaoSelecionado();
}
}
function voltarCartao(){
	if(cartaoAtual === 0){
	esconderCartaoSelecionado();
	cartaoAtual = cartoes.length-1;
	mostrarCarta(cartaoAtual)
	}
	else{
	const cartaoSelecionado = document.querySelector('.selecionado');
	cartaoSelecionado.classList.remove('selecionado');
	cartaoAtual--;
	mostrarCarta(cartaoAtual)
}
}
setaVoltar.addEventListener('click', voltarCartao);
setaAvancar.addEventListener('click', proximoCartao);
