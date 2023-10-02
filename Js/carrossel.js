document.addEventListener("DOMContentLoaded", () => {
  const controls = document.querySelectorAll(".control");
  let itemAtual = 0;
  const items = document.querySelectorAll(".item");
  const maxItems = items.length;

  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      let isLeft = e.target.classList.contains("seta__esquerda");

      if (isLeft) {
        itemAtual -= 1;
      } else {
        itemAtual += 1;
      }

      if (itemAtual >= maxItems) {
        itemAtual = 0;
      }

      if (itemAtual < 0) {
        itemAtual = maxItems - 1;
      }

      items.forEach((item) => item.classList.remove("itemAtual"));
      items[itemAtual].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
      items[itemAtual].classList.add("itemAtual");
    });
  });
});
