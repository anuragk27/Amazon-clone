const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 5;

function changeSlide(){
    for(let i = 0 ; i < imgs.length ; i++){
        imgs[i].style.display = 'none'; 
    }
    imgs[n].style.display = 'block';
}
changeSlide();


prev_btn.addEventListener('click', (e)=>{
    console.log('inside prev btn')
    if(n > 0){
        n--;
        console.log('n is greater')
    }else{
        n = imgs.length - 1;
        console.log('n is not greater')
    }
    changeSlide();
})


next_btn.addEventListener('click', (e)=>{
    console.log('clicked5')
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

// console.log('clicked6')

// Scrollbar Action

// const scrollController = document.querySelectorAll('.products');
// for(const item of scrollController){
//     item.addEventListener('wheel',(evt)=>{
//         evt.preventDefault();
//         item.scrollLeft += evt.deltaY;
//     })
// }