window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        let names = document.querySelector('#Name').value.split(" ");
        if (name.value.length == 0) {
            nameError.textContent = "";
            return;
        }
        try {
            (new Contact()).fullName = names[0];
           
            nameError.textContent = '';
        } catch (e) {
            nameError.textContent = e;
        }
    });

    const addressElement = document.querySelector('#address');
    const addressError = document.querySelector('#address-error');
    addressElement.addEventListener('input', function () {
        let address = document.querySelector('#address').value;
        if (addressElement.value.length == 0) {
            addressError.textContent = '';
            return;
        }
        try {
            (new Contact()).address = address;
            addressError.textContent = '';
            return;
        } catch (e) {
            addressError.textContent = e;
        }
    });


    const phoneElement = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phoneElement.addEventListener('input', function () {
        let phone = document.querySelector('#phone').value;

        try {
            (new Contact()).phone = phone;
            phoneError.textContent = '';
        } catch (e) {
            phoneError.textContent = e;
        }
    });
})