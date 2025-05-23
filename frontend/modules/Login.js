export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init () {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('inout[name="password"]');
        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            alert('Email inválido!');
            error = true;
        }

        if (passwordInput.value.length < 4 || passwordInput.value.length > 50) {
            alert('Password precisa ter entre 4 e 50 caracteres!');
            error = true;
        }

        console.log(emailInput.value, passwordInput.value);
    }
}