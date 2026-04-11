const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


function Modal(){
    this.openModal = (options = {} ) =>{
        const {templateId} = options ;
        const template = $(`#${templateId}`);
        if (!template){
            console.error("loi");
            return;
        }
        const content = template.content.cloneNode();
      
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';

        const container = document.createElement('div');
        container.className = 'modal-container';

        const closeBtn = document.createElement('button');
        closeBtn.className= 'modal-close';
        closeBtn.innerHTML = "&times";

        const modalContent = document.createElement('div');
        modalContent.className= "modal-content";
        modalContent.append(content) ;
        container.append(closeBtn,modalContent);
        backdrop.append(container);
        document.body.append(backdrop);
        

        setTimeout(() => {
            backdrop.classList.add('show');
        }, 100);

        closeBtn.onclick = () =>this.closeModal(backdrop);
        backdrop.onclick =(e) =>{
            if (e.target === backdrop){
                this.closeModal(backdrop);
            }
        }

        document.addEventListener('keydown' , (e) => {
            if ( e.key === "Escape"){
                this.closeModal(backdrop);
            }
        });
      
    };
    this.closeModal = (element) =>{
        element.classList.remove('show');
           element.ontransitionend = () =>{
            element.remove();
           }
    }
}

const modal = new Modal();

$('#open-modal-1').onclick = () =>{
    modal.openModal({
        templateId : 
    });
}


