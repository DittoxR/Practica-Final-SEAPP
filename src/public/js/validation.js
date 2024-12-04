document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const username = form.username.value.trim();
        const password = form.password.value;

        if (username.length < 3 || password.length < 6) {
            event.preventDefault();
            alert('El usuario debe tener al menos 3 caracteres y la contraseña 6 caracteres.');
        }
    });
});
