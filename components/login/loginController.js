import { dispatchEvent } from "../../utils/dispatchEvent.js";
import { loginModel } from "./loginModel.js";

export const loginController = {
  init($loginForm) {
    $loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      loginController.submitLogin($loginForm);
    });
  },

  getLoginData($loginForm) {
    const formData = new FormData($loginForm);
    const username = formData.get("username");
    const password = formData.get("password");

    return {
      username: username,
      password: password,
    };
  },

  async submitLogin($loginForm) {
    let { username, password } = await loginController.getLoginData($loginForm);
    try {
      const jwt = await loginModel.loginUser(username, password);
      localStorage.setItem("token", jwt);
      dispatchEvent(
        "LoginUser",
        { message: "Login successfully", type: "success" },
        $loginForm
      );
    } catch (error) {
      dispatchEvent(
        "LoginUser",
        { message: "Login unsuccessfully", type: "error" },
        $loginForm
      );
      console.log(error);
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.location = "/";
    }
  },
};
