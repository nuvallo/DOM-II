// Your code goes here

// Navigaton Links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "scale(1,2)";
    link.style.transition = "all 0.1s";
    event.preventDefault();
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1,1)";
    link.style.transition = "all 0.1s";
    event.preventDefault();
  });
});

// Logo
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("wheel", () => {
  logoHeading.textContent = "Ugly Bus";
});

// bus image
const busImage = document.querySelector("img");
busImage.addEventListener("dblclick", () => {
  busImage.src = "https://source.unsplash.com/user/erondu";
});

// All heading Twos
const allHeadingTwos = document.querySelectorAll("h2");
allHeadingTwos.forEach(heading => {
  window.addEventListener("scroll", () => {
    heading.textContent = "SUPER UGLY BUSSES";
  });
});

// All heading Fours
const allHeadingFours = document.querySelectorAll("h4");
allHeadingFours.forEach(heading => {
  window.addEventListener("load", () => {
    heading.textContent = "Trust me, You don't want to sign up!";
  });
});

// Buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
  btn.textContent = "Don't sign up";
  btn.addEventListener("click", () => {
    btn.textContent = "You Really Did It :(";
  });
});

// body resize
const body = document.querySelector("body");
window.addEventListener("resize", () => {
  (body.style = "display: none;"),
    document.write("HAHA! Now you have to refresh xD");
});

// Paragraphs
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(paragraph => {
  window.addEventListener("keydown", () => {
    paragraph.textContent = "This site doesn't need paragraphs";
  });
});

// Images
const images = document.querySelectorAll("img");
images.forEach(image => {
  image.addEventListener("drag", () => {
    image.src = "#";
    image.alt = "NO MORE IMAGES!! MAHAHAHA";
  });
});

// Propogation
const headingOne = document.querySelector("h2");
headingOne.addEventListener("click", event => {
  headingOne.style.backgroundColor = "hotpink";
  console.log("start");
  event.stopPropagation();
});
