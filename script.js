/* =========================
   EDGE NAVIGATION CONTROL
========================= */

const edgeTab = document.getElementById("edgeTab");
const sideNav = document.getElementById("sideNav");
const overlay = document.getElementById("overlay");

function toggleNav() {
  sideNav.classList.toggle("active");
  overlay.classList.toggle("active");
}

edgeTab.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

/* =========================
   SMOOTH SCROLL SYSTEM
========================= */

function scrollToSection(id) {
  const target = document.getElementById(id);

  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  // close nav after click
  sideNav.classList.remove("active");
  overlay.classList.remove("active");
}

/* NAV ITEM CLICK HANDLER (FAST DELEGATION) */

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-target");
    scrollToSection(target);
  });
});

/* =========================
   PRICING CARDS SYSTEM
========================= */

const priceCards = document.querySelectorAll(".price-card");

priceCards.forEach(card => {
  card.addEventListener("click", () => {

    // remove active from all cards
    for (let i = 0; i < priceCards.length; i++) {
      priceCards[i].classList.remove("active");
    }

    // add active to clicked card
    card.classList.add("active");
  });
});

/* =========================
   SCROLL SPY (LIGHTWEIGHT)
========================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const id = entry.target.id;

      document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active-nav");

        if (item.dataset.target === id) {
          item.classList.add("active-nav");
        }
      });

    }
  });
}, {
  threshold: 0.4
});

sections.forEach(sec => observer.observe(sec));

/* =========================
   WHATSAPP BOOKING SYSTEM
========================= */

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, select");

  let message = "✨ KASHMIL UNISEX SALON BOOKING ✨%0A%0A";

  inputs.forEach(input => {
    const label = input.placeholder || input.name || "Field";
    message += `• ${label}: ${input.value}%0A`;
  });

  const phone = "91XXXXXXXXXX"; // replace with real number

  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");
});

/* =========================
   PERFORMANCE NOTES
========================= */

/*
✔ No scroll event spam
✔ Only IntersectionObserver used
✔ Minimal DOM updates
✔ Class-based UI changes
✔ Fully SPCK optimized
*/