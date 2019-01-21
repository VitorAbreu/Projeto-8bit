var dinheiroGuardado = 1000.00;
var efetivarCompra = document.querySelector("#compra");
var saldoFinal;
var msgSaldo = document.querySelector(".mensagemSaldo");
msgSaldo.textContent = ("Seu saldo atual é: R$ " + dinheiroGuardado);
efetivarCompra.addEventListener("click",function(){
	



	var precoProduto= document.querySelector(".preco");
	var preco = precoProduto.textContent;

	if(dinheiroGuardado>=parseFloat(preco)) {
		saldoFinal = (dinheiroGuardado-parseFloat(preco));
		dinheiroGuardado=saldoFinal;
	}else{
		alert("impossivel efetuar a compra, saldo é insuficiente");
	}


	
	
	





	msgSaldo.textContent = ("Seu saldo atual é: R$ " + saldoFinal);
	

});

