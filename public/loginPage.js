"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const userForm = new UserForm();

  userForm.loginFormCallback = async (data) => {
    try {
      await ApiConnector.login(data, handleLoginResponse);
    } catch (err) {
      showError(err.message);
    }
  };

  userForm.registerFormCallback = async (data) => {
    try {
      await ApiConnector.register(data, handleRegisterResponse);
    } catch (err) {
      showError(err.message);
    }
  };
});

async function handleLoginResponse(response) {
  if (response.success) {
    window.location.reload();
  } else {
    showError(response.error);
  }
}

async function handleRegisterResponse(response) {
  if (response.success) {
    window.location.reload();
  } else {
    showError(response.error);
  }
}

function showError(message) {
  alert(message);
}
