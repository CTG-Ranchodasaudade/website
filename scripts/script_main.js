
(function sliderMovel() {
    let countImg = 0;
    const containerExt = document.getElementById("slide");
    const arrayFoto = ['34_cavalgada_do_mar', 'Busca_da_chama_crioula', 'cerimonia_de_premiacao_em_cachoeirinha(2)','Cerimonia_de_premiacao_em_cachoeirinha','ENART_em_santa_cruz_do_sul','Image[4]'];
    containerExt.style.backgroundImage=`url('../img/img_slide/34_cavalgada_do_mar.jpeg')`;

    setInterval(function () {
        countImg++
        let mudaFoto = 0;
        if(countImg == 6) {
            countImg = 0;
        }
        mudaFoto = arrayFoto[countImg]
        containerExt.style.backgroundImage=`url('../img/img_slide/${mudaFoto}.jpeg')`;
        
    },5000);
   
})();

