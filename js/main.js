let frutas = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];
let frutas2 = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

let todo = frutas.concat(frutas2);

let root = document.querySelector("#root");

//FUNCION AGREGAR AL DOM

function agregar_al_DOM(){

    todo.forEach(function (elemento, indice){

        let contenedor = document.createElement("div");

    contenedor.innerHTML = 
    '<div class="fruta">' + 
    elemento + 
    '</div>';


    root.appendChild(contenedor); 
        
        });

    //ford


}

agregar_al_DOM();



//FUNCION ACTIVAR LAS LETRAS

let datos_del_don = document.querySelectorAll(".fruta");

function activar(){
    this.classList.add("activo");

    

}

datos_del_don.forEach(function(elemento, indice){
    
    elemento.addEventListener('click', activar )
});