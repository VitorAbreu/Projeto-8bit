var videos = document.querySelectorAll(".caixinha");

var jsonx = [
	{
		titulo: "Super Mario 3d World",
		url: "https://www.youtube.com/embed/QWPI-WoNLng",
		img: "../img/spm3dw.jpg"
	},
	{
		titulo: "World of Warcraft",
		url: "https://www.youtube.com/embed/tPVKsC7le48",
		img: "../img/wow.jpg"
	},
	{
		titulo: "Overwatch",
		url: "https://www.youtube.com/embed/Ux0tfIPnRyc",
		img: "../img/ow.jpg"
	},
	{
		titulo: "League of Legends",
		url: "https://www.youtube.com/embed/4yEygDgEp1E",
		img: "../img/lol.jpg"
	},
	{
		titulo: "Player Unknow Battlegrounds",
		url: "https://www.youtube.com/embed/2LOsXfBb3hs",
		img: "../img/pubg.jpg"
	},
	{
		titulo: "Dota 2",
		url: "https://www.youtube.com/embed/nXoxnYSDsBM",
		img: "../img/dota2.jpg"
	},
	{
		titulo: "Fortnite",
		url: "https://www.youtube.com/embed/g6-8GKIzCrw",
		img: "../img/fortnite.jpg"
	},
	{
		titulo: "Counter Strike: GO",
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

		document.location.href = "video.html?titulo="+jsonx[indexJson].titulo+"&url="+jsonx[indexJson].url;
		//document.getElementById("pageVideo").style.display = "block";
		//document.getElementById("pageHome").style.display = "none";

		//document.getElementById("videoPrincipal").src = getParameterByName("url");
		//document.getElementById("tituloPrincipal").textContent = getParameterByName("titulo");

		//<div id="pageVideo" w3-include-html="video.html" style="display:none;"></div>

	})
}

videos.forEach(minhaFuncao);



// function includeHTML() {
//   var z, i, elmnt, file, xhttp;
//   /* Loop through a collection of all HTML elements: */
//   z = document.getElementsByTagName("*");
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     /*search for elements with a certain atrribute:*/
//     file = elmnt.getAttribute("w3-include-html");
//     if (file) {
//       /* Make an HTTP request using the attribute value as the file name: */
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4) {
//           if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//           if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//           /* Remove the attribute, and call this function once more: */
//           elmnt.removeAttribute("w3-include-html");
//           includeHTML();
//         }
//       } 
//       xhttp.open("GET", file, true);
//       xhttp.send();
//       /* Exit the function: */
//       return;
//     }
//   }
//}