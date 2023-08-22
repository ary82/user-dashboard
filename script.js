const menu_button = document.getElementById("menu");
const left_bar = document.getElementById("left_bar");
const overlay = document.getElementById("overlay");
const close_button = document.querySelector("#left_bar > #close_button")
menu_button.addEventListener("click", () => {
  left_bar.style.setProperty("left", "0");
  overlay.style.setProperty("display", "inline");
});
close_button.addEventListener("click", () => {
  left_bar.style.removeProperty("left")
  overlay.style.removeProperty("display")
});
