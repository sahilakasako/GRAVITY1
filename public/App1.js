function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

function closeMobileMenu() {
  const menu = document.getElementById("hamburger-icon");
  menu.classList.remove("open");
}
