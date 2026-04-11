const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$$('[data-modal]').forEach((btn) => {
    btn.onclick = function(){
    const modal = $(this.dataset.modal);
    if (modal){

        modal.classList.add('show');        
    }
    else{
        alert(`${modal} not Exits`);
    }
    }
}
);
$$('.modal-close').forEach (btn => {
    btn.onclick = function(e){
        const modal = this.closest(".modal-backdrop");
        if (modal){
            modal.classList.remove('show');
        }
    }
})
