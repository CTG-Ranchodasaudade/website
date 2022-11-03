/* Animação dos submenus*/
const MenuDet = document.getElementById('menu-escondido');
let aberto = 0;
function abreMenu (){
    
    if(aberto == 0){
        MenuDet.style.display="flex";
        aberto=1;
        console.log("aberto")
    }else if(aberto == 1){
        MenuDet.style.display="none";
        aberto=0;
        console.log("fechado")
    }
}