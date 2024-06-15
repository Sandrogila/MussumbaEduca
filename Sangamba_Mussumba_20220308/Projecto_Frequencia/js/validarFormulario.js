function validarCadastro() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var isValid = true;

    // Resetar mensagens de erro
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validar nome
    if (username.trim() === '') {
        usernameError.textContent = '* Nome é obrigatório';
        isValid = false;
    }

    // Validar email
    if (email.trim() === '') {
        emailError.textContent = '* Email é obrigatório';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = '* Email inválido';
        isValid = false;
    }

    // Validar senha
    if (password.trim() === '') {
        passwordError.textContent = '* Senha é obrigatória';
        isValid = false;
    }

    return isValid;
}

// Função auxiliar para validar email
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validarFormulario() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
    var isValid = true;

    // Resetar mensagens de erro
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Validar o nome de usuário
    if (username.trim() === '') {
        usernameError.textContent = '* Nome de usuário é obrigatório';
        isValid = false;
    }

    // Validar a senha
    if (password.trim() === '') {
        passwordError.textContent = '* Senha é obrigatória';
        isValid = false;
    }

    return isValid;
}