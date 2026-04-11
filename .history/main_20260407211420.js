const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$$('.btn').forEach((btn) => {
    btn.onclick = function(){
    const modal = $(this.dataset.modal);
    modal.classList.add('show');        
    }
})