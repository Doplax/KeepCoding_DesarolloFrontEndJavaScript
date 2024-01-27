import { productDetailController } from "../../components/productDetail/productDetailController.js";
import { LayoutController } from "../../components/layout/LayoutController.js";
import { notificationsController } from "../../components/notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  const $notifications = document.querySelector("#notifications");
  const $productDetail = document.querySelector("#productDetail");

  $productDetail.addEventListener("productDeleted", (event) => {
    notificationsController.showNotification(
      $notifications,
      event.detail.message,
      event.detail.type
    );
  });


  productDetailController.init($productDetail, productId);

  LayoutController.render();
});
