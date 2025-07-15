// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Optional: Alert on button click
const shopBtn = document.querySelector('.btn');
shopBtn.addEventListener('click', () => {
  alert("Explore our signature scents below!");
});
