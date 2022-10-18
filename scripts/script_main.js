

(function slide(){
    const img1= document.getElementById('img_slide1');
    const img2 = document.getElementById('img_slide2');
    const img3 = document.getElementById('img_slide3');
    const img4 = document.getElementById('img_slide4');
    const img5 = document.getElementById('img_slide5');
    const img6 = document.getElementById('img_slide6');
    
    const slide= [img1,img2,img3,img4,img5,img6];
    
    for(let num=0; num < slide.length; num++ ){
        console.log(slide[num]);
        let num2 = num;
        slide[num].style.display = 'block';
        slide[num2].style.display = 'none';
        
        if(slide[num] == (slide.length)){
            num=0;
        }
        
        
    }
    
    
})();
