// --- Header-Bildwechsel ---
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const slides = header.querySelectorAll(".slide");

  if (slides.length > 1) {
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 7000); // alle 7 Sekunden
  }
});

// --- Attraktionen Slideshow ---
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#attraktionen .relative").forEach(section => {
    const slides = section.querySelectorAll(".slide");
    if (slides.length > 1) {
      let index = 0;
      setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
      }, 6000);
    }
  });
});

// --- Tag/Nacht-Schalter ---
const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
}
// ---------------------------------
// Dynamischer Abend-Nacht-Wechsel
// ---------------------------------
function updateHeaderMode(index) {
  const header = document.getElementById("header");
  header.classList.remove("evening-mode", "night-mode");

  if (index === 1) {
    header.classList.add("evening-mode");
  } else if (index === 2) {
    header.classList.add("night-mode");
  }
}

// Wenn Header wechselt → Stil anpassen
function showHeaderSlide(index) {
  headerSlides[currentHeader].classList.remove("active");
  currentHeader = index;
  headerSlides[currentHeader].classList.add("active");
  updateHeaderMode(index);
}
