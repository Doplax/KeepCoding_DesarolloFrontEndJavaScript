import { sessionController } from "../../utils/sessionController.js";
import { createProductController } from "../../components/createProduct/createProductController.js";
import { notificationsController } from "../../components/notifications/notificationsController.js";
import { LayoutController } from "../../components/layout/LayoutController.js";

document.addEventListener("DOMContentLoaded", () => {
  sessionController.protectRoute()

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

  LayoutController.render();
  createProductController.init($createProductForm);
});
