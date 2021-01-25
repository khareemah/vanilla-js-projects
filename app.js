const sectionRow = document.querySelector("section.projects .row");
const projects = [
  {
    url: "./1. color flipper/index.html",
    img: "./img/color-flipper.PNG",
    title: "color flipper"
  },
  {
    url: "./2. counter/index.html",
    img: "./img/counter.PNG",
    title: "counter"
  },
  {
    url: "./3. review/index.html",
    img: "./img/review.PNG",
    title: "review"
  },
  {
    url: "./4. navbar/index.html",
    img: "./img/navbar.PNG",
    title: "navbar"
  },
  {
    url: "./5. sidebar/index.html",
    img: "./img/sidebar.PNG",
    title: "sidebar"
  },
  {
    url: "./6. modal/index.html",
    img: "./img/modal.PNG",
    title: "modal"
  },
  {
    url: "./7. questions/index.html",
    img: "./img/questions.PNG",
    title: "questions"
  }
];

projects.forEach(({ url, img, title }) => {
  sectionRow.innerHTML += `
    <div>
            <div class="inner">
              <a href="${url}" target="_blank">
                <img src="${img}" alt="${title}" />
                <h3 class="project-title">${title}</h3>
              </a>
            </div>
          </div>`;
});
