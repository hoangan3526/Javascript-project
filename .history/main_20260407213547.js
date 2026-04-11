const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$$('.btn').forEach((btn) => {
    btn.onclick = function(){
    const modal = $(this.dataset.modal);
    modal.classList.add('show');        
    }
}
);
$$('.modal-close').forEach (btn => {
    btn.onclick = function(e){
        console.log(e.target);
    }
})
