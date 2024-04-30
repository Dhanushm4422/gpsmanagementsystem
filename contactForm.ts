class ContactForm {
    private contactForm: HTMLFormElement | null;
    private successMessage: HTMLElement | null;

    constructor() {
        this.contactForm = document.getElementById('contactForm') as HTMLFormElement;
        this.successMessage = document.getElementById('successMessage');

        if (this.contactForm) {
            this.contactForm.addEventListener('submit', this.handleSubmit.bind(this));
        }
    }

    private handleSubmit(event: Event) {
        event.preventDefault();

        if (!this.contactForm) return;

        const formData = new FormData(this.contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        alert(alertMessage);

        if (this.successMessage) {
            this.successMessage.style.display = 'block';
        }

        this.contactForm.reset();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});
