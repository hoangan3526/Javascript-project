const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


function Modal(){
    this.openModal = (options = {} ) =>{
        const {templateId , unblockModal = true} = options ;
        const template = $(`#${templateId}`);
        if (!template){
            console.error("loi");
            return;
        }
        const content = template.content.cloneNode(true);
        
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
        if (unblockModal){
            backdrop.onclick =(e) =>{
            if (e.target === backdrop){
                this.closeModal(backdrop);
            }
           
        }
        }

        document.addEventListener('keydown' , (e) => {
            if ( e.key === "Escape"){
                this.closeModal(backdrop);
            }
        });
        // Disable scroolling 
        document.body.classList.add('not-scrooling');
        document.body.style.paddingRight(getScroollbarWidth() + "px");
        return backdrop;
      
    };
    this.closeModal = (element) =>{
        element.classList.remove('show');
           element.ontransitionend = () =>{
            element.remove();
           }

        //Enable scrooling
        document.body.classList.remove('not-scrooling');
        document.body.style.paddingRight("");
    }
    
}

const modal = new Modal();

$('#open-modal-1').onclick = () =>{

    modal.openModal({
        templateId : "modal-1",
    });
}
$('#open-modal-2').onclick = () =>{
    const modalElement = modal.openModal({
        templateId : "modal-2",
        unblockModal : false,
    });
    const form = modalElement.querySelector("#login-form");
    if (form){
        form.onsubmit = e =>{
            e.preventDefault();

            const formData = {
                email: $('#email').value.trim(),
                password: $('#password').value.trim()
            }
            console.log(formData);
        }
    }
    
}
function getScroollbarWidth(){
    const div = document.createElement('div');
    Object.assign(div.style,{
        overflow: "scroll" ,
        position: "absolute",
        top: "9999px"
    });

    document.body.appendChild(div);

    const scrollbarWidth = div.offsetWidth - div.clientWidth ;

    document.body.removeChild(div);
    return scrollbarWidth;
}

console.log(getScroollbarWidth());
