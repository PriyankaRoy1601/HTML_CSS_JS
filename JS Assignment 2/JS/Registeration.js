//document addEventListener
document.addEventListener('DOMContentLoaded', function () {

    //content
    const form = document.getElementById('frmRegistration');
    const nameInput = document.getElementById('txtFullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('numPhone');
    const passInput = document.getElementById('pass');
    const CfmPassInput = document.getElementById('Confirmpass');

    //Error message
    const nameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passError = document.getElementById('passError');
    const cfmPassError = document.getElementById('ConfirmPassError');

    //for password checking
    CfmPassInput.addEventListener('input', confirmPassWord);
    //function for password confirmation
    function confirmPassWord() {
        var pwd = passInput.value;
        var cfmPwd = CfmPassInput.value;
        if (pwd != cfmPwd) {
            cfmPassError.textContent = 'Both password should be same';
        }
        else {
            cfmPassError.textContent = '';
        }
    };

    //phone number checking for 10 digit

    phoneInput.addEventListener('input', checkPhone);
    function checkPhone() {
        const phInput = phoneInput.value.toString(); // 
        const length = phInput.length;
        console.log(length);
        if (length != 10) {
            phoneError.textContent = 'Number should be 10 digit';


        }
        else {
            phoneError.textContent = '';
        }
    }
    //for checking password contain atleat 4 characters
    passInput.addEventListener('input', function () {
        const phInput = passInput.value.toString(); // 
        const length = phInput.length;
        if (length <= 4) {
            passError.textContent = 'Atleast 4 character required';
        }
        else {
            passError.textContent = '';
        }
    });




    //form addEventListener

    form.addEventListener('submit', function (event) {
        //prevent form submission
        event.preventDefault();
        let valid=true;
        //validation fullname
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Name is required';
            valid=false;

        }
        else {
            nameError.textContent = '';
            valid=true;
        }
        // email validation 

        if (!emailInput.value.trim()) {
            emailError.textContent = "Email is required";
            valid=false;
        } else {
            emailError.textContent = "";
            valid=true;
        }

        //validate phone
        if (!phoneInput.value.trim()) {
            phoneError.textContent = 'Phone is required';
            valid=false;

        }
        else {
            phoneError.textContent = '';
            valid=true;

        }

        // validate password
        if (!passInput.value.trim()) {
            passError.textContent = 'Enter password';
            valid=false;

        }
        else {
            passError.textContent = '';
            valid=true;
        }


        // validate confrim password
        if (!CfmPassInput.value.trim()) {
            cfmPassError.textContent = 'Enter password confirmation';
            valid=false;

        }
        else {
            cfmPassError.textContent = '';
            valid=true;
        }

        if(valid){
            submitButton.disabled=false;
            form.submit();
        }






    });












});