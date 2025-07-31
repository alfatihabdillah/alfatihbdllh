
      document.addEventListener("DOMContentLoaded", function () {
        const mobileMenuBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        mobileMenuBtn.addEventListener("click", function () {
          mobileMenu.classList.toggle("hidden");
        });

        document.querySelectorAll("#mobile-menu a").forEach((link) => {
          link.addEventListener("click", function () {
            mobileMenu.classList.add("hidden");
          });
        });
      });
    


      document.addEventListener("DOMContentLoaded", function () {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");

              if (entry.target.closest("#skills")) {
                const skillBars = entry.target.querySelectorAll(".skill-progress");
                skillBars.forEach((bar) => {
                  const width = bar.getAttribute("data-width");
                  setTimeout(() => {
                    bar.style.width = width + "%";
                  }, 300);
                });
              }
            }
          });
        }, observerOptions);

        document.querySelectorAll(".fade-in").forEach((el) => {
          observer.observe(el);
        });
      });
    


      document.addEventListener("DOMContentLoaded", function () {
        const typingElement = document.getElementById("typing-text");
        const texts = [
          "Video Editing",
          "UI/UX Designer",
          "Photo Editing",
          "Networking and System Installation",
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeText() {
          const currentText = texts[textIndex];

          if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
          } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
          }

          let typeSpeed = isDeleting ? 50 : 100;

          if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
          } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
          }

          setTimeout(typeText, typeSpeed);
        }

        typeText();
      });
    


      document.addEventListener("DOMContentLoaded", function () {
        const backToTopBtn = document.getElementById("back-to-top");

        window.addEventListener("scroll", function () {
          if (window.pageYOffset > 300) {
            backToTopBtn.classList.remove("opacity-0", "invisible");
          } else {
            backToTopBtn.classList.add("opacity-0", "invisible");
          }
        });

        backToTopBtn.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    


      document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById("contact-form");

        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const formData = new FormData(contactForm);
          const name = formData.get("name");
          const email = formData.get("email");
          const subject = formData.get("subject");
          const message = formData.get("message");

          alert(
            "Terima kasih atas pesan Anda! Saya akan segera menghubungi Anda kembali.",
          );
          contactForm.reset();
        });
      });
    


      document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
              const offsetTop = target.offsetTop - 80;
              window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
              });
            }
          });
        });
      });
    