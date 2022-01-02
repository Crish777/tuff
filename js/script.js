let burger, closeIcon, menu;

window.addEventListener("DOMContentLoaded", function(){
    
    createVars();
    setListeners();
    createGalleries();
})

function createVars() {
    burger = document.querySelector('.burger');
    closeIcon = document.querySelector('.close');
    menu = document.querySelector('.menu');
}

function setListeners() {

    document.body.addEventListener("click", function(e){
        if(e.target.classList.contains('burger')){
            menu.classList.add("open");
        }
        if(e.target.classList.contains('close')){
            menu.classList.remove("open");
        }
    })

}

function createGalleries(){
    new Glide('.gallery')
}
