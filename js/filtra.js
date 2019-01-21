
var campoFiltro = document.querySelector("#filtrar-jogo");

campoFiltro.addEventListener("input", function(){
	console.log(this.value);
	var jogos= document.querySelectorAll(".caixinha");
	if(this.value.length>0){
		for(var i=0; i<jogos.length; i++){
			var jogo = jogos[i];
			var figNomeJogo= jogo.querySelector(".nome-jogo");
			var nome= figNomeJogo.textContent;
			var expressao = new RegExp(this.value,"i")

			if (!expressao.test(nome)){
				jogo.classList.add("invisivel");
			}else{
				jogo.classList.remove("invisivel");

			}


		}


	}else{
		for(var i=0; i<jogos.length; i++){
			var caixinha = jogos[i];
			caixinha.classList.remove("invisivel");
		}
	}
	
});