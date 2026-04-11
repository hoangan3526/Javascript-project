const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$$('.btn').forEach((btn) => {
    btn.onclick = function(){
    console.log(this.dataset.modal);
        
    }
})