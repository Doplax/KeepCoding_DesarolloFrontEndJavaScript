import { LayoutController } from "../../components/layout/LayoutController.js";
import { loginController } from "../../components/login/loginController.js";
import { notificationsController } from "../../components/notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {

  const $notifications = document.querySelector("#notifications");
  const $signInForm = document.querySelector("#signInForm");

  //Notifications
  $signInForm.addEventListener("LoginUser", (event) => {
    notificationsController.showNotification(
      $notifications,
      event.detail.message,
      event.detail.type
    );
  });

  $signInForm.addEventListener("LoginUser", (event) => {
    notificationsController.showNotification(
      $notifications,
      event.detail.message,
      event.detail.type
    );
  });

  LayoutController.render();
  loginController.init($signInForm);
});
