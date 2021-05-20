// JavaScript Document
const navAnimation = document.querySelector("header .container");
const burgerBtn = document.querySelector(".burger");
const navBarActive = document.querySelector(".main-nav ul");
const content = document.querySelector(".is-searchResults");
const searchBar = document.querySelector("#searchBar");
const btn = document.querySelector("#btn");

/*****************burger btn********************/
burgerBtn.addEventListener("click", () => {
  navAnimation.classList.toggle("active");
  if (window.innerWidth < 768) {
    navBarActive.style.visibility = "visible";
  }
});
/********************scroll **********************/
window.addEventListener('scroll', function () {
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0)
})
const scroll = new SmoothScroll('header a[href*="#"]');
const linkClose = document.querySelectorAll("header a");
linkClose.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navBarActive.style.visibility = "hidden";
      navAnimation.classList.remove("active");
    }
  })
});
/**********************draaw ui***********************/

const itemsContent = [{
    id: 1,
    imgUrl: './images/pet-01.png',
    name: 'Rocco',
    gender: 'Male | Young',
    location: 'Madrid'

  },
  {
    id: 2,
    imgUrl: './images/pet-02.png',
    name: 'Chanona',
    gender: 'Male | Young',
    location: 'Madrid'

  },
  {
    id: 3,
    imgUrl: './images/pet-03.png',
    name: 'Morio',
    gender: 'Male | Young',
    location: 'Paris'

  },
  {
    id: 4,
    imgUrl: './images/pet-04.png',
    name: 'danio',
    gender: 'Male | Young',
    location: 'New York'

  }
];
let itemContent;

function drawUi(array) {
  itemContent = array.map((item) => {
    return `<div class="widget">
              <div class="widget__image"> <img src="${item.imgUrl}" alt="pet image"> </div>
              <div class="widget__desc">
                <h4>${item.name}</h4>
                <p>${item.gender}</p>
                <p>${item.location}</p>
              </div>
            </div>`;
  }).join("");
  content.innerHTML = itemContent;
}

/*******************all************************/
btn.addEventListener('click', (e) => {
  e.preventDefault();

  if(searchBar.value =="") {
	  alert("You Sould  Enter Data");
  }
	else {
		  const filterItems = itemsContent.filter((item) => {
    return item.location.toLowerCase().includes(searchBar.value.toLowerCase());
  })
		   if (filterItems.length == 0) {
           alert("The City Is Not Found Try Again");
  }
		else {
			drawUi(filterItems);
		}
	}
});
