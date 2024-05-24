const registForm = document.getElementById ('regist_form');
const messageDiv = document.getElementById ('message');

registForm.addEventListener =('submit', (event) =>{
    event.preventDefault();
    
    const name = document.getElementById ('name').value;
    const login = document.getElementById ('login').value;
    const phone = document.getElementById ('phone').value;
    const password = document.getElementById ('password').value;

    //сохранение данных

    localStorage.setItem ('name', name);
    localStorage.setItem ('login', login);
    localStorage.setItem ('phone', phone);
    localStorage.setItem ('password', password);

    messageDiv.textContent = "Вы зарегестрировались!"
});