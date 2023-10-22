import { loginController } from "./loginControllre"

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login')
    loginController(loginForm)
})