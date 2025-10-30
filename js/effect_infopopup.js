document.querySelectorAll('[class^="wrap_book"]').forEach((book) => {
  const info = book.querySelector('[class^="info_book"]');
  const img = book.querySelector('[class^="img_book"]');

  book.addEventListener("click", () => {
    info.classList.toggle("visible");
    img.classList.toggle("blurred");
  });
});
