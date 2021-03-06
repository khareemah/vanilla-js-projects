// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
  }
];
// select items
const image = document.querySelector("main .card img");
const jobTitle = document.querySelector("main .card .job-title");
const author = document.querySelector("main .card .author");
const review = document.querySelector("main .card .review");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const randomBtn = document.querySelector(".random-btn");
let currentlySelected = 0;

// load intial image
window.addEventListener("DOMContentLoaded", function() {
  showPerson();
});

// prev, next and random person
prevBtn.addEventListener("click", function() {
  currentlySelected--;
  checkNumber();
  showPerson();
});
nextBtn.addEventListener("click", function() {
  currentlySelected++;
  checkNumber();
  showPerson();
});
randomBtn.addEventListener("click", showRandomPerson);

// function definitions
function showRandomPerson() {
  let randomNumber = Math.floor(Math.random() * reviews.length);
  if (randomNumber == currentlySelected) {
    randomNumber--;
  }
  currentlySelected = randomNumber;
  checkNumber();
  showPerson();
}

function showPerson() {
  let { name, job, img, text } = reviews[currentlySelected];
  image.src = img;
  image.alt = name;
  jobTitle.textContent = job;
  author.textContent = name;
  review.textContent = text;
}
function checkNumber() {
  if (currentlySelected < 0) {
    currentlySelected = reviews.length - 1;
  }
  if (currentlySelected == reviews.length) {
    currentlySelected = 0;
  }
}
