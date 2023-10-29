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
        const username = formData.get('username');
        const password = formData.get('password');

        return {
            username: username,
            password: password
        }

    },

    async submitLogin($loginForm) {
        let { username, password } = await loginController.getLoginData($loginForm);
        try {
            dispatchEvent("startLoginUser", null, $loginForm);
            const jwt = await loginModel.loginUser(username, password);
            alert("login OK");
            localStorage.setItem("token", jwt);
            window.location = "/";

        } catch (error) {
            alert(error);
            
        } finally {
            dispatchEvent("finishLoginUser", null, $loginForm);
        }
    },
};
