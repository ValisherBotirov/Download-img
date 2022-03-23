const prosent = document.querySelector(".downloadProsent");
const img = document.querySelector(".img");
const btn = document.querySelector(".download");

btn.addEventListener("click", function () {
  btn.style.opacity = 0;
  prosent.style.opacity = 1;
  let x = 0;
  let y = 10;
  let setInt = setInterval(function () {
    x++;
    y = y - 0.1;

    img.style.webkitFilter = `blur(${y}px)`;
    prosent.textContent = `${x + 1}%`;
    if (x == 99 || y == 0) {
      clearInterval(setInt);
      prosent.style.opacity = 0;
    }
  }, 100);
});
