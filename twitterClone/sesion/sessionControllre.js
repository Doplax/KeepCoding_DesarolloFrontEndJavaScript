import { buildSession } from "./sesionView.js";

export const sessionController = (nav) => {

    // consultamos si el usuario ha hecho login
    const token = localStorage.getItem('token')

    // En caso negativo, incluimos los links a login y signup
    if (!token) {
        nav.innerHTML = buildSession();
    }
}