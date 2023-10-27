export const headerView = {
  render(headerModel) {
    return `
      <header class="header">
        <nav class="nav">
          <ul class="nav-list">
            ${headerModel.links.map(link => `<li class="nav-item"><a href="${link.url}" class="nav-link">${link.name}</a></li>`).join('')}
          </ul>
        </nav>
      </header>
    `;
  }
};


