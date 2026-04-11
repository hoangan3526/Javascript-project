const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


function Modal(){
    this.openModal = (content) =>{
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';

        const container = document.createElement('div');
        container.className = 'modal-container';

        const closeBtn = document.createElement('button');
        close.className= 'modal-close';
        close.innerHTML = "&times";

        const modalContent = document.createElement('div');
        modalContent.className= "modal-content";
        modalContent.innerHTML = content;
        container.append(closeBtn,modalContent);
        backdrop.append(container);
        document.body.append(backdrop);
        

        setTimeout(() => {
            backdrop.classList.add('show');
        }, 2000);
    }
}

const modal = new Modal();

modal.openModal(`<h1> Hello Hoang an </h1>`)
