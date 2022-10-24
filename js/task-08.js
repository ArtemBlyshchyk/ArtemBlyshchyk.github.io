// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit. 
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися. 
// 3. Якщо у формі є незаповненні поля, виводь alert з попередженням про те що всі поля повинні бути заповненні. 
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'ям поля буде ім'ям властивості, а значенням поля -значення властивості. Для доступу до елементів форми використовуй властивість elements. 
// 5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.  

const formHref = document.querySelector(".login-form");

// console.log(formHref);

formHref.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    const {elements: 
        {email, password},} = event.currentTarget;
    if (email.value === "" || password.value === "") {
       return alert ("Please, fill in all empty fields!")
    } else {
        const formUserInfo = {
            email: email.value,
            password: password.value,
        }
        console.log(formUserInfo);
    }
    event.currentTarget.reset();
}


// const formLog = document.querySelector('.login-form');
// formLog.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event) {
//     event.preventDefault();
//     const {
//         elements: { email, password },
//     } = event.currentTarget;
//     if (email.value === '' || password.value === '') {
//         alert('Please, fill this form correctly')
//     } else {
//         const formData = {
//             email: email.value,
//             password: password.value,
//         };
//         console.log(formData);
//     }
//     event.currentTarget.reset();
// }
