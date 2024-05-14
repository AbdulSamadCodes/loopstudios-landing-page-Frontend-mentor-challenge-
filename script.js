
/*==========Navbar handler function========*/

function navbarHandler() {
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggle]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const overlay = document.querySelector("[data-overlay]");
  
  const navToggle = () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  const navClose = () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  }

  navTogglers.forEach((toggler) => {
    toggler.addEventListener("click" , navToggle);
  })
  
  navLinks.forEach((link) => {
    link.addEventListener("click",navClose );
  })
}

navbarHandler();

/*========Function to add background on cards=======*/

function addBackground() {
  const creationCards = document.querySelectorAll("[data-creation-card]");
  
  creationCards.forEach((card) => {
    const mobileBgUrl = card.dataset.mobileBg;
    const desktopBgUrl = card.dataset.desktopBg;
   
    if(window.innerWidth < 575) {
      card.style.backgroundImage = `url("${mobileBgUrl}")`;
    } else {
      card.style.backgroundImage = `url("${desktopBgUrl}")`;  
    }
  })
}

window.addEventListener("resize",addBackground);

window.addEventListener("DOMContentLoaded",addBackground);


