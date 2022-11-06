
/* Implementação da fixação do menu no topo após o movimento de rolar a página para baixo*/
const nav = document.getElementsByTagName("Nav")[0];
const topNav = nav.offsetTop;
const menuNav = document.getElementById("menuSupense");

window.onscroll = function(){
    fixarMenuNoTopo()
}

function fixarMenuNoTopo(){
    if(window.pageYOffset >= topNav){
        nav.classList.add("FixoNoTopo");
        menuNav.style.top='50px';
    }else {
        nav.classList.remove("FixoNoTopo");
        menuNav.style.top='150px';
    }
}



/* ação do menu responsivo */

function abreFechaMenu(){
    const checkbox = document.getElementById('menuResp');

    
    if(window.matchMedia('(max-width: 1024px').matches) {
        checkbox.checked = false;
    }
        

}

/* ação do submenu */
const submenu = document.getElementById('menu-escondido');
const setaMenu = document.getElementById('seta');
let estado = 0;
submenu.style.display="none";

function abreMenu_escondido() {
    
    if(estado == 0){
        submenu.style.display="flex";
        setaMenu.style.transform='rotate(135deg)';
        estado = 1;
    } else {
        submenu.style.display="none";
        setaMenu.style.transform='rotate(45deg)';
        estado = 0;
    }
}


/* Implementação da movimentação do slide principal */
(function sliderMovel() {
    let countImg = 0;
    const containerExt = document.getElementsByClassName('slider')[0];
    const arrayFoto = ['34_cavalgada_do_mar', 'Busca_da_chama_crioula', 'cerimonia_de_premiacao_em_cachoeirinha(2)','Cerimonia_de_premiacao_em_cachoeirinha','ENART_em_santa_cruz_do_sul','Invernada mirim', 'invernada-todos', 'pre invernada veterana'];
    containerExt.style.backgroundImage=`url('assets/img/img_slide/invernada-todos.jpg')`

    setInterval(function () {
        countImg++
        let mudaFoto = 0;
        if(countImg == 8) {
            countImg = 0;
        }
        mudaFoto = arrayFoto[countImg]
        containerExt.style.backgroundImage=`url('assets/img/img_slide/${mudaFoto}.jpg')`;
        
    },5000);
   console.log('teste imagem');
})();




