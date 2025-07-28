
const toggleBtn = document.getElementById("toggleBtn");
const moreText = document.getElementById("more-text");
const dots = document.getElementById("dots");

toggleBtn.addEventListener("click", function () {
  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    dots.style.display = "none";
    toggleBtn.textContent = "Sembunyikan";
  } else {
    moreText.classList.add("hidden");
    dots.style.display = "inline";
    toggleBtn.textContent = "Lihat Selengkapnya";
  }
});


const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
