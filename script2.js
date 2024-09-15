document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');

  nameInput.addEventListener('input', () => {
      if (nameInput.value.trim() === '') {
          nameError.style.display = 'block';
      } else {
          nameError.style.display = 'none';
      }
  });

  emailInput.addEventListener('input', () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
          emailError.style.display = 'block';
      } else {
          emailError.style.display = 'none';
      }
  });

  passwordInput.addEventListener('input', () => {
      if (passwordInput.value.length < 8) {
          passwordError.style.display = 'block';
      } else {
          passwordError.style.display = 'none';
      }
  });
});
