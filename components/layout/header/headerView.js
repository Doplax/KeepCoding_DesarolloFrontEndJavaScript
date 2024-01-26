export const headerView = {
  render(headerLinks) {
    return `
    <header>
      <nav 
          class="
            flex flex-wrap
            items-center
            justify-between
            w-full
            py-4
            md:py-2
            px-4
            text-lg text-gray-700
            shadow-md
            bg-white
          "
        >
        <div>
            <a href="/">
              <img src="/assets/images/nodepop-loog.webp" class="w-10" alt="logo nodepop">
            </a>
          </div>
        
          <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              class="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
        
        <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
            <ul
              class="
                pt-4
                text-base text-gray-700
                md:flex
                md:justify-between 
                md:pt-0"
            >
            ${headerLinks
              .map((element) => {
                return `
              <li id="navButton-${element.id}">
                <a class="flex justify-center md:p-4 py-2 font-bold hover:text-[#13c1ac]" href=${element.url}
                  >${element.name}</a
                >
              </li>`;
              })
              .join("")}
            </ul>
          </div>
      </nav>
    </header>
      
    `;
  },
};
