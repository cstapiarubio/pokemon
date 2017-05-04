
function Pokemon(nombre, color, nivelDeAmistad, vida, poderDeAtaque){
	this.nombre =nombre;
	this.color=color;
	this.nivelDeAmistad = nivelDeAmistad;
	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;
	this.mostrarPokemon = function(){
		return ("Hola, soy: "+this.nombre+ " y soy de color "+ this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad =this.nivelDeAmistad + valor
	}
	this.atacar = function(pokemon){
		pokemon.vida =pokemon.vida -this.poderDeAtaque
	}
}

/*var pikachu=new Pokemon("Pikachu", "amarillo",0,100,10);
var charmander=new Pokemon("Charmander", "rojo",0,20,80);
var squartle=new Pokemon("Squartle", "azul",0,80,50);
var charmander=new Pokemon("Bulbasaur", "verde",0,70,180);*/


function pelear(){
	var poke1 = document.getElementById("pokemon1").value;
	var poke2 = document.getElementById("pokemon2").value;

	var peleador1 =new Pokemon(poke1, "color pokemon",0,100,10);
	var peleador2 =new Pokemon(poke2,"color pokemon",0,20,80);

	if (peleador1.nombre==peleador2.nombre){
		alert("Error, no puedes elegir el mismo pokemon")
	}else{ 

		peleador1.atacar(peleador2);
		var espacioPelea= document.getElementById("espacio");
		var mensaje = (peleador1.nombre + " atacó a " + peleador2.nombre + " y solo le queda " + peleador2.vida + " puntos de vida");
		espacioPelea.innerHTML =mensaje;
	}
//alert (peleador1.nombre + " atacó a " + peleador2.nombre + " y a " + peleador2.nombre + " le queda "+ peleador2.vida + " de vida restante")
}

//pikachu.atacar(charmander)
//console.log(charmander.vida)