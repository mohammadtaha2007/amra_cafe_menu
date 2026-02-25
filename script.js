const links = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll(".category");
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("foodModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // جلوگیری از اسکرول

    modalImg.src = card.dataset.img;
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modalPrice.textContent = card.dataset.price;
  });
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // برگردوندن اسکرول
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// بستن با ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// اسکرول نرم با JS
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 20,
      behavior: "smooth",
    });
  });
});

// هایلایت دسته فعال هنگام اسکرول
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// ─── Intro Screen ────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById("intro-screen");
  const enterBtn    = document.getElementById("enter-menu-btn");
  const mainContent = document.getElementById("main-content");

  // اگر قبلاً وارد شده بود (اختیاری – با localStorage)
  // if (localStorage.getItem("introSeen") === "true") {
  //   introScreen.classList.add("hidden");
  //   return;
  // }

  enterBtn.addEventListener("click", () => {
    introScreen.classList.add("hidden");
    
    // اختیاری: ذخیره در localStorage که دفعه بعد مستقیم بره منو
    // localStorage.setItem("introSeen", "true");

    // اختیاری: کمی تأخیر برای انیمیشن بهتر
    setTimeout(() => {
      introScreen.style.display = "none";
    }, 800);
  });
});