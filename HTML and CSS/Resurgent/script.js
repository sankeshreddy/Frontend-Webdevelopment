// Page loader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Dropdown on mobile
document.addEventListener('DOMContentLoaded', () => {
  const dropdownLinks = document.querySelectorAll('.dropdown > a');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = this.parentElement;

        document.querySelectorAll('.dropdown').forEach(drop => {
          if (drop !== parent) drop.classList.remove('open');
        });

        parent.classList.toggle('open');
      }
    });
  });

  

  // Animate about image
  const aboutImage = document.querySelector(".about-image");
  if (aboutImage) {
    const observer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(aboutImage);
  }
});
// Show Certificates Section and Images on Scroll
window.addEventListener('scroll', () => {
  const certSection = document.querySelector('.certificates-section');
  const certBoxes = document.querySelectorAll('.cert-box');

  const sectionTop = certSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.85;

  if (sectionTop < triggerPoint) {
    certSection.classList.add('show');
    certBoxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add('show');
      }, index * 200); // stagger animation
    });
  }
});

// Animate About Us Section on Scroll
window.addEventListener('scroll', () => {
  const aboutHeading = document.querySelector('.about-heading');
  const aboutText = document.querySelector('.about-text');
  const aboutImage = document.querySelector('.about-image');

  const triggerPoint = window.innerHeight * 0.85;

  if (aboutHeading.getBoundingClientRect().top < triggerPoint) {
    aboutHeading.classList.add('show');
  }
  if (aboutText.getBoundingClientRect().top < triggerPoint) {
    aboutText.classList.add('show');
  }
  if (aboutImage.getBoundingClientRect().top < triggerPoint) {
    aboutImage.classList.add('show');
  }
});

// Hide Loader After Page Load
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
});

// Scroll Animation for all elements with 'animate-on-scroll'
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));
});

// Scroll animation for Vision & Mission section
function handleScrollAnimation() {
  const cards = document.querySelectorAll('.card');
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('visible'); // Fade in
    } else {
      card.classList.remove('visible'); // Fade out
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// function typewriterEffect(elementId, text, delay = 30) {
//   const element = document.getElementById(elementId);
//   element.textContent = '';
//   let i = 0;

//   function typeChar() {
//     if (i < text.length) {
//       element.textContent += text.charAt(i);
//       i++;
//       setTimeout(typeChar, delay);
//     }
//   }
//   typeChar();
// }

// === About Us: Trigger on first scroll only ===
let aboutAnimated = false;
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !aboutAnimated) {
      aboutAnimated = true;
      const aboutText = document.getElementById('typewriter-text').textContent.trim();
      typewriterEffect('typewriter-text', aboutText, 30);
      aboutObserver.unobserve(entry.target); // Stop observing once animated
    }
  });
}, { threshold: 0.6 });

document.addEventListener('DOMContentLoaded', () => {
  const aboutElement = document.getElementById('typewriter-text');
  if (aboutElement) aboutObserver.observe(aboutElement);

  // Vision and Mission (on page load)
  const visionText = document.getElementById('vision-type').textContent.trim();
  typewriterEffect('vision-type', visionText, 30);

  const missionText = document.getElementById('mission-type').textContent.trim();
  typewriterEffect('mission-type', missionText, 30);
});

fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });