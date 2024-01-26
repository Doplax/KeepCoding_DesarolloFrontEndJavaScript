import { sessionController } from "../../utils/sessionController.js";
import { createProductController } from "../../components/createProduct/createProductController.js";
import { notificationsController } from "../../components/notifications/notificationsController.js";
import { headerController } from "../../components/header/headerController.js";

document.addEventListener("DOMContentLoaded", () => {
    headerController.init();

  const $notifications = document.querySelector("#notifications");
  const $createProductForm = document.querySelector("#createProductForm");

  //Notifications
  $createProductForm.addEventListener("productCreated", (event) => {
    notificationsController.showNotification(
      $notifications,
      event.detail.message,
      event.detail.type
    );
  });

  $createProductForm.addEventListener("productCreated", (event) => {
    notificationsController.showNotification(
      $notifications,
      event.detail.message,
      event.detail.type
    );
  });

  createProductController.init($createProductForm);
});
