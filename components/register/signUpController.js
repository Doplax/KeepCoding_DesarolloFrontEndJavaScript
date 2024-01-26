import { dispatchEvent } from "../../utils/dispatchEvent.js";
import { signUpModel } from "./signUpModel.js";

export const signUpController = {
  init($signUpForm) {
    $signUpForm.addEventListener("submit", (event) =>
      signUpController.validateForm(event, $signUpForm)
    );
  },

  async validateForm(event, $signUpForm) {
    event.preventDefault();

    // Extraer datos del formulario
    const username = $signUpForm.querySelector("#username");
    const password = $signUpForm.querySelector("#password");
    const passwordConfirmation = $signUpForm.querySelector(
      "#passwordConfirmation"
    );

    try {
      if (
        signUpController.isFormValid(username, password, passwordConfirmation)
      ) {
        await signUpModel.createUser(username.value, password.value);

        dispatchEvent(
          "userCreated",
          {
            type: "success",
            message: "User created successfully",
          },
          $signUpForm
        );
        await new Promise((resolve) => setTimeout(resolve, 2000));
        window.location = "/pages/login";
      }
    } catch (error) {
      dispatchEvent(
        "userCreated",
        {
          type: "error",
          message: error,
        },
        $signUpForm
      );
    }
  },

  isFormValid(username, password, passwordConfirmation) {
    const usernameValid = signUpController.isusernameValid(username);
    const passwordValid = signUpController.isPasswordValid(
      password,
      passwordConfirmation
    );

    return usernameValid && passwordValid;
  },

  isusernameValid(username) {
    const usernameRegExp = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (!usernameRegExp.test(username.value)) {
      throw "El username no es correcto";
    }
    return true;
  },

  isPasswordValid(password, passwordConfirmation) {
    if (password.value !== passwordConfirmation.value) {
      throw "Las contraseñas no son iguales";
    }
    return true;
  },
};
