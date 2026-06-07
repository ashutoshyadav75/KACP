// // script.js

// const menuBtn = document.getElementById("menuBtn");
// const navLinks = document.querySelector(".nav-links");

// menuBtn.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// // Admission Form

// document
//   .getElementById("admissionForm")
//   .addEventListener("submit", function(e){

//     e.preventDefault();

//     alert("Admission Form Submitted Successfully!");
//   });

// // Query Form

// document
//   .getElementById("queryForm")
//   .addEventListener("submit", function(e){

//     e.preventDefault();

//     alert("Your Query Has Been Sent!");
//   });

// // Scroll Animation

// const cards = document.querySelectorAll(
//   ".info-card, .gallery-item, .form-container"
// );

// window.addEventListener("scroll", () => {

//   cards.forEach(card => {

//     const cardTop = card.getBoundingClientRect().top;

//     if(cardTop < window.innerHeight - 100){

//       card.style.opacity = "1";
//       card.style.transform = "translateY(0)";
//     }

//   });

// });

// cards.forEach(card => {

//   card.style.opacity = "0";
//   card.style.transform = "translateY(50px)";
//   card.style.transition = "0.8s";

// });
// Admission Form + PDF Receipt + WhatsApp

// document
//   .getElementById("admissionForm")
//   .addEventListener("submit", function(e){

//     e.preventDefault();

//     const name =
//       document.querySelector("#admissionForm input[type='text']").value;

//     const email =
//       document.querySelector("#admissionForm input[type='email']").value;

//     const mobile =
//       document.querySelector("#admissionForm input[type='tel']").value;

//     const course =
//       document.querySelector("#admissionForm select").value;

//     // Generate PDF

//     const { jsPDF } = window.jspdf;

//     const doc = new jsPDF();

//     doc.setFontSize(22);
//     doc.text("Ashutosh Career Point", 20, 20);

//     doc.setFontSize(16);
//     doc.text("Admission Receipt", 20, 35);

//     doc.setFontSize(12);

//     doc.text(`Student Name: ${name}`, 20, 55);
//     doc.text(`Email: ${email}`, 20, 70);
//     doc.text(`Mobile: ${mobile}`, 20, 85);
//     doc.text(`Course: ${course}`, 20, 100);

//     doc.text("Status: Admission Submitted Successfully", 20, 125);

//     // Download PDF

//     doc.save(`${name}_Admission_Receipt.pdf`);

//     // WhatsApp Message

//     const message =
// `Hello Ashutosh Career Point,

// New Admission Form Submitted

// Student Name: ${name}
// Email: ${email}
// Mobile: ${mobile}
// Course: ${course}`;

//     const whatsappURL =
// `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

//     window.open(whatsappURL, "_blank");

//   });

// Firebase Imports

import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Your Firebase Config

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain: "YOUR_AUTH_DOMAIN",

  projectId: "YOUR_PROJECT_ID",

  storageBucket: "YOUR_STORAGE_BUCKET",

  messagingSenderId: "YOUR_MESSAGING_ID",

  appId: "YOUR_APP_ID"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// Admission Form

document
  .getElementById("admissionForm")
  .addEventListener("submit", async function(e){

    e.preventDefault();

    const name =
      document.querySelector("#admissionForm input[type='text']").value;

    const email =
      document.querySelector("#admissionForm input[type='email']").value;

    const mobile =
      document.querySelector("#admissionForm input[type='tel']").value;

    const course =
      document.querySelector("#admissionForm select").value;

    try {

      // Save Data

      await addDoc(collection(db, "admissions"), {

        name: name,
        email: email,
        mobile: mobile,
        course: course,
        createdAt: new Date()

      });

      alert("Admission Submitted Successfully!");

      // WhatsApp

      const message =
`Hello Ashutosh Career Point,

New Admission Form Submitted

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Course: ${course}`;

      const whatsappURL =
`https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, "_blank");

    }

    catch(error){

      console.log(error);

      alert("Error Saving Data");

    }

  });


// Query Form

document
  .getElementById("queryForm")
  .addEventListener("submit", async function(e){

    e.preventDefault();

    const name =
      document.querySelector("#queryForm input[type='text']").value;

    const email =
      document.querySelector("#queryForm input[type='email']").value;

    const query =
      document.querySelector("#queryForm textarea").value;

    try {

      await addDoc(collection(db, "queries"), {

        name: name,
        email: email,
        query: query,
        createdAt: new Date()

      });

      alert("Query Submitted Successfully!");

    }

    catch(error){

      console.log(error);

      alert("Error Saving Query");

    }

  });

  function showLogin(){

    document
    .getElementById("loginForm")
    .style.display="block";

    document
    .getElementById("registerForm")
    .style.display="none";
}

function showRegister(){

    document
    .getElementById("loginForm")
    .style.display="none";

    document
    .getElementById("registerForm")
    .style.display="block";
}

function sendMessage(){

    let input =
    document.getElementById("userInput");

    let userText =
    input.value.toLowerCase();

    let chatBox =
    document.getElementById("chat-box");

    chatBox.innerHTML +=
    `<div class="message user">${userText}</div>`;

    let reply = "";

    if(userText.includes("jee")){

        reply =
        "JEE is best for engineering aspirants.";

    }

    else if(userText.includes("neet")){

        reply =
        "NEET is for students interested in medical careers.";

    }

    else if(userText.includes("java")){

        reply =
        "Java Full Stack has excellent career opportunities in software development.";

    }

    else if(userText.includes("b.tech")){

        reply =
        "After B.Tech you can pursue placements, higher studies, or software development careers.";

    }

    else{

        reply =
        "Please contact ACP counselor for detailed guidance.";
    }

    setTimeout(()=>{

        chatBox.innerHTML +=
        `<div class="message bot">${reply}</div>`;

        chatBox.scrollTop =
        chatBox.scrollHeight;

    },500);

    input.value="";
}