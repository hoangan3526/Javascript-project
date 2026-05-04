const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function Modal(options = {}) {
    const { templateId, classCSS= [], destroyOnClose = true, closeMethods =["button" , "overlay", "escape"] , onOpen , onClose  , footer = false} = options;

    this._footerbuttons =[];
        const template = $(`#${templateId}`);

        if (!template) {
            console.error(`#${templateId} does not exist!`);
            return;
        }
        this._allowEscapeClose = closeMethods.includes("escape");
        this._allowBackdropClose = closeMethods.includes("overlay");
        this._allowButtonClose = closeMethods.includes("button");
        this.addfooterButton = (title , classnames , callback) =>{

            this._footerbuttons.push({
                title,
                classnames,
                callback
            });
        };
    function getScrollbarWidth() {
        if (getScrollbarWidth.value) return getScrollbarWidth.value;

        const div = document.createElement("div");
        Object.assign(div.style, {
            overflow: "scroll",
            position: "absolute",
            top: "-9999px",
        });

        document.body.appendChild(div);
        const scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);

        getScrollbarWidth.value = scrollbarWidth;

        return scrollbarWidth;
    }
    this.build = () => {
        const content = template.content.cloneNode(true);

        // Create modal elements
        this._backdrop = document.createElement("div");
        this._backdrop.className = "modal-backdrop";

        const container = document.createElement("div");
        container.className = "modal-container";
        classCSS.forEach( classItem => {
            if ( typeof classItem === "string"){
                container.classList.add(classItem);
            }
        });
        if(typeof classCSS === 'string'){
            
        }
        if (this._allowButtonClose){
            const closeBtn = document.createElement("button");
            closeBtn.className = "modal-close";
            closeBtn.innerHTML = "&times;";
            container.appendChild(closeBtn);
            closeBtn.onclick = () => this.close();
        }

        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        // Append content and elements
        modalContent.append(content);
        container.append(modalContent);
        if ( footer){
           this._modalfooter = document.createElement("div");
            this._modalfooter.className = "modal-footer";
            if(this._footerContent){
                this._modalfooter.innerHTML = this._footerContent;
            }

            this._footerbuttons.forEach(btnConfig => {
               const btn = document.createElement("button");
               btn.innerHTML = this._footerbuttons.title ;

               // Gán class (Kiểm tra kỹ lỡ người dùng truyền chuỗi rỗng)
                if (btnConfig.cssClasses && btnConfig.cssClasses.trim() !== "") {
                    // Cắt chuỗi "class1 class2" thành mảng và add vào classList
                    const classArray = btnConfig.cssClasses.split(" ");
                    btn.classList.add(...classArray);
                }

                // Gán sự kiện click
                if (typeof btnConfig.callback === "function") {
                    btn.onclick = (e) => {
                        // Gọi callback của người dùng truyền vào
                        btnConfig.callback(e);
                    };
                }

                // Nhét cái nút vừa tạo vào trong thẻ Footer
                this._modalfooter.append(btn);
            });
            container.append(this._modalfooter);
        }
        this._backdrop.append(container);
        document.body.append(this._backdrop);

    }
    this.open= () => {
       if (!this._backdrop){
        this.build();
       }

        setTimeout(() => {
            this._backdrop.classList.add("show");
        }, 0);

        // Disable scrolling
        document.body.classList.add("no-scroll");
        document.body.style.paddingRight = getScrollbarWidth() + "px";

        // Attach event listeners
      

        if (this._allowBackdropClose) {
            this._backdrop.onclick = (e) => {
                if (e.target === this._backdrop) {
                    this.close();
                }
            };
        }
        if(this._allowEscapeClose){
            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    this.close();
                }
            });
        }
        
            this._onTransitonEnd(() => {

                if ( typeof onOpen === "function") onOpen();
            })
          

        return this._backdrop;
    };
    this.setFooterContent = html => {
        this._footerContent = html;
        if(this._modalfooter){
            this._footerContent.innerHTML = html; 
        }
    }
    this._onTransitonEnd = (callback) => {
        this._backdrop.ontransitionend = (e) => {
            if( e.propertyName !== "transform" ) return ;
        if ( typeof callback === "function") callback();
    }

    this.close = (destroy= destroyOnClose) => {
        this._backdrop.classList.remove("show");
        

        this._onTransitonEnd ( () => {
                if (this._backdrop && destroy){
                    this._backdrop.remove();
                    this._backdrop = null;
                    this._modalfooter = null;
                }
    
                // Enable scrolling
                document.body.classList.remove("no-scroll");
                document.body.style.paddingRight = "";
    
            if (typeof onClose === "function") onClose();
        });


    };
    this.destroy  = () => {
        this.close(true);
    }
}
}

const modal1 = new Modal(
    {
        templateId: "modal-1",
     
        destroyOnClose : false,
        onOpen : () => {
            console.log("Open Modal");
            
        },
        onClose :() => {
            console.log("Close Modal");
            
        }
    }
);

$("#open-modal-1").onclick = () => {
    const modalElement = modal1.open();
};

const modal2 = new Modal({
    templateId : "modal-2",
    classCSS : ["class1","class2"],
})
$("#open-modal-2").onclick = () => {
    const modalElement = modal2.open();
    const form = modalElement.querySelector("#login-form");
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const formData = {
                email: $("#email").value.trim(),
                password: $("#password").value.trim(),
            };

            console.log(formData);
        };
    }
}
const modal3 = new Modal({
    templateId: "modal-3",
    footer: true // Nhớ bật cái này lên
});

// Thêm nút Hủy
modal3.addfooterButton('Cancel', 'btn btn-secondary', (e) => {
    console.log("Bạn vừa bấm nút Hủy bỏ!");
    modal3.close(); // Thường nút Cancel sẽ gọi lệnh đóng Modal
});

// Thêm nút Đồng ý
modal3.addfooterButton('Agree', 'btn btn-primary', (e) => {
    console.log("Bạn vừa bấm Đồng Ý!");
    // Có thể thực hiện gửi API, lưu dữ liệu ở đây
});

// Cuối cùng mới mở Modal
modal3.open();