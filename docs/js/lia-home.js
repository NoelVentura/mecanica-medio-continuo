/**
 * MMC — plantilla estilo LIA (fase 1: header + hero)
 * AOS = fades simples | GSAP = parallax / timeline del mockup
 */
(function () {
  "use strict";

  /* ---- AOS ---- */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }

  /* ---- Header sticky blur state ---- */
  var header = document.querySelector("[data-lia-header]");
  var drawer = document.querySelector("[data-lia-drawer]");
  var openBtns = document.querySelectorAll("[data-lia-menu-open]");
  var closeEls = document.querySelectorAll("[data-lia-menu-close]");

  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
    openBtns.forEach(function (btn) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  openBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setDrawer(true);
    });
  });
  closeEls.forEach(function (el) {
    el.addEventListener("click", function () {
      setDrawer(false);
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setDrawer(false);
  });

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Prompt chips / mic / form ---- */
  var input = document.getElementById("lia-ask");
  var chips = document.querySelectorAll("[data-chip]");
  var prompts = {
    Esfuerzos: "Explica el tensor de esfuerzos de Cauchy",
    Deformación: "¿Qué es el tensor de deformación infinitesimal?",
    Tensores: "Repasa notación indicial y tensores de orden 2",
    Constitutivas: "Relación esfuerzo–deformación elástica lineal",
  };

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) {
        c.classList.remove("is-active");
      });
      chip.classList.add("is-active");
      if (input) {
        input.value =
          prompts[chip.getAttribute("data-chip")] ||
          chip.getAttribute("data-chip");
        input.focus();
      }
    });
  });

  var form = document.querySelector("[data-lia-prompt-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = (input && input.value.trim()) || "";
      if (!q) return;
      var chat = document.querySelector("[data-lia-chat]");
      if (!chat) return;
      var user = document.createElement("div");
      user.className = "lia-bubble lia-bubble--user";
      user.innerHTML =
        '<span class="lia-bubble__meta">Estudiante</span>' + escapeHtml(q);
      chat.appendChild(user);

      var bot = document.createElement("div");
      bot.className = "lia-bubble lia-bubble--bot";
      bot.innerHTML =
        '<span class="lia-bubble__meta">Respuesta guiada</span>' +
        "Consulta registrada localmente. <!-- PLACEHOLDER: enlazar FAQ/unidad --> " +
        "Revisa el <strong>temario</strong> o la unidad relacionada en el menú.";
      chat.appendChild(bot);
      chat.scrollTop = chat.scrollHeight;
      input.value = "";
    });
  }

  var mic = document.querySelector("[data-lia-mic]");
  if (mic) {
    mic.addEventListener("click", function () {
      mic.classList.toggle("is-listening");
      if (input && mic.classList.contains("is-listening")) {
        input.placeholder = "Escuchando… (simulado)";
        setTimeout(function () {
          mic.classList.remove("is-listening");
          input.placeholder = "Pregunta sobre el curso…";
          input.value =
            "Definición de medio continuo y hipótesis fundamentales";
        }, 1600);
      }
    });
  }

  var themeBtn = document.querySelector("[data-lia-theme]");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      document.documentElement.classList.toggle("lia-light");
    });
  }

  /* ---- GSAP: parallax atmósfera + timeline burbujas ---- */
  if (typeof gsap !== "undefined") {
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    var atmosphere = document.querySelector("[data-lia-parallax]");
    if (atmosphere && typeof ScrollTrigger !== "undefined") {
      gsap.to(atmosphere, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    var bubbles = document.querySelectorAll("[data-lia-bubble]");
    if (bubbles.length) {
      gsap.set(bubbles, { opacity: 0, y: 16 });
      gsap.to(bubbles, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.14,
        ease: "power2.out",
        delay: 0.35,
      });
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
