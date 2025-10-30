document.addEventListener("DOMContentLoaded", () => {
  const iconElements = document.getElementsByClassName("icon_change");
  const icons = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "×", "÷"];

  if (iconElements.length === 0) return;
  setInterval(() => {
    for (let i = 0; i < iconElements.length; i++) {
      const randomIndex1 = Math.floor(Math.random() * icons.length);
      const randomIndex2 = Math.floor(Math.random() * icons.length);
      iconElements[i].textContent = icons[randomIndex1] + icons[randomIndex2];
    }
  }, 300);
});
