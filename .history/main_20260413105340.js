const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function getScroollbarWidth(){
        if (getScroollbarWidth.value){
            console.log("gia tri da da ghi nhan sau lan dau tien");
            return getScroollbarWidth.value;
        }
    const div = document.createElement('div');
    Object.assign(div.style,{
        overflow: "scroll" ,
        position: "absolute",
        top: "-9999px"
    });

    document.body.appendChild(div);

    const scrollbarWidth = div.offsetWidth - div.clientWidth ;
    getScroollbarWidth.value = scrollbarWidth;
    document.body.removeChild(div);
    return scrollbarWidth;
}
function Modal(options = {}){
    this.templateId = options.templateId ;
    this.unblockModal = options.unblockModal !== false ;
    this.backdropDOM = null;
    
    this.open = () =>{
        const template = $(`#${this.templateId}`);
        if (!template){
            console.error("loi");
            return;
        }
        const content = template.content.cloneNode(true);
        
         this.backdropDOM = document.createElement('div');
        this.backdropDOM.className = 'modal-backdrop';

        const container = document.createElement('div');
        container.className = 'modal-container';

        const closeBtn = document.createElement('button');
        closeBtn.className= 'modal-close';
        closeBtn.innerHTML = "&times";

        const modalContent = document.createElement('div');
        modalContent.className= "modal-content";
        modalContent.append(content) ;
        container.append(closeBtn,modalContent);
        this.backdropDOM.append(container);
        document.body.append(this.backdropDOM);
        

        setTimeout(() => {
            this.backdropDOM.classList.add('show');
        }, 100);

        closeBtn.onclick = () =>this.close();

        if (this.unblockModal){
            this.backdropDOM.onclick =(e) =>{
            if (e.target === this.backdropDOM){
                this.close();
            }
           
        }
        }

        document.addEventListener('keydown' , (e) => {
            if ( e.key === "Escape"){
                this.close();
            }
        });
        // Disable scroolling 
        document.body.classList.add('not-scrooling');
        document.body.style.paddingRight= getScroollbarWidth() + "px";
        return backdrop;
      
    };
    this.close= () =>{
        this.backdropDOM.classList.remove('show');
           this.backdropDOM.ontransitionend = () =>{
            this.backdropDOM.remove();
           }
        //Enable scrooling
        document.body.classList.remove('not-scrooling');
        document.body.style.paddingRight = "" ;
    }
    
}

const modal1 = new Modal({
        templateId : "modal-1",
    });

$('#open-modal-1').onclick = () =>{
    modal1.open();
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
        top: "-9999px"
    });

    document.body.appendChild(div);

    const scrollbarWidth = div.offsetWidth - div.clientWidth ;

    document.body.removeChild(div);
    return scrollbarWidth;
}

