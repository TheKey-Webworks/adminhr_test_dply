const loginFormData = {
  username: "",
  password: "",
  remember: false,
};

function loginFormOnChangeHandler(e, setter) {
  const targetName = e.target.name;
  const targetValue = e.target.value;
  setter((previousState) => ({
    ...previousState,
    [targetName]: targetName === "remember" ? e.target.checked : targetValue,
  }));
}

async function loginFormOnSubmitHandler(
  e,
  { username, password },
  setAuthStatus
) {
  console.log(username, password);
  e.preventDefault();
  if (username === "admin" && password === "admin123") {
    setAuthStatus(true);
    sessionStorage.setItem("auth", "true");
  } else {
    setAuthStatus(false);
    sessionStorage.setItem("auth", "false");
  }
}

export { loginFormData, loginFormOnChangeHandler, loginFormOnSubmitHandler };
