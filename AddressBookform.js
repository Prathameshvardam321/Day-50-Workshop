window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        let names = document.querySelector('#name');
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
const save = (event)=>{
  try{
      setContactObject();
    }catch(e){
      console.log(e);
      return;
    }
  }
    const setContactObject = () => {
        let contactObject = new Contact();
        contactObject._fullName = getInputValueById('#name');
        contactObject._address = getInputValueById('#address');
        contactObject._city = getInputValueById('#city');
        contactObject._state = getInputValueById('#state');
        contactObject._zip = getInputValueById('#zip');
        contactObject._phone = getInputValueById('#phone');
        alert(JSON.stringify(contactObject))
      }
    
      const getInputValueById = (id) => {
        let value = document.querySelector(id).value;
        return value;
      }
      const createAddressBook = () =>{
        let addBook = new Contact();
      addBook._fullName = getInputValueById('#name');
      addBook._address = getInputValueById('#address');
      addBook._city = getInputValueById('#city');
      addBook._state = getInputValueById('#state');
      addBook._zip = getInputValueById('#zip');
      addBook._phone = getInputValueById('#phone');
      addBook._email = getInputValueById('#email');
      alert(addBook.toString())
  
    }