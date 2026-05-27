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
// Admission Form + PDF Receipt + WhatsApp

document
  .getElementById("admissionForm")
  .addEventListener("submit", function(e){

    e.preventDefault();

    const name =
      document.querySelector("#admissionForm input[type='text']").value;

    const email =
      document.querySelector("#admissionForm input[type='email']").value;

    const mobile =
      document.querySelector("#admissionForm input[type='tel']").value;

    const course =
      document.querySelector("#admissionForm select").value;

    // Generate PDF

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Ashutosh Career Point", 20, 20);

    doc.setFontSize(16);
    doc.text("Admission Receipt", 20, 35);

    doc.setFontSize(12);

    doc.text(`Student Name: ${name}`, 20, 55);
    doc.text(`Email: ${email}`, 20, 70);
    doc.text(`Mobile: ${mobile}`, 20, 85);
    doc.text(`Course: ${course}`, 20, 100);

    doc.text("Status: Admission Submitted Successfully", 20, 125);

    // Download PDF

    doc.save(`${name}_Admission_Receipt.pdf`);

    // WhatsApp Message

    const message =
`Hello Ashutosh Career Point,

New Admission Form Submitted

Student Name: ${name}
Email: ${email}
Mobile: ${mobile}
Course: ${course}`;

    const whatsappURL =
`https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

  });