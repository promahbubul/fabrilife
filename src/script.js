const hamburgerMenu = document.getElementById("hamburgerMenu");

const controlMenu = () => {
  hamburgerMenu.classList.remove("hidden");
};

const showMenu = () => {
  hamburgerMenu.classList.add("hidden");
};
