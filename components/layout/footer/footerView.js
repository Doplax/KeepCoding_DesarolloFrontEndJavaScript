export const footerView = {
  renderColumn(title, links) {
    return `
      <div class="flex-1 m-5">
        <h3 class="text-[#607D8B] font-bold">${title}</h3>
        <ul>
          ${links.map(link => `<li class="text-[#90A4AE] mt-2"><a class='hover:text-[#13c1ac]' href="#">${link}</a></li>`).join('')}
        </ul>
      </div>`;
  },

  renderFooter(footerData) {
    return `
      <footer class="mt-20 md:px-36 flex justify-center flex-wrap">
        <div class='mx-5'>
          <img src="/assets/images/textLogo.png" alt="" />
          <p class='text-sm my-5 text-[#90A4AE] '>Copyright© 2023 Wallapop© <br/> de sus respectivos propietarios</p>
        </div>
        ${Object.entries(footerData).map(([title, links]) => this.renderColumn(title, links)).join('')}
      </footer>`;
  }
};
