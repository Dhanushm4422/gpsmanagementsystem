var ContactForm = /** @class */ (function () {
    function ContactForm() {
        this.contactForm = document.getElementById('contactForm');
        this.successMessage = document.getElementById('successMessage');
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', this.handleSubmit.bind(this));
        }
    }
    ContactForm.prototype.handleSubmit = function (event) {
        event.preventDefault();
        if (!this.contactForm)
            return;
        var formData = new FormData(this.contactForm);
        var name = formData.get('name');
        var email = formData.get('email');
        var message = formData.get('message');
        var alertMessage = "Name: ".concat(name, "\nEmail: ").concat(email, "\nMessage: ").concat(message);
        alert(alertMessage);
        if (this.successMessage) {
            this.successMessage.style.display = 'block';
        }
        this.contactForm.reset();
    };
    return ContactForm;
}());
document.addEventListener('DOMContentLoaded', function () {
    new ContactForm();
});
