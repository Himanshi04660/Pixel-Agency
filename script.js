// function toggleMenu() {
//     const menu = document.getElementById('menu');
//     menu.classList.toggle('open');
//   }

//   const text = "\u00A0\u00A0Share your vision with us your goals, vision , timeline, and budget. Let's bring your idea to life!";
//   let i = 0;
//   const speed = 40;

//   function typeWriter() {
//     if (i < text.length) {
//       document.getElementById("typing-text").innerHTML += text.charAt(i);
//       i++;
//       setTimeout(typeWriter, speed);
//     }
//   }

//   window.onload = typeWriter;

//   // Smooth scroll for SERVICES menu item
// document.querySelectorAll('.menu-links a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//     // Close menu after click (if mobile menu)
//     document.querySelector('.menu').classList.remove('open');
//   });
// });

// // Back to Top Button
// const backToTop = document.getElementById("backToTop");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 300) {
//     backToTop.style.display = "block";
//   } else {
//     backToTop.style.display = "none";
//   }
// });

// backToTop.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// });

// ========================
// Toggle Side Menu
// ========================
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

// ========================
// Typing Effect for Project Box
// ========================
const text =
  "\u00A0\u00A0Share your vision with us — your goals, vision, timeline, and budget. Let's bring your idea to life!";
let i = 0;
const speed = 40;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  typeWriter();
};

// ========================
// Smooth Scroll for Menu Links
// ========================
document.querySelectorAll('.menu-links a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // If it's an in-page section link
    if (targetId.startsWith("#")) {
      e.preventDefault();

      // Smooth scroll to section
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }

      // Close the menu
      document.getElementById("menu").classList.remove("open");
    }
  });
});

// ========================
// Back to Top Button
// ========================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

