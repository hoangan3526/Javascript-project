const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$$('[data-modal]').forEach((btn) => {
    btn.onclick = function(){
    const modal = $(this.dataset.modal);
    modal.classList.add('show');        
    }
}
);
$$('.modal-close').forEach (btn => {
    btn.onclick = function(e){
        const modal = this.closest(".modal-backdrop");
        if (modal){
            modal.classList.remove('show');
        }
        else{
            alert(`${modal} khong ton tai`);
            return;
        }
    }
})
