const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

`<div id = "modal-1" class="modal-backdrop">
            <div class="modal-container">
                <button  class="modal-close">&times;</button>
                <div class="modal-content">
                    <p>
                        Modal-1
                    </p>
                </div>
            </div>
        </div>`
function Modal(){
    this.openModal = (content) =>{
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';

        const container = document.createElement('');
        container.className = 'modal-container';

        const close = document.createElement('button');
        close.className= 'modal-close';
        close.innerHTML = "&times";

        const modalContent = document.createElement('div');
        modalContent.className= "modal-content";
        modalContent.innerHTML = content;
        container.append(close,content);
        backdrop.append(container);
        document.body.append(backdrop);
        
    }
}

const modal = new modal();

modal.openModal()
