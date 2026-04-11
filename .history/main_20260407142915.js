const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('#modal');

$('#open-modal').onclick = function(){
    modal.classList.add('show');
}

console.log($('modal-close'));