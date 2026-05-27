// script.js

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Admission Form

document
  .getElementById("admissionForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    alert("Admission Form Submitted Successfully!");
  });

// Query Form

document
  .getElementById("queryForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    alert("Your Query Has Been Sent!");
  });

// Scroll Animation

const cards = document.querySelectorAll(
  ".info-card, .gallery-item, .form-container"
);

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.8s";

});