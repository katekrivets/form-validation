window.onload = function () {
  //name

  var name_validity = document.getElementById("name-validity");

  //email
  var email = document.getElementById("email");
  var email_validity = document.getElementById("email-validity");
  //phone number
  var phone = document.getElementById("tel");
  var phone_validity = document.getElementById("tel-validity");
  //passwords
  var password = document.getElementById("password");
  var confirm_password = document.getElementById("confirm_password");
  var password_validity = document.getElementById("password-validity");
  var confirm_password_validity = document.getElementById("confirm-password-validity");

  // checking name validity
  function validateName() {
    var name = document.getElementById("name");

    if (!name.checkValidity()) {
      // name.setCustomValidity(' ');
      name.style = "border: 2px solid #a11f1f";

      if (/\d/.test(name.value)) {
        name_validity.innerHTML = "Это поле должно содержать только буквы.";
      } else if (name.value == "") {
        name_validity.innerHTML = "Заполните пожалуйста это поле.";
      } else if ((/[a-z]/i).test(name.value)) {
        name_validity.innerHTML = "Это поле должно содержать только русские буквы.";
      } else {
        name_validity.innerHTML = "Фио должно быть в формате: 'Фамилия Имя Отчество'";
      }
      return false;
    } else {
      name_validity.innerHTML = " ";
      name.style = "border: 2px solid #58a832";
      return true;
    }
  }
  // checking email validity 
  function validateEmail() {
    if (!email.checkValidity()) {
      email_validity.innerHTML = "Неверно введен email.";
      email.style = "border: 2px solid #a11f1f";
      return false;
    } else {
      email_validity.innerHTML = " ";
      email.style = "border: 2px solid #58a832";
      return true;
    }
  }

  //checking telephone validity 
  function validatePhone() {
    if (!phone.checkValidity()) {
      phone_validity.innerHTML = "Неправильный номер. Телефонный номер должен быть в формате +79991234567 или 89991234567.";
      phone.style = "border: 2px solid #a11f1f";
      return false;
    } else {
      phone_validity.innerHTML = " ";
      phone.style = "border: 2px solid #58a832";
      return true;
    }
  }
  // checking passwords match
  function validatePasswordMatch() {
    if (password.value != confirm_password.value) {
      confirm_password_validity.innerHTML = "Пароли не совпадают!";
      confirm_password_validity.style = "color: #a11f1f";
      return false;
    } else {
      confirm_password_validity.style = "color: #58a832;"
      confirm_password_validity.innerHTML = "Пароли совпадают";
      password.style = "border: 2px solid #58a832";
      return true;
    }
  }
  // checking passwords validity
  function validatePasswords() {
    if (!password.checkValidity()) {
      password_validity.innerHTML = "Пароль должен содержать не менее 6 символов. Содержать одну цифру, одну букву в верхнем регистре и одну в нижнем.";
      password.style = "border: 2px solid #a11f1f";
      return false;
    } else {
      password_validity.innerHTML = "";
      password.style = "border: 2px solid #58a832";
      validatePasswordMatch();
      var result = validatePasswordMatch();
      return result;
    }
  }

  document.querySelector("form")
    .addEventListener("invalid", function (event) {
      event.preventDefault();
    }, true);

  document.querySelector('input[type="submit"]').addEventListener("click", function () {
      var nameIsValid = validateName();
      var nameIsValid = validateEmail();
      var phoneIsValid = validatePhone();
      var passIsValid = validatePasswords();
    if (nameIsValid && nameIsValid && phoneIsValid && passIsValid) {
      document.getElementById("result").innerHTML = "In progress...";
      document.getElementById("result").style = "color: grey";
      setTimeout(function () {
        document.getElementById("result").innerHTML = "Sucsess";
        document.getElementById("result").style = "color: #58a832";
      }, 3000);
      document.querySelector('input[type="submit"]').setAttribute("disabled", "");
      setTimeout(function () {
        document.querySelector('#forma').submit()
      }, 3000);
    } else {
      document.querySelector('input[type="submit"]').setAttribute("disabled", "");
      document.getElementById("result").innerHTML = "In progress...";
      document.getElementById("result").style = "color: grey";
      setTimeout(function () {
        document.querySelector('input[type="submit"]').removeAttribute("disabled");
        document.getElementById("result").innerHTML = "Error";
        document.getElementById("result").style = "color: #a11f1f";
      }, 3000);
    }
  });
  //check
}
