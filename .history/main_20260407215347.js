const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let currentmodal = null;
$$('[data-modal]').forEach((btn) => {
    btn.onclick = function(){
    const modal = $(this.dataset.modal);
    if (modal){
        modal.classList.add('show');    
        currentmodal = modal;    
    }
    else{
        alert(`${this.dataset.modal} not Exits`);
    }
    }
}
);
$$('.modal-close').forEach (btn => {
    btn.onclick = function(e){
        const modal = this.closest(".modal-backdrop");
        if (modal){
            modal.classList.remove('show');
            currentmodal = null;
        }
    }
});
$$('.modal-backdrop').forEach( modal =>{
    modal.onclick = function(e){
        if(e.target === modal){
            this.classList.remove('show');
            currentmodal=null
        }
    }
});
document.addEventListener('keydown' , function(e){
    if (e.key === "Escape" && currentmodal){
        currentmodal.classList.remove('show');
    }
})

