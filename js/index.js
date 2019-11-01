// Your code goes here

// Navigaton Links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "scale(1,2)";
    link.style.transition = "all 0.1s";
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1,1)";
    link.style.transition = "all 0.1s";
  });
});

// Logo
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("click", () => {
  logoHeading.textContent = "Ugly Bus";
});
