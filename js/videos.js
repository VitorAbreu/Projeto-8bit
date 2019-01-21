// function recebeParametro(indice){
// 	var titulo = document.querySelector(".titulo-atual");
// 	titulo.textContent = json[indexJson].titulo;
// 	console.log(json[indexJson].titulo);
// }

function carregarVideoDesejado(){

	document.getElementById("videoPrincipal").src = getParameterByName("url");
	document.getElementById("tituloPrincipal").textContent = getParameterByName("titulo");
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var input = document.querySelector(".campo-comentario");
var botao = document.querySelector(".enviar");
botao.addEventListener("click",function(){
    if (input.value.length>0) {
	   alert("Comentario enviado");
	   input.value = "";
    }
});

var like = document.querySelector("#like");
var dislike = document.querySelector("#dislike");

like.addEventListener("click",function(){
    like.classList.add("opiniao");
    dislike.classList.remove("opiniao");
})

dislike.addEventListener("click",function(){
    like.classList.remove("opiniao");
    dislike.classList.add("opiniao");
})

var jsonz = [
    {
        titulo: "SM3DW - O INÍCIO GAMEPLAY",
        url: "https://www.youtube.com/embed/QWPI-WoNLng",
        img: "../img/spm3dw.jpg"
    },
    {
        titulo: "WOW - VALE A PENA JOGAR?",
        url: "https://www.youtube.com/embed/tPVKsC7le48",
        img: "../img/wow.jpg"
    },
    {
        titulo: "OVERWATCH - BEST PRO MOMENTS",
        url: "https://www.youtube.com/embed/Ux0tfIPnRyc",
        img: "../img/ow.jpg"
    },
    {
        titulo: "LOL - O PRIMEIRO VIDEO DO ANO",
        url: "https://www.youtube.com/embed/4yEygDgEp1E",
        img: "../img/lol.jpg"
        
    },
    {
        titulo: "PUBG - JOGANDO COM A NOVA ARMA G36C",
        url: "https://www.youtube.com/embed/2LOsXfBb3hs",
        img: "../img/pubg.jpg"
    },
    {
        titulo: "DOTA 2 - MID é só SUCESSO! - Kunkka MID",
        url: "https://www.youtube.com/embed/nXoxnYSDsBM",
        img: "../img/dota2.jpg"
    },
    {
        titulo: "FORTNITE - O FIM DAS CONSTRUÇÕES ",
        url: "https://www.youtube.com/embed/g6-8GKIzCrw",
        img: "../img/fortnite.jpg"
    },
    {
        titulo: "CSGO - COMO FICAR BOM DEMAIS",
        url: "https://www.youtube.com/embed/ClfZPPG987s",
        img: "../img/csgo.jpg"
    }
];

var indexJson;
function minhaFuncao(video,json){
    video.addEventListener("click",function passaDados (){
        var indexJson = json;
        // recebeParametro(indexJson);
        console.log(indexJson);

        document.location.href = "video.html?titulo="+jsonzEmbaralhado[indexJson].titulo+"&url="+jsonzEmbaralhado[indexJson].url;
        //document.getElementById("pageVideo").style.display = "block";
        //document.getElementById("pageHome").style.display = "none";

        //document.getElementById("videoPrincipal").src = getParameterByName("url");
        //document.getElementById("tituloPrincipal").textContent = getParameterByName("titulo");

        //<div id="pageVideo" w3-include-html="video.html" style="display:none;"></div>

    })
}

// videoLateral.forEach(minhaFuncao);
var imagem = document.querySelectorAll(".img-video");

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var jsonzEmbaralhado = shuffle(jsonz);


function criatemplates(jsonzEmbaralhado){
    var ul = document.querySelector("#listaLateral");
    var videoLi = document.createElement("li");
    videoLi.setAttribute("id", "templateVideoLateral");
    videoLi.classList.add("video-lateral");
    var ancor = document.createElement("a");
    videoLi.appendChild(ancor);
    var img = document.createElement("img");
    img.setAttribute("id", "imagemTemplateVideoLateral");
    img.classList.add("img-video");
    img.src = jsonzEmbaralhado.img;
    ancor.appendChild(img);
    var p = document.createElement("p");
    p.setAttribute("id", "tituloTemplateVideoLateral");
    p.classList.add("titulo-video");
    p.textContent = jsonzEmbaralhado.titulo;
    ancor.appendChild(p);
    ul.appendChild(videoLi);
}

jsonzEmbaralhado.forEach(criatemplates);
var videoLateral = document.querySelectorAll(".video-lateral");
videoLateral.forEach(minhaFuncao);
