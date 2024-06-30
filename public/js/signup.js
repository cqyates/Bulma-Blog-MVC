const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document
    .querySelector('#username-input-signup')
    .value.trim();
  const passwordEl = document
    .querySelector('#password-input-signup')
    .value.trim();
    const emailEl = document
    .querySelector('#email-input-signup')
    .value.trim();

  if (passwordEl.length >= 8 && usernameEl && emailEl) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl,
        email: emailEl,
        password: passwordEl,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard/my-posts');
    } else {
      alert('Failed to sign up');
    }
  } else {
    alert(
      'Please include both a username and password, and make sure your password is at least 8 characters long'
    );
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
