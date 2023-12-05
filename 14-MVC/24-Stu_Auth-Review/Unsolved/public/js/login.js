const loginFormHandler = async (event) => {
     // Prevents default behaiviour
     event.preventDefault();

     // Using query selectors create pointers to sections in html page
     const email = document.querySelector('#email-login').value.trim();
     const password = document.querySelector('#password-login').value.trim();

     if (email && password) {
          // It retrieves password
          const response = await fetch('/api/users/login', {
               method: 'POST',
               body: JSON.stringify({ email, password }),
               headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
               document.location.replace('/');
          } else {
               alert('Failed to log in');
          }
     }
};

document
     .querySelector('.login-form')
     .addEventListener('submit', loginFormHandler);
