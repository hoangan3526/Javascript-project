const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


$('#open-modal').onclick = function(){
    $('#modal').classList.add('show');
}