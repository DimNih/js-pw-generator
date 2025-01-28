document.getElementById('generate').addEventListener('click', function () {

    //get
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    const length = document.getElementById('length').value;
    const password = generatePassword(uppercase, lowercase, numbers, symbols, length);
    const passwordField = document.getElementById('password');
    passwordField.value = password;
  
    // glow effect
    passwordField.classList.add('glow');
    setTimeout(() => passwordField.classList.remove('glow'), 1500); // Remove after 1.5 seconds
  });


  // Cek
  document.getElementById('copy').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
  });
  

  //hash
  function generatePassword(uppercase, lowercase, numbers, symbols, length) {
    let charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }