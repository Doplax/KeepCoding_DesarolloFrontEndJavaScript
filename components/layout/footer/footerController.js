import { FooterModel } from './footerModel.js';
import { footerView } from './footerView.js';

export const footerController = {
  render() {
    const footerHTML = footerView.renderFooter({
      "Wallapop": FooterModel.wallapopLinks,
      "Soporte": FooterModel.soporteLinks,
      "Legal": FooterModel.legalLinks,
      "Motor": FooterModel.motorLinks,
      "Wallapop PRO": FooterModel.wallapopProLinks,
    });

    document.querySelector("body").insertAdjacentHTML("beforeend", footerHTML);
  }
};
