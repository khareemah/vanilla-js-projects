const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  },
  {
    id: 10,
    title: "dinner steak",
    category: "dinner",
    price: 33.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
  }
];
const menuRow = document.querySelector("section.menu .row");
window.addEventListener("DOMContentLoaded", function() {
  displayMenuItems(menu);
  displayMenuBtn();
});

function displayMenuItems(menuItems) {
  let display = menuItems.map(({ title, price, img, desc, category }) => {
    return ` <article class="menu-item">
              <div class="image">
                <img src="${img}" alt="${title}" />
              </div>
              <div class="text">
                <header>
                  <h4 class="title">${title}</h4>
                  <h4 class="price">$${price}</h4>
                </header>
                <p class="description">
                ${desc}
              </div>
            </article>`;
  });
  menuRow.innerHTML = display.join("");
}

function displayMenuBtn() {
  const allCategories = [
    "all",
    ...new Set(menu.map(({ category }) => category))
  ];
  const btnContainer = document.querySelector(".btn-container");
  const filterBtns = allCategories.map(category => {
    if (category === "all") {
      return `<button class="btn active" data-category="${category}">${category}</button>`;
    }
    return `<button class="btn" data-category="${category}">${category}</button>`;
  });
  btnContainer.innerHTML = filterBtns.join("");

  const btns = document.querySelectorAll(".btn-container .btn");
  btns.forEach(btn => {
    btn.addEventListener("click", function() {
      btns.forEach(menuBtn => {
        menuBtn.classList.remove("active");
        this.classList.add("active");
      });
      const menuCategory = btn.dataset.category;
      const filterMenu = menu.filter(
        ({ category }) => menuCategory === category
      );
      if (menuCategory == "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(filterMenu);
      }
    });
  });
}
