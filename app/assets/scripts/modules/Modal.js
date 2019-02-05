import $ from 'jquery'

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");

        this.closeModal.events();
    }

    events() {
        //  clciking the open modal button
        this.openModalButton.click(this.openModal.bind(this));
        //  clciking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        //  pushs any key
        $().keyup(this.keyPressHandler.bind(this));

    }

    keyPressHandler(e) {
        if (e.keyCoode == 27) {
            this.closeModal.closeModal();
        }
    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;   /* make sure return false to no link to top page */
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;