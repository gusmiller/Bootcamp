const logout = async () => {
     // It calls the logout endpoint
     const response = await fetch('/api/users/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
     });

     if (response.ok) {
          // Redirects to root
          document.location.replace('/login');
     } else {
          alert('Failed to log out');
     }
};

document.querySelector('#logout').addEventListener('click', logout);
