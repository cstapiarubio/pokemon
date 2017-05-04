
function Pokemon(nombre, color, nivelDeAmistad, vida,poderDeAtaque){
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

var pikachu=new Pokemon("Pikachu", "amarillo",0,100,10)
var charmander=new Pokemon("Charmander", "rojo",0,20,80)
var squartle=new Pokemon("Squartle", "azul",0,80,50)
var charmander=new Pokemon("Bulbasaur", "verde",0,70,180)

function pelear(pokemon1, pokemon2){
	
}

pikachu.atacar(charmander)
console.log(charmander.vida)