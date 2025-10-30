document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector(".dynamic_bg");

  const imageMap = {
    imgbtn_click_01: "img/malnori.png",
    imgbtn_click_02: "img/mulnori.png",
    imgbtn_click_03: "img/matnori.png",
    imgbtn_click_04: "img/momnori.png",
  };

  Object.keys(imageMap).forEach((className) => {
    const btn = document.querySelector(`.${className}`);
    if (!btn) return;

    btn.addEventListener("click", () => {
      bg.style.backgroundImage = `url(${imageMap[className]})`;
      bg.style.opacity = 0.3;

      setTimeout(() => {
        bg.style.opacity = 0;
      }, 2000);
    });
  });
});
