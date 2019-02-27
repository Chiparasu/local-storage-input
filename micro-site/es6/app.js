
//variables
let listaComentario = document.querySelector(".comentarios")
//eventos 
//aqui se guardan los eventos que vayan a ocurrir 
eventListener ()

function eventListener(){
   document.querySelector(".form").addEventListener("submit",agregarComentario)
   listaComentario.addEventListener("click",erase)
}
//funciones
//aqui se crean las funciones que vayan a hacer efecto
function agregarComentario(e){
e.preventDefault()
//se crean constantes y se selecciona del dom las clases que se les asigne
const comentario = document.querySelector(".ingresar").value
const borrarComentario = document.createElement("a")
//se crea la clase borrar y se le asigna un elemento (la X)
borrarComentario.classList="borrar"
borrarComentario.innerText="X"
//se crea la lista
const lista= document.createElement("li")
lista.innerText=comentario
//el appendchild esta agregandole la accion a la X
lista.appendChild(borrarComentario)
listaComentario.appendChild(lista)

}
function erase(e){
e.preventDefault()
//aqui se agrega una condision que indica que si la clase es exactamente igual
//a borrar entonces elimina el contenido
if(e.target.className==="borrar"){

  console.log(e.target.parentElement.remove())  
}
else{}
}