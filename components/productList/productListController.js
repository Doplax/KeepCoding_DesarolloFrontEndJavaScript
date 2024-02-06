import { productCardController } from "../productCard/productCardController.js";
import { productListView } from "./productListView.js";
import { productListModel } from "./productListModel.js";

import { dispatchEvent } from "../../utils/dispatchEvent.js";

export const productListController = {
  async init($productList) {
    $productList.innerHTML = "";
    let productsHTML = "";
    let productListHTML = "";
    let products = [];

    try {
      dispatchEvent(
        "startLoadingProducts",
        { message: "Loading products", type: "loading" },
        $productList
      );
      products = await productListModel.getProducts();
      
      //Await 2 seconds to see the loader
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      dispatchEvent(
        "productsNotFound",
        { message: "Error loading products", type: "error" },
        $productList
      );
    } finally {
      dispatchEvent("finishLoadingProducts", null, $productList);
    }

    if (products.length !== 0) {
      const reversedProductsArray = [...products].reverse();

      reversedProductsArray.forEach((product) => {
        productsHTML += productCardController.init(product);
      });
      productListHTML = productListView.render(productsHTML);

      dispatchEvent(
        "productsLoaded",
        { message: "Products loaded correctly", type: "success" },
        $productList
      );
    }

    $productList.innerHTML = productListHTML;
  },
};
