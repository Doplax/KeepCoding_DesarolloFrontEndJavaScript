import { notificationsController } from "../../components/notifications/notificationsController.js";
import { signUpController } from "../../components/register/signUpController.js";
import { LayoutController } from "../../components/layout/LayoutController.js";


document.addEventListener("DOMContentLoaded", () => {
  LayoutController.render();

  const $notifications = document.querySelector("#notifications");
  const $signUpForm = document.querySelector("#signUpForm");

  //Notifications
  $signUpForm.addEventListener("userCreated", (event) => {
    notificationsController.showNotification(
      $notifications,
      event.detail.message,
      event.detail.type
    );
  });


  signUpController.init($signUpForm);
});
