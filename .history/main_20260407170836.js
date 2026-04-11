const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('#modal');


// $('#modal-close').onclick = function(){
//     modal.classList.remove('show');
// }
// modal.onclick = function(e){
//     if (e.target === modal){

//         modal.classList.remove('show');
//     }
// }
document.addEventListener('keydown' , function(e){
    if ( e.key === 'Escape'){
        modal.classList.remove('show');
    }
})

const btnList = Array.from($$('.btn'));

btnList.forEach(btn => btn.onclick = function(){
    modal.classList.add('show');
});

const modalList = Array.from($$('.modal-backdrop'));

modalList.forEach(modal => modal.onclick = function(e){
    console.log(e.target);
    if (e.target === $('.modal-close')){
         modal.classList.remove('show');
         return;
    }
    if ( e.target === $('.modal')){
         modal.classList.remove('show');
    }
}

)